import { useState } from 'react'
import Container from './Container.jsx'
import { psdLen, PsdBox, PsdStage, PsdText } from './Psd.jsx'

const LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#team', label: 'TEAM' },
  { href: '#services', label: 'SERVICES' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' }
]

const SOCIAL = [
  { href: '#', src: '/psd/footer-youtube.png', label: 'YouTube', x: 246, y: 329, w: 30, h: 30 },
  { href: '#', src: '/psd/footer-instagram.png', label: 'Instagram', x: 288, y: 328, w: 32, h: 32 },
  { href: '#', src: '/psd/footer-facebook.png', label: 'Facebook', x: 333, y: 328, w: 31, h: 31 }
]

// Name / Phone No / Email ID is one point-text layer, leading 70.78459.
const LABEL_Y = 115
const LABEL_LEAD = 70.78459

const FIELDS = [
  { id: 'cf-name', name: 'name', type: 'text', label: 'Name', y: LABEL_Y, inputY: 107, inputH: 41 },
  {
    id: 'cf-phone',
    name: 'phone',
    type: 'tel',
    label: 'Phone No',
    y: LABEL_Y + LABEL_LEAD,
    inputY: 176,
    inputH: 41
  },
  {
    id: 'cf-email',
    name: 'email',
    type: 'email',
    label: 'Email ID',
    y: LABEL_Y + LABEL_LEAD * 2,
    inputY: 244,
    inputH: 41
  }
]

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
    <PsdStage
      as="footer"
      h={521}
      id="contact"
      className="w-full overflow-hidden bg-pvo-footer pt-6 text-white md:pt-10 xl:pt-0"
    >
      <Container className="footer-cols xl:contents">
        <div className="xl:contents">
          <PsdText
            as="h3"
            x={243}
            y={58}
            w={222}
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-normal"
          >
            Corporate Office
          </PsdText>
          <ul className="grid gap-3 md:gap-4 xl:contents">
            <li className="xl:contents">
              <div className="flex items-start gap-2 md:gap-2.5 xl:contents">
                <PsdBox
                  as="img"
                  src="/psd/footer-phone.png"
                  alt=""
                  x={244}
                  y={117}
                  w={32}
                  h={25}
                  className="mt-0.5 shrink-0 object-contain xl:mt-0"
                  style={{ width: psdLen(32), height: psdLen(25) }}
                />
                <PsdText
                  as="a"
                  href="tel:+911204151246"
                  x={289}
                  y={116}
                  className="text-footphone hover:underline xl:leading-snug"
                >
                  (+91) 120 415 1246
                </PsdText>
              </div>
            </li>
            <li className="xl:contents">
              <div className="flex items-start gap-2 md:gap-2.5 xl:contents">
                <PsdBox
                  as="img"
                  src="/psd/footer-mail.png"
                  alt=""
                  x={245}
                  y={172}
                  w={29}
                  h={21}
                  className="mt-0.5 shrink-0 object-contain xl:mt-0"
                  style={{ width: psdLen(29), height: psdLen(21) }}
                />
                <PsdText
                  as="a"
                  href="mailto:info@peopleverdict.org"
                  x={289}
                  y={172}
                  className="text-footmail hover:underline"
                >
                  info@peopleverdict.org
                </PsdText>
              </div>
            </li>
            <li className="xl:contents">
              <div className="flex items-start gap-2 md:gap-2.5 xl:contents">
                <PsdBox
                  as="img"
                  src="/psd/footer-location.png"
                  alt=""
                  x={247}
                  y={222}
                  w={26}
                  h={40}
                  className="mt-0.5 shrink-0 object-contain xl:mt-0"
                  style={{ width: psdLen(26), height: psdLen(40) }}
                />
                <PsdText
                  as="p"
                  x={290}
                  y={219}
                  w={523}
                  className="text-left text-footaddr xl:leading-normal"
                >
                  Head office: Unit 901, Tower B, ITHUM TOWER,
                  <br />
                  Block A Industrial Area Sector 62, Noida
                  <br />
                  Uttar Pradesh 201309
                </PsdText>
              </div>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-2 md:mt-6 md:gap-3 xl:contents">
            {SOCIAL.map((item) => (
              <PsdBox
                as="a"
                key={item.label}
                href={item.href}
                aria-label={item.label}
                x={item.x}
                y={item.y}
                w={item.w}
                h={item.h}
                className="block"
              >
                <img
                  src={item.src}
                  alt=""
                  className="block h-full w-full object-contain"
                  style={{ width: psdLen(item.w), height: psdLen(item.h) }}
                />
              </PsdBox>
            ))}
          </div>
        </div>

        <div className="xl:contents">
          <PsdText
            as="h3"
            x={879}
            y={59}
            w={156}
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-normal"
          >
            Quick Links
          </PsdText>
          <ul className="grid gap-0 xl:contents">
            {LINKS.map((link, index) => (
              <li key={link.href} className="xl:contents">
                <PsdText
                  as="a"
                  href={link.href}
                  x={881}
                  y={117 + index * 36.0248}
                  className="text-footlink uppercase hover:underline xl:leading-snug"
                >
                  {link.label}
                </PsdText>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1 xl:contents">
          <PsdText
            as="h3"
            x={1169}
            y={60}
            w={146}
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-normal"
          >
            Contact Us
          </PsdText>
          <form className="grid gap-3 md:gap-5 xl:contents xl:gap-7" onSubmit={handleSubmit}>
            {FIELDS.map((field) => (
              <div
                key={field.id}
                className="form-label-row xl:contents"
              >
                <PsdText
                  as="label"
                  htmlFor={field.id}
                  x={1170}
                  y={field.y}
                  className="text-footlabel xl:leading-normal"
                >
                  {field.label}
                </PsdText>
                <PsdBox
                  as="input"
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  x={1303}
                  y={field.inputY}
                  w={378}
                  h={field.inputH}
                  className="h-8 w-full border-0 bg-white px-2 font-sans text-footlabel leading-relaxed text-pvo-text outline-none md:h-9 xl:h-input"
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="form-label-row items-start xl:contents">
              <PsdText
                as="label"
                htmlFor="cf-message"
                x={1170}
                y={354}
                className="text-footlabel sm:pt-2 xl:pt-0 xl:leading-normal"
              >
                Message
              </PsdText>
              <PsdBox
                as="textarea"
                id="cf-message"
                name="message"
                x={1304}
                y={313}
                w={378}
                h={105}
                className="min-h-16 w-full resize-y border-0 bg-white px-2 py-1 font-sans text-footlabel leading-relaxed text-pvo-text outline-none md:min-h-20 xl:min-h-message xl:resize-none"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-label-row xl:contents">
              <span className="hidden sm:block xl:hidden" aria-hidden="true" />
              <PsdBox
                as="button"
                type="submit"
                x={1302}
                y={438}
                w={377}
                h={47}
                className="inline-flex h-9 w-full cursor-pointer items-center justify-center rounded-none border-0 bg-pvo-red-bright text-footsubmit uppercase text-white md:h-10 xl:h-submit"
              >
                Sumbit
              </PsdBox>
            </div>
          </form>
        </div>
      </Container>

      <PsdBox
        x={234}
        y={407}
        w={512}
        h={5}
        className="hidden items-center xl:flex"
        aria-hidden="true"
      >
        <span className="block h-0.5 w-full bg-white" />
      </PsdBox>

      <Container className="pb-4 md:pb-7 xl:contents">
        <PsdText
          as="p"
          x={228}
          y={429}
          w={647}
          className="max-w-none border-t border-white pt-2 text-footcopy md:pt-3 xl:border-0 xl:whitespace-nowrap xl:pt-0 xl:text-center xl:leading-normal"
        >
          ©Copyright 2026 People Verdict Organization All Rights Reserved
        </PsdText>
      </Container>
    </PsdStage>
  )
}
