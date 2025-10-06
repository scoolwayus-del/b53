import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Target, Diamond, Zap } from 'lucide-react'

const ValueIcon = ({ type, className }) => {
  const icons = { target: Target, diamond: Diamond, zap: Zap }
  const Icon = icons[type]
  return <Icon className={className} strokeWidth={1.5} />
}

const AboutSection = () => {
  const sectionRef = useRef(null)
  const storyCardRef = useRef(null)
  const imageRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Title animation - faster and simpler
    gsap.fromTo('.about-title',
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
          trigger: '.about-title',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Story card - faster entrance
    gsap.fromTo('.story-card',
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.story-card',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Image parallax scroll - removed for performance

    // Quote reveal - faster
    gsap.fromTo('.quote-reveal',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.quote-reveal',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Values cards - simplified entrance
    gsap.fromTo('.value-card',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Icon animations - simplified
    gsap.fromTo('.value-icon',
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  const values = [
    {
      icon: 'target',
      title: 'Vision',
      description: 'We want every wedding film to feel like a piece of your story.  real, timeless, and full of love.',
      gradient: 'from-[#D3FD50]/10 to-transparent'
    },
    {
      icon: 'diamond',
      title: 'Mission',
      description: 'Our goal is simple: to give you memories that feel alive, not staged. Films that make you feel the day all over again.',
      gradient: 'from-blue-500/10 to-transparent'
    },
    {
      icon: 'zap',
      title: 'Values',
      description: 'We stay true to what\'s real. We create with heart and imagination. And we give our very best, every single time.',
      gradient: 'from-[#D3FD50]/10 to-transparent'
    }
  ]

  return (
    <section id="about" ref={sectionRef} className='min-h-screen section-dark-alt text-white relative depth-3 section-transition overflow-hidden'>
      {/* Enhanced cinematic overlay with animated gradient */}
      <div className="cinematic-overlay"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#D3FD50]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 relative z-10'>
        {/* Title with enhanced styling */}
        <div className='flex flex-col items-center justify-center text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8 mx-auto'>
          <div className='relative'>
            <h2 className='about-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow relative z-10'>
              About Us
            </h2>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#D3FD50]/20 to-transparent blur-3xl opacity-50'></div>
          </div>
        </div>

        {/* Main story card - Framer-inspired bento layout */}
        <div className='max-width-wide mb-12 sm:mb-16'>
          <div className='story-card floating-panel-dark backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl sm:rounded-[2.5rem] overflow-hidden relative group'>
            {/* Hover gradient effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#D3FD50]/0 via-[#D3FD50]/5 to-[#D3FD50]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none'></div>

            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 relative'>
              {/* Content side */}
              <div className='space-y-6 sm:space-y-8 flex flex-col justify-center order-2 lg:order-1'>
                <div className='space-y-4 sm:space-y-6'>
                  <div className='inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D3FD50]/10 border border-[#D3FD50]/20 backdrop-blur-sm'>
                    <span className='w-2 h-2 rounded-full bg-[#D3FD50] animate-pulse'></span>
                    <span className='font-[font2] text-sm uppercase tracking-wider text-[#D3FD50]'>Our Story</span>
                  </div>

                  <h3 className='font-[font1] text-2xl sm:text-3xl lg:text-4xl leading-tight text-white/90'>
                    For 7 years, we've dedicated ourselves to transforming weddings into cinematic stories. With equal parts craft and heart, we create films that feel as real as the moments themselve, memories designed to last a lifetime.
                  </h3>
                </div>

                {/* Quote card with enhanced design */}
                <div className='quote-reveal relative mt-6 sm:mt-8'>
                  <div className='absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#D3FD50] to-transparent rounded-full'></div>
                  <div className='pl-8 pr-6 py-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 relative overflow-hidden group/quote'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[#D3FD50]/5 to-transparent opacity-0 group-hover/quote:opacity-100 transition-opacity duration-500'></div>
                    <p className='font-[font1] text-base sm:text-lg leading-relaxed text-white/80 italic relative z-10'>
                      "Our approach is simple,  to be present, to listen, and to see your day as you live it. With equal parts skill and sensitivity, we create films that feel real, timeless, and true to you."
                    </p>
                  </div>
                </div>
              </div>

              {/* Image side with parallax */}
              <div className='order-1 lg:order-2 relative' ref={storyCardRef}>
                <div className='about-image-wrapper relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900'>
                  {/* Image overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none'></div>

                  <img
                    ref={imageRef}
                    src="/aboutus.jpeg"
                    alt="Our Team in Action"
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    loading="lazy"
                    decoding="async"
                    style={{ transform: 'translateZ(0)' }}
                  />

                  {/* Decorative corner accent */}
                  <div className='absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#D3FD50]/40 rounded-tr-2xl z-20'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid - Framer-style cards */}
        <div className='values-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-width-wide'>
          {values.map((value, index) => (
            <div
              key={index}
              className='value-card group/card relative'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className='relative h-full p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#D3FD50]/30 hover:shadow-[0_20px_60px_-15px_rgba(211,253,80,0.2)] hover:-translate-y-1' style={{ willChange: hoveredCard === index ? 'transform' : 'auto' }}>
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`}></div>

                {/* Content */}
                <div className='relative z-10 space-y-6 text-center'>
                  {/* Icon with animated container */}
                  <div className='value-icon relative inline-flex items-center justify-center'>
                    <div className='absolute inset-0 bg-[#D3FD50]/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500'></div>
                    <div className='relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D3FD50]/10 to-transparent border border-[#D3FD50]/20 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6'>
                      <ValueIcon type={value.icon} className='w-10 h-10 sm:w-12 sm:h-12 text-[#D3FD50] transition-transform duration-500 group-hover/card:scale-110' />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className='font-[font2] text-xl sm:text-2xl uppercase text-white tracking-wide transition-colors duration-300 group-hover/card:text-[#D3FD50]'>
                    {value.title}
                  </h4>

                  {/* Divider */}
                  <div className='w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#D3FD50]/50 to-transparent transition-all duration-500 group-hover/card:w-24 group-hover/card:via-[#D3FD50]'></div>

                  {/* Description */}
                  <p className='font-[font1] text-base sm:text-lg leading-relaxed text-white/70 transition-colors duration-300 group-hover/card:text-white/90'>
                    {value.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className='absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D3FD50]/0 group-hover/card:border-[#D3FD50]/30 rounded-bl-2xl transition-all duration-500'></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for additional effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  )
}

export default AboutSection