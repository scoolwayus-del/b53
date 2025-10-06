import React from 'react'
import PageWrapper from '../components/common/PageWrapper'

const PrivacyPolicy = () => {
  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-content'>
          <h1 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6 sm:mb-8 leading-tight text-layer-3 text-glow'>
            Privacy Policy
          </h1>

          <div className='font-[font1] text-xs sm:text-sm text-layer-1 mb-8 sm:mb-12'>
            Last updated: January 15, 2025
          </div>

          <div className='space-y-8 sm:space-y-10 lg:space-y-12 floating-panel-dark'>
            {/* Introduction */}
            <section className='space-y-3 sm:space-y-4'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                At Amoura Works, we value and protect your privacy. This policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                1. Information We Collect
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li><strong>Personal Information:</strong> Name, email, phone (shared voluntarily).</li>
                <li><strong>Project Information:</strong> Footage, references, brand details.</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                2. How We Use Your Information
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>To respond to inquiries and project requests.</li>
                <li>To deliver and improve our services.</li>
                <li>To share updates, offers, and communication.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            {/* 3. Sharing Your Information */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                3. Sharing Your Information
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3'>
                We do not sell or trade your data. We may share with:
              </p>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Trusted third-party providers (hosting, analytics, CRM).</li>
                <li>Law enforcement if legally required.</li>
              </ul>
            </section>

            {/* 4. Cookies & Tracking */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                4. Cookies & Tracking
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                Our website uses cookies for analytics and better user experience. You may disable cookies in browser settings.
              </p>
            </section>

            {/* 5. Data Security */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                5. Data Security
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                We use technical and organizational measures to protect against unauthorized access or misuse of your data.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                6. Your Rights
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3'>
                You can request:
              </p>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Access/update of your information.</li>
                <li>Deletion of your data.</li>
                <li>Opt-out of communications at any time.</li>
              </ul>
            </section>

            {/* 7. Third-Party Links */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                7. Third-Party Links
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                We are not responsible for privacy practices of third-party sites linked from ours.
              </p>
            </section>

            {/* 8. Updates */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                8. Updates
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                We may revise this Privacy Policy. Updated versions will be posted here.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                9. Contact Us
              </h2>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 mb-3'>
                For privacy or data questions, contact us at:
              </p>
              <div className='glass rounded-lg sm:rounded-xl responsive-padding-md space-y-1 sm:space-y-2'>
                <p className='font-[font1] text-responsive text-layer-1 break-all sm:break-normal'>
                  <strong>Email:</strong> contact@amourafilms.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default PrivacyPolicy
