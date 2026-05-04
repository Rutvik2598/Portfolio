import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_o9e3ddc'
const EMAILJS_TEMPLATE_ID = 'template_2nlyp4g'
const EMAILJS_PUBLIC_KEY = 'jD16OZYHt4Kb0amxF'

export const ContactSection = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          I&apos;d love to hear from you! Whether you have a question, feedback, or
          just want to chat, feel free to reach out.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Email </h4>
                  <a
                    href='mailto:kulkarnirutvikvishwas@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    kulkarnirutvikvishwas@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Phone </h4>
                  <a
                    href='tel:+13099075243'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +1 (309) 907-5243
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'> Location </h4>
                  <span className='text-muted-foreground'>Raleigh, NC, USA</span>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a
                  href='https://www.linkedin.com/in/rutvik-kulkarni-24818a173/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin />
                </a>
                <a
                  href='https://www.instagram.com/kulkarnirutvik25/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram />
                </a>
                <a
                  href='https://github.com/Rutvik2598'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className='bg-card p-8 rounded-lg shadow-xs'>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='johndoe@example.com'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={5}
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to get in touch with you..."
                />
              </div>

              {status === 'success' && (
                <p className='text-sm text-green-500 font-medium'>
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className='text-sm text-red-500 font-medium'>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
