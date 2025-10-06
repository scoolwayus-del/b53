import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import VideoInquiryForm from '../forms/VideoInquiryForm';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Info blocks animation
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ✅ fallback if already visible (desktop on load)
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight) {
        gsap.to('.contact-title, .contact-info', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          overwrite: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/s111khar', icon: '/icons8-instagram-100.png' },
    { name: 'Facebook', url: 'https://https://www.facebook.com/profile.php?id=61581449278227', icon: '/icons8-facebook-100.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/amoura-works', icon: '/icons8-linkedin-100.png' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen section-dark text-white relative depth-3 section-transition"
    >
      <div className="cinematic-overlay"></div>
      <div className="container mx-auto section-padding">
        <div className="flex flex-col items-center justify-center text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8 mx-auto">
          <h2 className="contact-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow">
            Get In Touch
          </h2>
          <div className="floating-panel-dark max-width-content mx-auto">
            <p className="font-[font1] text-responsive leading-relaxed text-layer-2">
            The first step to your perfect film is a simple hello. Reach out to us today :)
            </p>
          </div>
        </div>

        <div className="contact-grid responsive-grid-2 max-width-wide">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="contact-info floating-panel-dark space-y-4 sm:space-y-6">
              <h3 className="font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-layer-2 text-glow">
                Contact Details
              </h3>
              <div className="space-y-3 sm:space-y-4 font-[font1] text-responsive text-layer-1">
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="micro-bounce glow-accent flex items-center justify-center w-8 h-8 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20">
                    <Mail className="w-4 h-4 text-[#D3FD50]" strokeWidth={1.5} />
                  </span>
                  <span className="break-all sm:break-normal">contact@amouraworks.com</span>
                </p>
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="micro-bounce glow-accent flex items-center justify-center w-8 h-8 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20">
                    <MapPin className="w-4 h-4 text-[#D3FD50]" strokeWidth={1.5} />
                  </span>
                  <span>Logix Blossom County, Noida, Uttar Pradesh, India</span>
                </p>
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="micro-bounce glow-accent flex items-center justify-center w-8 h-8 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20">
                    <Clock className="w-4 h-4 text-[#D3FD50]" strokeWidth={1.5} />
                  </span>
                  <span>M–F: 9am – 7pm (UTC+1)</span>
                </p>
              </div>
            </div>

            <div className="contact-info floating-panel-dark space-y-4 sm:space-y-6">
              <h3 className="font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-layer-2 text-glow">
                Follow Us
              </h3>
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass rounded-full flex items-center justify-center group glow-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#D3FD50]/20 cursor-pointer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-all duration-300 group-hover:scale-110 pointer-events-none"
                      style={{ filter: 'invert(1) brightness(1.2)' }}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-info floating-panel-dark">
              <h4 className="font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow">
                  Quick Response Guarantee
              </h4>
              <p className="font-[font1] text-responsive text-layer-1 leading-relaxed">
                  We respond to all inquiries within 24 hours. Your project deserves our immediate attention.
              </p>
            </div>
          </div>

          <div className="contact-info">
            <VideoInquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
