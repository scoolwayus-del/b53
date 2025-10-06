import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Paperclip, Camera, X, Lightbulb } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    location: '',
    venue: '',
    package: '',
    videoLink: '',
    timeline: '',
    message: '',
    files: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isUploadExpanded, setIsUploadExpanded] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)
  const uploadSectionRef = useRef(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const openUpload = urlParams.get('openUpload')

    if (openUpload === 'true') {
      setIsUploadExpanded(true)

      setTimeout(() => {
        uploadSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 300)

      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, '', newUrl)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || [])
    addFiles(files)
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files || [])
    addFiles(files)
  }

  const addFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/quicktime']
      const maxSize = 50 * 1024 * 1024
      return validTypes.includes(file.type) && file.size <= maxSize
    })

    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...validFiles].slice(0, 10)
    }))
  }

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataToSend = new FormData()

      Object.keys(formData).forEach(key => {
        if (key !== 'files') {
          formDataToSend.append(key, formData[key])
        }
      })

      formData.files.forEach((file, index) => {
        formDataToSend.append(`file${index}`, file)
      })

      const response = await fetch('https://formspree.io/f/myznjawq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          location: '',
          venue: '',
          package: '',
          videoLink: '',
          timeline: '',
          message: '',
          files: []
        })
        setIsUploadExpanded(false)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='floating-panel-dark'>
      <h2 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-6 sm:mb-8 lg:mb-10 text-layer-2 text-glow'>
        Contact Us
      </h2>
      
      {submitStatus === 'success' && (
        <div className='success-state mb-6 sm:mb-8'>
          <p className='font-[font2] text-base sm:text-lg'>
            Thank you for your inquiry! We will get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='error-state mb-6 sm:mb-8'>
          <p className='font-[font2] text-base sm:text-lg'>
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6 sm:space-y-8'>
        <div className='form-grid form-grid-2 gap-4 sm:gap-6'>
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className='w-full input-inset text-white placeholder:text-gray-400'
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className='w-full input-inset text-white placeholder:text-gray-400'
          />
        </div>
        
        <input 
          type="email" 
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
        
        <div className='form-grid form-grid-2 gap-4 sm:gap-6'>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className='w-full input-inset text-white placeholder:text-gray-400'
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company / Brand Name"
            value={formData.companyName}
            onChange={handleChange}
            disabled={isSubmitting}
            className='w-full input-inset text-white placeholder:text-gray-400'
          />
        </div>

        <input
          type="text"
          name="location"
          placeholder="City, State / County (e.g., Windham, ME; Portland, OR; Austin, TX)"
          value={formData.location}
          onChange={handleChange}
          disabled={isSubmitting}
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
        
        <input 
          type="text" 
          name="venue"
          placeholder="Wedding Venue"
          value={formData.venue}
          onChange={handleChange}
          disabled={isSubmitting}
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
        
        <div className='form-grid form-grid-2 gap-4 sm:gap-6'>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            disabled={isSubmitting}
            className='w-full input-inset text-white'
          >
            <option value="">Select Package</option>
            <option value="essential">Essential Package</option>
            <option value="premium">Premium Package</option>
            <option value="luxury">Luxury Package</option>
            <option value="custom">Custom Package</option>
          </select>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            disabled={isSubmitting}
            className='w-full input-inset text-white'
          >
            <option value="">Preferred Timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-2weeks">1–2 weeks</option>
            <option value="3-4weeks">3–4 weeks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <input
          type="url"
          name="videoLink"
          placeholder="Paste your video link (Google Drive etc.)"
          value={formData.videoLink}
          onChange={handleChange}
          disabled={isSubmitting}
          className='w-full input-inset text-white placeholder:text-gray-400'
        />
        
        <textarea
          name="message"
          placeholder="Tell us about your wedding vision, special requests, or any questions you have..."
          value={formData.message}
          onChange={handleChange}
          rows="4"
          disabled={isSubmitting}
          className='w-full input-inset text-white placeholder:text-gray-400 resize-none'
        />

        <div ref={uploadSectionRef} className='space-y-4 sm:space-y-6'>
          <button
            type="button"
            onClick={() => setIsUploadExpanded(!isUploadExpanded)}
            className='w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 glass glass-hover rounded-2xl transition-all duration-300 hover:border-[#D3FD50]/30'
            aria-expanded={isUploadExpanded}
            aria-controls="file-upload-section"
          >
            <div className='flex items-center gap-3 sm:gap-4'>
              <span className='glow-accent pointer-events-none flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D3FD50]/10 border border-[#D3FD50]/20'>
                <Paperclip className='w-5 h-5 sm:w-6 sm:h-6 text-[#D3FD50]' strokeWidth={1.5} />
              </span>
              <div className='text-left pointer-events-none'>
                <h3 className='font-[font2] text-sm sm:text-base lg:text-lg uppercase text-white'>
                  Upload Reference Images
                </h3>
                <p className='font-[font1] text-xs sm:text-sm text-white/60'>
                  Optional • {formData.files.length}/10 files
                </p>
              </div>
            </div>
            <span className={`text-xl sm:text-2xl text-[#D3FD50] transition-transform duration-300 pointer-events-none ${isUploadExpanded ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </button>

          <div
            id="file-upload-section"
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isUploadExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className='space-y-4 sm:space-y-6'>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 ${
                  dragActive
                    ? 'border-[#D3FD50] bg-[#D3FD50]/10'
                    : 'border-white/20 hover:border-[#D3FD50]/50 hover:bg-white/5'
                }`}
                role="button"
                tabIndex={0}
                aria-label="Upload files"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,video/mp4,video/quicktime"
                  onChange={handleFileChange}
                  className='hidden'
                  disabled={isSubmitting}
                />

                <div className='space-y-3 sm:space-y-4 pointer-events-none'>
                  <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-2xl bg-[#D3FD50]/10 border border-[#D3FD50]/20'>
                    <Camera className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#D3FD50]' strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className='font-[font2] text-base sm:text-lg lg:text-xl text-white mb-2'>
                      Drop files here or click to browse
                    </p>
                    <p className='font-[font1] text-xs sm:text-sm text-white/60'>
                      Images & Videos • Max 50MB per file • Up to 10 files
                    </p>
                  </div>
                </div>
              </div>

              {formData.files.length > 0 && (
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>
                  {formData.files.map((file, index) => (
                    <div
                      key={index}
                      className='relative group glass rounded-xl overflow-hidden aspect-square'
                    >
                      {file.type.startsWith('image/') ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className='w-full h-full object-cover'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center bg-white/5'>
                          <span className='text-3xl sm:text-4xl'>🎬</span>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className='absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 text-white'
                        aria-label={`Remove ${file.name}`}
                      >
                        <X className='w-4 h-4 pointer-events-none' strokeWidth={2} />
                      </button>

                      <div className='absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                        <p className='font-[font1] text-xs text-white truncate'>
                          {file.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className='glass rounded-xl p-4 sm:p-5'>
                <p className='font-[font1] text-xs sm:text-sm text-white/70 leading-relaxed flex items-start gap-2'>
                  <span className='flex items-center justify-center w-6 h-6 rounded-lg bg-[#D3FD50]/10 border border-[#D3FD50]/20 flex-shrink-0 mt-0.5'>
                    <Lightbulb className='w-3.5 h-3.5 text-[#D3FD50]' strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className='font-[font2] text-[#D3FD50]'>Pro Tip:</span> Upload reference photos or videos that inspire your wedding vision. This helps us understand your style preferences and deliver exactly what you envision.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className='w-full btn-pill btn-primary h-12 sm:h-14 lg:h-16 font-[font2] text-base sm:text-xl lg:text-2xl disabled:opacity-50 disabled:cursor-not-allowed select-none touch-manipulation active:scale-95 transition-transform duration-100'
          style={{ cursor: 'pointer', touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
        >
          <span className='pointer-events-none'>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
        </button>
      </form>
    </div>
  )
}

export default ContactForm