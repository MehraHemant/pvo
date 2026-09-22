import { useState } from 'react'
import Container from './Container'
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
      className="w-full overflow-hidden bg-pvo-footer pt-[clamp(1.5rem,3vw,58px)] text-white xl:pt-0"
    >
      <Container
        inset="footer"
        className="grid grid-cols-1 gap-8 pb-4 md:grid-cols-2 md:gap-10 md:pb-7 lg:grid-cols-[1fr_0.55fr_1.15fr] xl:contents"
      >
        <div className="xl:contents">
          <PsdText
            as="h3"
            x={243}
            y={58}
            w={222}
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-[26px]"
          >
            Corporate Office
          </PsdText>
          <ul className="grid gap-3 md:gap-4 xl:contents">
            <li className="xl:contents">
              <div className="flex items-start gap-[clamp(0.5rem,0.68vw,13px)] xl:contents">
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
                  className="text-footphone hover:underline xl:leading-[30px]"
                >
                  (+91) 120 415 1246
                </PsdText>
              </div>
            </li>
            <li className="xl:contents">
              <div className="flex items-start gap-[clamp(0.5rem,0.68vw,13px)] xl:contents">
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
              <div className="flex items-start gap-[clamp(0.5rem,0.68vw,13px)] xl:contents">
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
                  className="text-left text-footaddr xl:leading-[26px]"
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
          <div className="mt-4 flex items-center gap-[clamp(0.5rem,0.625vw,12px)] md:mt-6 xl:contents">
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
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-[26px]"
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
                  className="text-footlink uppercase hover:underline xl:leading-[20px]"
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
            className="mb-4 text-foothead md:mb-5 xl:whitespace-nowrap xl:text-center xl:leading-[26px]"
          >
            Contact Us
          </PsdText>
          <form className="grid gap-[clamp(0.75rem,1.46vw,28px)] xl:contents" onSubmit={handleSubmit}>
            {FIELDS.map((field) => (
              <div
                key={field.id}
                className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4 xl:contents"
              >
                <PsdText
                  as="label"
                  htmlFor={field.id}
                  x={1170}
                  y={field.y}
                  className="text-footlabel xl:leading-[21.5px]"
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
                  className="h-[clamp(2rem,2.14vw,41px)] w-full border-0 bg-white px-2 font-sans text-footlabel leading-relaxed text-pvo-text outline-none"
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <div className="grid grid-cols-1 items-start gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4 xl:contents">
              <PsdText
                as="label"
                htmlFor="cf-message"
                x={1170}
                y={354}
                className="text-footlabel sm:pt-2 xl:pt-0 xl:leading-[21.5px]"
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
                className="min-h-[clamp(4rem,5.47vw,105px)] w-full resize-y border-0 bg-white px-2 py-1 font-sans text-footlabel leading-relaxed text-pvo-text outline-none xl:resize-none"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4 xl:contents">
              <span className="hidden sm:block xl:hidden" aria-hidden="true" />
              <PsdBox
                as="button"
                type="submit"
                x={1302}
                y={438}
                w={377}
                h={47}
                className="inline-flex h-[clamp(2.25rem,2.45vw,47px)] w-full cursor-pointer items-center justify-center rounded-none border-0 bg-pvo-red-bright text-footsubmit uppercase text-white"
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
        <span className="block h-[2px] w-full bg-white" />
      </PsdBox>

      <Container inset="footer" className="pb-4 md:pb-7 xl:contents">
        <PsdText
          as="p"
          x={228}
          y={429}
          w={647}
          className="max-w-none border-t border-white pt-2 text-footcopy md:pt-3 xl:border-0 xl:whitespace-nowrap xl:pt-0 xl:text-center xl:leading-[22px]"
        >
          ©Copyright 2026 People Verdict Organization All Rights Reserved
        </PsdText>
      </Container>
    </PsdStage>
  )
}
