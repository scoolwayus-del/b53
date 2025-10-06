import React, { useRef, useEffect, useState } from 'react';

const Video = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices for optimized video serving
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced video load and play handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video properties for iOS Safari compatibility
    const setupVideoForSafari = () => {
      video.muted = true; // CRITICAL: Must be set before autoplay
      video.playsInline = true;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x-webkit-airplay', 'allow');
      video.defaultMuted = true;
      video.volume = 0;
    };

    // Handle video load events
    const handleLoadedData = () => {
      setupVideoForSafari();
      setIsLoaded(true);
      
      // Attempt to play video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video autoplay successful');
          })
          .catch(error => {
            console.warn('Video autoplay failed:', error);
            // Fallback: try to play on user interaction
            handleAutoplayFailure();
          });
      }
    };

    // Handle autoplay policy restrictions
    const handleAutoplayFailure = () => {
      const playOnInteraction = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn('Manual video play failed:', error);
          });
        }
        
        // Remove event listeners after successful play
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
      };

      // Add multiple interaction listeners for iOS
      document.addEventListener('touchstart', playOnInteraction, { passive: true, once: true });
      document.addEventListener('click', playOnInteraction, { passive: true, once: true });
      document.addEventListener('scroll', playOnInteraction, { passive: true, once: true });
    };

    // Handle video errors
    const handleError = (error) => {
      console.error('Video loading error:', error);
      setHasError(true);
    };

    // Handle video metadata load
    const handleLoadedMetadata = () => {
      setupVideoForSafari();
      // Ensure proper aspect ratio is maintained
      if (video.videoWidth && video.videoHeight) {
        const aspectRatio = video.videoWidth / video.videoHeight;
        video.style.aspectRatio = aspectRatio.toString();
      }
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleError);

    // Initial setup
    setupVideoForSafari();

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('error', handleError);
      }
    };
  }, []);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, ensure it's playing
            if (video.paused && isLoaded) {
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  console.warn('Intersection observer play failed:', error);
                });
              }
            }
          } else {
            // Video is not visible, pause to save resources
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <div 
      ref={containerRef}
      className="hero-video-container h-full w-full relative overflow-hidden"
      style={{
        // Prevent layout shift during load
        minHeight: '100vh',
        backgroundColor: '#000'
      }}
    >
      {/* Fallback image - loads immediately to prevent layout shift */}
      <img
        className="hero-fallback-image absolute inset-0 w-full h-full object-cover z-0"
        src="/video-fallback.jpg"
        alt="Wedding videography background"
        loading="eager"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%',
          height: '100%',
          opacity: isLoaded && !hasError ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />

      {/* Main background video with multiple sources for cross-browser compatibility */}
      <video
        ref={videoRef}
        className="hero-background-video absolute inset-0 w-full h-full object-cover z-10"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%',
          height: '100%',
          opacity: isLoaded && !hasError ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        // CRITICAL iOS Safari attributes - order matters!
        muted
        defaultMuted
        autoPlay
        playsInline
        loop
        preload={isMobile ? 'none' : 'metadata'}
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        onError={(e) => {
          console.warn('Video element error:', e);
          setHasError(true);
        }}
      >
        {/* WebM for modern browsers - best compression */}
        {!isMobile && (
          <source
            src="/video.webm"
            type="video/webm"
            media="(min-width: 768px)"
          />
        )}
        
        {/* Mobile-optimized MP4 for devices < 768px */}
        <source
          src="/video-720.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        
        {/* Standard MP4 for desktop and fallback */}
        <source
          src="/video.mp4"
          type="video/mp4"
        />
        
        {/* Fallback message for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Loading indicator */}
      {!isLoaded && !hasError && (
        <div className="hero-video-loading absolute inset-0 z-20 flex items-center justify-center bg-black/50">
          <div className="loading-spinner w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="hero-video-error absolute inset-0 z-20 flex items-center justify-center bg-black/70">
          <p className="text-white text-sm opacity-50">‎ </p>
        </div>
      )}
    </div>
  );
};

export default Video;
