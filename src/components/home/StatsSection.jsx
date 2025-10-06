import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const StatsSection = () => {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  const statsData = useMemo(() => [
    {
      number: 500,
      suffix: '+',
      label: 'Wedding projects completed',
      icon: '⚘',
      color: 'from-[#D3FD50] to-[#b8e03e]',
      glowColor: 'rgba(211, 253, 80, 0.3)'
    },
    {
      number: 97,
      suffix: '%',
      label: 'Happy Clients',
      icon: '◉',
      color: 'from-[#D3FD50] to-[#a3d139]',
      glowColor: 'rgba(211, 253, 80, 0.4)'
    },
    {
      number: 8,
      suffix: '',
      label: 'Editors in our team',
      icon: '✎',
      color: 'from-[#b8e03e] to-[#D3FD50]',
      glowColor: 'rgba(184, 224, 62, 0.3)'
    },
    {
      number: 7,
      suffix: ' years',
      label: 'Post-production experience',
      icon: '⚝',
      color: 'from-[#a3d139] to-[#D3FD50]',
      glowColor: 'rgba(163, 209, 57, 0.35)'
    }
  ], [])

  gsap.registerPlugin(ScrollTrigger)

  const animateCounter = (element, finalNumber, duration = 1.5) => {
    const counter = { value: 0 }

    gsap.to(counter, {
      value: finalNumber,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString()
      }
    })
  }

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stats-title',
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.stats-title',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )

      gsap.fromTo('.stat-card',
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
            onEnter: () => {
              if (!hasAnimated) {
                setTimeout(() => {
                  document.querySelectorAll('.counter-number').forEach((counter, index) => {
                    animateCounter(counter, statsData[index].number, 1.5)
                  })
                  setHasAnimated(true)
                }, 300)
              }
            }
          }
        }
      )


      gsap.utils.toArray('.accent-line').forEach((line, index) => {
        gsap.fromTo(line,
          {
            scaleX: 0,
            opacity: 0
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [hasAnimated])

  return (
    <section
      id="stats"
      ref={sectionRef}
      className='min-h-screen section-dark text-white relative depth-3 section-transition overflow-hidden'
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D3FD50] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b8e03e] opacity-[0.02] blur-[120px] rounded-full"></div>
      </div>

      <div className="cinematic-overlay"></div>

      <div className='container mx-auto section-padding relative z-10'>
        <div className='flex flex-col items-center justify-center text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8 mx-auto'>
          <h2 className='stats-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow relative'>
            <span className="relative inline-block">
              A Few Stats About Us
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#D3FD50]/5 to-transparent blur-xl opacity-0 animate-glow-pulse"></div>
            </span>
          </h2>
        </div>

        <div className='stats-grid responsive-grid-2 max-width-content'>
          {statsData.map((stat, index) => {
            const isHovered = hoveredCard === index
            return (
            <div
              key={index}
              className='stat-card group relative text-center transition-transform duration-300 ease-out'
              style={{ willChange: isHovered ? 'transform' : 'auto' }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative h-full
                bg-gradient-to-br from-black/40 via-black/30 to-black/40
                backdrop-blur-xl
                border rounded-[32px]
                p-8 sm:p-10 lg:p-12
                transition-all duration-300 ease-out
                ${isHovered ? 'border-[#D3FD50]/30 shadow-[0_0_40px_rgba(211,253,80,0.15)]' : 'border-white/[0.08]'}
              `}>
                <div
                  className={`absolute inset-0 rounded-[32px] transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.glowColor}, transparent 70%)`
                  }}
                ></div>

                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D3FD50] to-transparent transition-opacity duration-300 rounded-t-[32px] ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                <div className='relative z-10'>
                  <div className='stat-icon text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 inline-block transform transition-transform duration-200 group-hover:scale-105'>
                    <span className={`
                      inline-block
                      bg-gradient-to-br ${stat.color}
                      bg-clip-text text-transparent
                      transition-all duration-300
                    `}
                    style={{
                      filter: `drop-shadow(0 0 15px ${stat.glowColor})`
                    }}>
                      {stat.icon}
                    </span>
                  </div>

                  <div className='mb-4 sm:mb-6 relative'>
                    <div className="inline-block relative">
                      <span
                        className={`
                          counter-number
                          font-[font2]
                          text-5xl sm:text-6xl lg:text-7xl
                          bg-gradient-to-br ${stat.color}
                          bg-clip-text text-transparent
                          inline-block
                          transition-transform duration-300 will-change-transform
                          ${isHovered ? 'scale-105' : 'scale-100'}
                        `}
                        style={{
                          filter: `drop-shadow(0 0 20px ${stat.glowColor})`,
                          WebkitTextFillColor: 'transparent',
                          WebkitBackgroundClip: 'text'
                        }}
                      >
                        0
                      </span>
                      <span
                        className={`
                          font-[font2]
                          text-3xl sm:text-4xl lg:text-5xl
                          bg-gradient-to-br ${stat.color}
                          bg-clip-text text-transparent
                          inline-block
                        `}
                        style={{
                          filter: `drop-shadow(0 0 20px ${stat.glowColor})`,
                          WebkitTextFillColor: 'transparent',
                          WebkitBackgroundClip: 'text'
                        }}
                      >
                        {stat.suffix}
                      </span>
                    </div>
                  </div>

                  <p className='font-[font1] text-base sm:text-lg lg:text-xl leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-white'>
                    {stat.label}
                  </p>

                  <div className='relative w-full h-[2px] mt-6 sm:mt-8 mx-auto overflow-hidden'>
                    <div
                      className={`
                        accent-line
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-[#D3FD50] to-transparent
                        transition-all duration-300 will-change-transform
                        ${isHovered ? 'opacity-100 scale-x-110' : 'opacity-60 scale-x-100'}
                      `}
                      style={{
                        filter: `drop-shadow(0 0 8px ${stat.glowColor})`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-card,
          .stat-icon,
          .animate-glow-pulse {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
        }
      `}</style>
    </section>
  )
}

export default StatsSection
