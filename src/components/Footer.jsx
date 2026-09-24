import { useState } from 'react'
import Container from './Container.jsx'

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#team', label: 'TEAM' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' }
]

const SOCIAL = [
  { href: '#', src: '/psd/footer-youtube.png', label: 'YouTube', size: 'size-7' },
  { href: '#', src: '/psd/footer-instagram.png', label: 'Instagram', size: 'size-8' },
  { href: '#', src: '/psd/footer-facebook.png', label: 'Facebook', size: 'size-8' }
]

const FIELDS = [
  { id: 'cf-name', name: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
  { id: 'cf-phone', name: 'phone', type: 'tel', label: 'Phone No', placeholder: 'Your Phone Number' },
  { id: 'cf-email', name: 'email', type: 'email', label: 'Email ID', placeholder: 'Your Email ID' },
]

const inputClassName =
  'h-8 w-full border-0 bg-white px-2 font-sans leading-relaxed text-pvo-text outline-none md:h-9 rounded-md'

export default function Footer() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <footer
      id="contact"
      className="w-full overflow-hidden bg-pvo-footer pt-6 text-white md:pt-10 lg:pt-12"
    >
      <Container className="footer-cols">
        <div>
          <h3 className="mb-4 text-foothead md:mb-5 lg:text-center">Corporate Office</h3>
          <ul className="grid gap-3 md:gap-4">
            <li>
              <div className="flex items-start gap-2 md:gap-2.5">
                <img
                  src="/psd/footer-phone.png"
                  alt=""
                  className="mt-0.5 h-6 w-8 shrink-0 object-contain"
                />
                <a href="tel:+911204151246" className="text-footphone hover:underline">
                  (+91) 120 415 1246
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2 md:gap-2.5">
                <img
                  src="/psd/footer-mail.png"
                  alt=""
                  className="mt-0.5 h-5 w-7 shrink-0 object-contain"
                />
                <a href="mailto:info@peopleverdict.org" className="text-footmail hover:underline">
                  info@peopleverdict.org
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2 md:gap-2.5">
                <img
                  src="/psd/footer-location.png"
                  alt=""
                  className="mt-0.5 h-10 w-6 shrink-0 object-contain"
                />
                <p className="text-left text-footaddr">
                  Head office: Unit 901, Tower B, ITHUM TOWER,
                  <br />
                  Block A Industrial Area Sector 62, Noida
                  <br />
                  Uttar Pradesh 201309
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2 md:mt-6 md:gap-3">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className={`block shrink-0 ${item.size}`}
              >
                <img src={item.src} alt="" className="block h-full w-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-foothead md:mb-5 lg:text-center">Quick Links</h3>
          <ul className="grid gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-footlink uppercase hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="mb-4 text-foothead md:mb-5 lg:text-center">Contact Us</h3>
          <form className="grid gap-3 md:gap-5" onSubmit={handleSubmit}>
            {FIELDS.map((field) => (
              <div key={field.id} className="form-label-row">
                <label htmlFor={field.id} className="text-footlabel">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  className={inputClassName}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            <div className="form-label-row items-start">
              <label htmlFor="cf-message" className="text-footlabel sm:pt-2">
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                className="min-h-16 w-full rounded-md resize-y border-0 bg-white px-2 py-1 font-sans leading-relaxed text-pvo-text outline-none md:min-h-20 lg:resize-none"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>
            <div className="form-label-row">
              <span className="hidden sm:block" aria-hidden="true" />
              <button
                type="submit"
                className="inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-md border-0 bg-pvo-red-bright text-footsubmit uppercase text-white md:h-10"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>

      <Container className="pb-4 md:pb-7">
        <p className="border-t border-white pt-2 text-footcopy md:pt-3 lg:text-center">
          ©Copyright 2026 People Verdict Organization All Rights Reserved
        </p>
      </Container>
    </footer>
  )
}
