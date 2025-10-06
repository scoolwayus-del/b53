import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    // Instant scroll to top on route change (no smooth behavior to prevent mid-page loading)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // Force scroll position for all browsers
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])
}

export default useScrollToTop