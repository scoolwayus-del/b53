import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PageWrapper from '../components/common/PageWrapper'
import VideoInquiryForm from '../components/forms/VideoInquiryForm'
import FAQSection from '../components/common/FAQSection'
import MouseFollower from '../components/common/MouseFollower'
import { Mail, MapPin } from 'lucide-react'

const Contact = () => {


  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/Amouraworks', icon: '/icons8-instagram-100.png' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61581449278227', icon: '/icons8-facebook-100.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/Amoura-works', icon: '/icons8-linkedin-100.png' }
  ]

  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      {/* Header */}
      <div className='pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 flex flex-col items-center justify-center text-center container mx-auto'>
        <h1 className='contact-content font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow'>
          Contact Us
        </h1>
        <div className='floating-panel-dark max-width-content mx-auto'>
          <p className='contact-content font-[font1] text-responsive leading-relaxed text-layer-2'>
        The first step to your perfect film is a simple hello. Reach out to us today
          </p>
        </div>
      </div>

      <div className='container mx-auto pb-16 sm:pb-24 lg:pb-32 px-4'>
        {/* Single Large Container with Two Columns */}
        <div className='floating-panel-dark max-width-wide mx-auto relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
            {/* Left Column - Form */}
            <div className='p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10'>
              <h2 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl uppercase text-white mb-4 sm:mb-6'>
                Let's Create Together
              </h2>
              <p className='font-[font1] text-base sm:text-lg text-white/80 leading-relaxed mb-8 sm:mb-10'>
                Ready to bring your vision to life? Share your project details with us and we'll craft a custom quote tailored to your needs.
              </p>

              <VideoInquiryForm />
            </div>

            {/* Right Column - Information */}
            <div className='p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 sm:space-y-10'>
              {/* Client Testimonial */}
              <div>
                <h3 className='font-[font2] text-xl sm:text-2xl uppercase text-[#D3FD50] text-layer-2 text-glow mb-4'>
                  Client Testimonial
                </h3>
                <blockquote className='space-y-4'>
                  <p className='font-[font1] text-lg sm:text-xl italic text-white/90 leading-relaxed'>
                    "Their attention to detail and creative vision elevated our project beyond all expectations."
                  </p>
                  <footer className='font-[font1] text-base text-white/70'>
                    — Alex Chen, Creative Director at Nexus Studios
                  </footer>
                </blockquote>
              </div>

              {/* Divider */}
              <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

              {/* Let's Connect */}
              <div>
                <h3 className='font-[font2] text-xl sm:text-2xl uppercase text-[#D3FD50] text-layer-2 text-glow mb-4'>
                  Let's Connect
                </h3>
                <div className='space-y-4 font-[font1] text-base sm:text-lg text-white/90'>
                  <div className='flex items-center space-x-3'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20'>
                      <Mail className='w-5 h-5 text-[#D3FD50]' strokeWidth={1.5} />
                    </span>
                    <a href="mailto:contact@amouraworks.com" className='interactive-hover break-all sm:break-normal'>
                      contact@amouraworks.com
                    </a>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20'>
                      <MapPin className='w-5 h-5 text-[#D3FD50]' strokeWidth={1.5} />
                    </span>
                    <span>Logix Blossom County, Noida, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* Follow Our Work */}
              <div>
                <h3 className='font-[font2] text-xl sm:text-2xl uppercase text-[#D3FD50] text-layer-2 text-glow mb-4 text-center'>
                  Follow Our Work
                </h3>
                <div className='flex justify-center space-x-6'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-14 h-14 glass glass-hover glass-click rounded-2xl flex items-center justify-center group glow-accent transition-all duration-300 hover:scale-110'
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className='w-7 h-7 transition-all duration-300 group-hover:scale-110'
                        style={{ filter: 'invert(1) brightness(1.2)' }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <MouseFollower />
        </div>

        {/* FAQ Section */}
        <div className='max-width-wide mx-auto mt-16 sm:mt-20 lg:mt-24'>
          <FAQSection />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Contact