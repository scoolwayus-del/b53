import { supabase } from '../lib/supabaseClient'

const hashIPAddress = (ip) => {
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash).toString(36)
}

const getClientIPAddress = () => {
  return 'client-ip-hidden'
}

export const submitContactForm = async (formData, securityChecks) => {
  try {
    const ipAddress = hashIPAddress(getClientIPAddress())
    const userAgent = navigator.userAgent

    const submission = {
      first_name: formData.firstName || '',
      last_name: formData.lastName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      company_name: formData.companyName || '',
      location: formData.location || '',
      venue: formData.venue || '',
      package: formData.package || '',
      video_link: formData.videoLink || '',
      timeline: formData.timeline || '',
      message: formData.message || '',
      ip_address: ipAddress,
      user_agent: userAgent.substring(0, 500),
      security_score: securityChecks?.score || 0
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([submission])
      .select()

    if (error) {
      console.error('Supabase error:', error)

      await logSecurityEvent({
        event_type: 'form_submission_error',
        ip_address: ipAddress,
        details: {
          form: 'contact',
          error: error.message
        },
        severity: 'medium'
      })

      throw new Error('Failed to submit form')
    }

    await logSecurityEvent({
      event_type: 'form_submission_success',
      ip_address: ipAddress,
      details: {
        form: 'contact',
        submission_id: data[0]?.id
      },
      severity: 'low'
    })

    return { success: true, data }
  } catch (error) {
    console.error('Form submission error:', error)
    return { success: false, error: error.message }
  }
}

export const submitVideoInquiry = async (formData, securityChecks) => {
  try {
    const ipAddress = hashIPAddress(getClientIPAddress())
    const userAgent = navigator.userAgent

    const submission = {
      full_name: formData.fullName || '',
      email: formData.email || '',
      phone: formData.phone || '',
      company_name: formData.companyName || '',
      location: formData.location || '',
      project_type: formData.projectType || '',
      project_details: formData.projectDetails || '',
      sample_video_link: formData.sampleVideoLink || '',
      preferred_timeline: formData.preferredTimeline || '',
      budget: formData.budget || '',
      consent_given: formData.consentGiven || false,
      ip_address: ipAddress,
      user_agent: userAgent.substring(0, 500),
      security_score: securityChecks?.score || 0
    }

    const { data, error } = await supabase
      .from('video_inquiries')
      .insert([submission])
      .select()

    if (error) {
      console.error('Supabase error:', error)

      await logSecurityEvent({
        event_type: 'form_submission_error',
        ip_address: ipAddress,
        details: {
          form: 'video_inquiry',
          error: error.message
        },
        severity: 'medium'
      })

      throw new Error('Failed to submit inquiry')
    }

    await logSecurityEvent({
      event_type: 'form_submission_success',
      ip_address: ipAddress,
      details: {
        form: 'video_inquiry',
        submission_id: data[0]?.id
      },
      severity: 'low'
    })

    return { success: true, data }
  } catch (error) {
    console.error('Video inquiry submission error:', error)
    return { success: false, error: error.message }
  }
}

export const logSecurityEvent = async (eventData) => {
  try {
    const { error } = await supabase
      .from('security_logs')
      .insert([{
        event_type: eventData.event_type || 'unknown',
        ip_address: eventData.ip_address || '',
        details: eventData.details || {},
        severity: eventData.severity || 'low',
        created_at: new Date().toISOString()
      }])

    if (error) {
      console.error('Failed to log security event:', error)
    }
  } catch (error) {
    console.error('Security logging error:', error)
  }
}

export const trackSuspiciousActivity = async (activityType, details) => {
  const ipAddress = hashIPAddress(getClientIPAddress())

  await logSecurityEvent({
    event_type: activityType,
    ip_address: ipAddress,
    details: {
      user_agent: navigator.userAgent.substring(0, 500),
      timestamp: new Date().toISOString(),
      ...details
    },
    severity: 'high'
  })
}
