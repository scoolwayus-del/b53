import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/common/PageWrapper'
import { DollarSign, Target, ChartBar as BarChart3, Handshake } from 'lucide-react'

const BenefitIcon = ({ type, className }) => {
  const icons = { dollar: DollarSign, target: Target, chart: BarChart3, handshake: Handshake }
  const Icon = icons[type]
  return <Icon className={className} strokeWidth={1.5} />
}

const AffiliateProgram = () => {
  const benefits = [
    {
      icon: 'dollar',
      title: '15% Lifetime Commission',
      description: 'Earn 15% commission on every client you refer, for the lifetime of their relationship with us.'
    },
    {
      icon: 'target',
      title: 'High Conversion Rate',
      description: 'Our premium services and proven track record ensure high conversion rates for your referrals.'
    },
    {
      icon: 'chart',
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals and earnings with our comprehensive affiliate dashboard.'
    },
    {
      icon: 'handshake',
      title: 'Dedicated Support',
      description: 'Get personalized support from our affiliate team to maximize your earning potential.'
    }
  ]

  const requirements = [
    'Active social media presence or professional network',
    'Alignment with our brand values and quality standards',
    'Commitment to promoting our services authentically',
    'Minimum of 1 referral every 6 months to maintain active status'
  ]

  const faqItems = [
    {
      question: 'How do I get paid?',
      answer: 'Commissions are paid monthly via bank transfer or PayPal, with a minimum payout threshold of €100.'
    },
    {
      question: 'When do I receive my commission?',
      answer: 'Commissions are paid 30 days after the client\'s final payment to ensure completed transactions.'
    },
    {
      question: 'Can I refer international clients?',
      answer: 'Yes! We work with clients worldwide and provide remote consultation and planning services.'
    },
    {
      question: 'Is there a limit to how much I can earn?',
      answer: 'No limits! The more qualified referrals you bring, the more you earn.'
    }
  ]

  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-wide'>
          {/* Header */}
          <div className='flex flex-col items-center justify-center text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8 mx-auto'>
            <h1 className='font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow'>
              Affiliate Program
            </h1>
            <div className='floating-panel-dark max-width-content mx-auto'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-2'>
              Join our affiliate program and earn commissions by recommending our premium wedding videography services.
              </p>
            </div>
          </div>

          {/* Commission Highlight */}
          <div className='flex justify-center items-center component-margin'>
            <div className='floating-panel-dark bg-gradient-to-br from-[#D3FD50] to-[#b8e03e] inline-block glow-accent glass-hover animate-glow-pulse'>
              <h2 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-black mb-4 sm:mb-6 text-layer-2'>
                15% Lifetime
              </h2>
              <p className='font-[font1] text-lg sm:text-xl lg:text-2xl text-black text-layer-1'>
                Commission Rate
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-8 sm:mb-10 lg:mb-12 text-center text-glow mx-auto'>
              Program Overview
            </h2>
            <div className='floating-panel-dark mx-auto'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 text-center max-width-text mx-auto'>
                Our affiliate program is designed for wedding professionals, influencers, and anyone with connections in the wedding industry. 
                Earn substantial commissions by referring couples to our premium wedding videography services.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-10 sm:mb-12 lg:mb-16 text-center text-glow mx-auto'>
              Program Benefits
            </h2>
            <div className='responsive-grid-2'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='group floating-panel-dark glass-hover glass-click gpu-accelerated'
                >
                  <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#D3FD50]/20 to-transparent border border-[#D3FD50]/30 mb-6 sm:mb-8 micro-bounce glow-accent transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D3FD50]/30'>
                    <BenefitIcon type={benefit.icon} className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#D3FD50]' />
                  </div>
                  
                  <div className='space-y-4 sm:space-y-6'>
                    <h3 className='font-[font2] heading-responsive-md uppercase text-layer-2'>
                      {benefit.title}
                    </h3>
                    <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                      {benefit.description}
                    </p>
                  </div>

                  <div className='w-full accent-line mt-6 sm:mt-8 rounded-full glow-accent'></div>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow mx-auto'>
              Eligibility Requirements
            </h2>
            <div className='glass rounded-xl sm:rounded-2xl responsive-padding-lg'>
              <ul className='space-y-3 sm:space-y-4'>
                {requirements.map((requirement, index) => (
                  <li key={index} className='flex items-start space-x-3 sm:space-x-4'>
                    <span className='w-5 h-5 sm:w-6 sm:h-6 bg-[#D3FD50] rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-accent'>
                      <span className='text-black text-xs sm:text-sm font-bold'>{index + 1}</span>
                    </span>
                    <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                      {requirement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Sign-up Process */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow mx-auto'>
              How to Join
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
              {[
                { step: '01', title: 'Apply', desc: 'Submit your application with your background and referral strategy' },
                { step: '02', title: 'Review', desc: 'Our team reviews your application within 48 hours' },
                { step: '03', title: 'Approval', desc: 'Receive your unique affiliate link and marketing materials' },
                { step: '04', title: 'Earn', desc: 'Start referring clients and earning 15% lifetime commissions' }
              ].map((item, index) => (
                <div key={index} className='text-center space-y-3 sm:space-y-4'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#D3FD50] rounded-full flex items-center justify-center mx-auto glow-accent micro-bounce'>
                    <span className='font-[font2] text-base sm:text-lg lg:text-xl text-black'>{item.step}</span>
                  </div>
                  <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2'>{item.title}</h3>
                  <p className='font-[font1] text-sm sm:text-base leading-relaxed text-layer-1'>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow mx-auto'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-4 sm:space-y-6'>
              {faqItems.map((faq, index) => (
                <div key={index} className='glass rounded-lg sm:rounded-xl responsive-padding-md'>
                  <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-3 sm:mb-4 text-glow'>
                    {faq.question}
                  </h3>
                  <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AmouraWorks Branding */}
          <section className='component-margin'>
            <div className='floating-panel-dark rounded-xl sm:rounded-2xl text-center mx-auto'>
              <h3 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-4 sm:mb-6 text-glow'>
                Powered by AmouraWorks
              </h3>
              <p className='font-[font1] text-responsive text-layer-2 leading-relaxed mb-6 sm:mb-8 max-width-text mx-auto'>
                Our affiliate program is managed by AmouraWorks, ensuring reliable payments, transparent tracking, and professional support.
              </p>
              <div className='flex items-center justify-center space-x-3 sm:space-x-4'>
                <img
                  src='/logo.png'
                  alt='AmouraWorks Logo'
                  className='w-10 h-10 sm:w-12 sm:h-12 object-contain glow-accent micro-bounce'
                />
                <span className='font-[font2] text-xl sm:text-2xl lg:text-3xl text-layer-2 uppercase'>
                  AmouraWorks
                </span>
              </div>
            </div>
          </section>

          {/* Contact for Affiliates */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow mx-auto'>
              Affiliate Support
            </h2>
            <div className='glass rounded-lg sm:rounded-xl responsive-padding-md text-center mx-auto'>
              <p className='font-[font1] text-responsive text-layer-1 mb-3 sm:mb-4'>
                Questions about the affiliate program? Our dedicated team is here to help.
              </p>
              <div className='space-y-1 sm:space-y-2'>
                <p className='font-[font1] text-responsive text-layer-1 break-all sm:break-normal'>
                  <strong>Email:</strong> contact@amouraworks.com
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className='flex justify-center items-center'>
            <Link 
              to='/contact'
              className='btn-pill btn-primary h-12 sm:h-14 lg:h-16 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group'
            >
              <span className='font-[font2] text-base sm:text-lg lg:text-xl'>
                Apply Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AffiliateProgram