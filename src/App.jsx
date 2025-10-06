import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import LoadingFallback from './components/common/LoadingFallback'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register GSAP plugin once
gsap.registerPlugin(ScrollTrigger)

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const AffiliateProgram = lazy(() => import('./pages/AffiliateProgram'))

const App = () => {
  const location = useLocation()

  useEffect(() => {
    // ✅ Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('load', handleLoad)

    // ✅ Also refresh after React paints (fixes desktop bug)
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      window.removeEventListener('load', handleLoad)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Global scroll-to-top on every route change
  useEffect(() => {
    // Instant scroll to top for all route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])

  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/affiliate-program' element={<AffiliateProgram />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
