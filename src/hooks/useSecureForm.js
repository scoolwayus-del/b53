import { useState, useEffect, useRef } from 'react'
import { rateLimiter } from '../security/rateLimiter'
import { csrfProtection } from '../security/csrfProtection'
import { sanitizeFormData } from '../security/inputSanitization'
import { validateHoneypot, addTimingCheck, trackMouseMovement } from '../security/honeypot'
import { detectBot } from '../security/botDetection'

export const useSecureForm = (formId) => {
  const [securityChecks, setSecurityChecks] = useState({
    rateLimitPassed: true,
    botDetectionPassed: true,
    honeypotPassed: true,
    timingPassed: true,
    humanActivityDetected: true
  })

  const [isSecurityBlocked, setIsSecurityBlocked] = useState(false)
  const [blockReason, setBlockReason] = useState(null)

  const timingCheckRef = useRef(null)
  const activityTrackerRef = useRef(null)
  const botCheckPerformedRef = useRef(false)

  useEffect(() => {
    timingCheckRef.current = addTimingCheck()
    activityTrackerRef.current = trackMouseMovement()

    if (!botCheckPerformedRef.current) {
      detectBot().then(result => {
        if (result.isBot) {
          setSecurityChecks(prev => ({ ...prev, botDetectionPassed: false }))
          setIsSecurityBlocked(true)
          setBlockReason('Bot detected')
        }
      })
      botCheckPerformedRef.current = true
    }

    return () => {
      if (activityTrackerRef.current) {
        activityTrackerRef.current.cleanup()
      }
    }
  }, [])

  const performSecurityChecks = async (formData, action = 'form_submit') => {
    const checks = { ...securityChecks }
    let blocked = false
    let reason = null

    const rateLimit = rateLimiter.checkLimit(action, 5, 60000)
    if (!rateLimit.allowed) {
      checks.rateLimitPassed = false
      blocked = true
      reason = `Rate limit exceeded. Try again in ${rateLimit.retryAfter} seconds.`
    }

    const honeypotResult = validateHoneypot(formData)
    if (honeypotResult.isBot) {
      checks.honeypotPassed = false
      blocked = true
      reason = 'Suspicious activity detected'
    }

    if (timingCheckRef.current) {
      const timingResult = timingCheckRef.current()
      if (timingResult.suspicious) {
        checks.timingPassed = false
        blocked = true
        reason = 'Form submitted too quickly'
      }
    }

    if (activityTrackerRef.current) {
      const isHuman = activityTrackerRef.current.isHuman()
      if (!isHuman) {
        checks.humanActivityDetected = false
        blocked = true
        reason = 'No human activity detected'
      }
    }

    setSecurityChecks(checks)
    setIsSecurityBlocked(blocked)
    setBlockReason(reason)

    return {
      passed: !blocked,
      reason,
      checks
    }
  }

  const sanitizeData = (formData) => {
    return sanitizeFormData(formData)
  }

  const getCSRFToken = () => {
    return csrfProtection.getToken()
  }

  const addCSRFToForm = (formElement) => {
    csrfProtection.addTokenToForm(formElement)
  }

  return {
    performSecurityChecks,
    sanitizeData,
    getCSRFToken,
    addCSRFToForm,
    securityChecks,
    isSecurityBlocked,
    blockReason
  }
}
