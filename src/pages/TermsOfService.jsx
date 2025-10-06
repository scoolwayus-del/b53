import React from 'react'
import PageWrapper from '../components/common/PageWrapper'

const TermsOfService = () => {
  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-content'>
          <h1 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase mb-6 sm:mb-8 leading-tight text-layer-3 text-glow'>
            Terms & Conditions
          </h1>

          <div className='font-[font1] text-xs sm:text-sm text-layer-1 mb-8 sm:mb-12'>
            Last updated: January 15, 2025
          </div>

          <div className='space-y-8 sm:space-y-10 lg:space-y-12 floating-panel-dark'>
            {/* Introduction */}
            <section className='space-y-3 sm:space-y-4'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                These Terms & Conditions ("Agreement") apply to all services provided by Amoura Works ("Service Provider") to the client ("Client"). By engaging our services, you agree to the following:
              </p>
            </section>

            {/* 1. Payments & Pricing */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                1. Payments & Pricing
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>All projects must be prepaid - 50% advance unless otherwise agreed in writing.</li>
                <li>Prices are quoted per project in advance, any interim changes are billed separately. (Not including revisions)</li>
                <li>Refunds, where approved, will never exceed the project fee.</li>
                <li>Refunds may be substituted with credit for future services, at Amoura Works' discretion.</li>
                <li>Transaction charges, currency fees, and taxes are borne by the Client.</li>
              </ul>
            </section>

            {/* 2. Delivery Timelines */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                2. Delivery Timelines (On-Time Promise)
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Delivery timelines are confirmed in writing (email, WhatsApp, Slack, etc.).</li>
                <li>"Delivery" means first draft submission, not final approval.</li>
                <li>Delays caused by incomplete briefs, missing footage, or late feedback from the Client do not qualify.</li>
                <li>If Amoura Works is more than 48 hours late without prior notice, the Client may be eligible for a 30% project credit.</li>
              </ul>
            </section>

            {/* 3. Revisions & Style Match Guarantee */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                3. Revisions & Style Match Guarantee
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Each project includes up to 2 revisions.</li>
                <li>Revisions must stay within the original brief and references.</li>
                <li>Additional revisions are chargeable. Depending on the editor effort.</li>
                <li>If, after 2 revisions, the edit still does not align, Amoura Works may provide up to 30% credit, subject to review.</li>
                <li>Preference changes or new creative directions post-delivery are not covered.</li>
              </ul>
            </section>

            {/* 4. Trial Edit Safety */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                4. Trial Edit Safety (First Project Only)
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Applies only to a new client's first project.</li>
                <li>If unsatisfied, the Client may choose either:
                  <ul className='ml-6 mt-2 space-y-1 list-circle'>
                    <li>50% refund, OR</li>
                    <li>100% credit toward the next project.</li>
                  </ul>
                </li>
                <li>Feedback must be submitted within 5 days of delivery; otherwise, the trial is deemed accepted.</li>
              </ul>
            </section>

            {/* 5. Client Responsibilities */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                5. Client Responsibilities
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Provide complete footage, assets, and references before work begins.</li>
                <li>Upload files via secure platforms (Google Drive, Dropbox, etc.).</li>
                <li>Approve drafts and revisions within 5 business days.</li>
                <li>Provide first revision (if required) within 7 days of submitting the first draft and second revision (if need be) after submitting the second revision within 4 working days.</li>
                <li>If there is need for a third revision it should be provided within 2 days of the second revision.</li>
                <li>Ensure legal rights to all submitted footage. Amoura Works accepts no liability for copyright disputes.</li>
              </ul>
            </section>

            {/* 6. Technical & Operational Conditions */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                6. Technical & Operational Conditions
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Amoura Works uses professional tools but is not responsible for disruptions caused by internet outages, power cuts, or software crashes.</li>
                <li>Deliverables are provided in MP4/MOV unless otherwise agreed.</li>
                <li>Source project files if required (Premiere/FCP timelines) are provided only after complete payment.</li>
                <li>Client files are stored for 20 days post-delivery (first draft) unless extended storage is purchased.</li>
              </ul>
            </section>

            {/* 7. Team & Work Ethics */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                7. Team & Work Ethics
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>All communication goes through official Amoura channels.</li>
                <li>Direct contact with editors is not permitted unless pre-approved.</li>
                <li>Rush projects may incur extra charges.</li>
                <li>Editor well-being is respected — including weekends, holidays, and time zones.</li>
              </ul>
            </section>

            {/* 8. Intellectual Property & Usage Rights */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                8. Intellectual Property & Usage Rights
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Final deliverables are transferred only upon full payment.</li>
                <li>Resale or redistribution of our services is prohibited.</li>
              </ul>
            </section>

            {/* 9. Confidentiality */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                9. Confidentiality
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>All client materials remain confidential and are never shared without consent.</li>
                <li>NDAs can be signed upon request.</li>
              </ul>
            </section>

            {/* 10. Liability & Limitations */}
            <section className='space-y-3 sm:space-y-4'>
              <h2 className='font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-glow'>
                10. Liability & Limitations
              </h2>
              <ul className='font-[font1] text-responsive leading-relaxed text-layer-1 space-y-2 sm:space-y-3 list-disc list-inside'>
                <li>Amoura Works maximum liability is capped at the project fee paid.</li>
                <li>We are not liable for indirect losses such as missed opportunities or reputational harm.</li>
                <li>The Client indemnifies Amoura Works against third-party claims arising from client-provided materials.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default TermsOfService
