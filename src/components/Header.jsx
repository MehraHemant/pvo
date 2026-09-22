import { useEffect, useState } from 'react'
import { PsdBox, PsdText } from './Psd'

const LINKS = [
  { href: '#home', id: 'home', label: 'HOME' },
  { href: '#about', id: 'about', label: 'ABOUT' },
  { href: '#team', id: 'team', label: 'TEAM' },
  { href: '#services', id: 'services', label: 'SERVICES' },
  { href: '#projects', id: 'projects', label: 'PROJECTS' },
  { href: '#contact', id: 'contact', label: 'CONTACT' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    )

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  function handleLinkClick() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 flex h-[clamp(4.5rem,8.96vw,172px)] w-full items-center justify-between gap-4 bg-white pl-[clamp(1rem,22.14vw,425px)] pr-[clamp(1rem,17.76vw,341px)] shadow-pvo-xs xl:block xl:px-0">
      {/* Same centring as .psd-stage-inner in styles.css. The header stays
          sticky, so it is not wrapped in PsdStage. */}
      <div className="psd-stage-inner">
        <PsdBox as="a" href="#home" x={425} y={18} w={170} h={129} className="shrink-0">
          <img
            src="/PVO-Logo-.png"
            alt="PVO - People Verdict Organization"
            className="block h-[clamp(2.75rem,6.72vw,129px)] w-auto xl:h-full xl:w-full xl:object-contain xl:object-left"
          />
        </PsdBox>
        <PsdBox as="nav" x={843} y={74} w={736} h={19} className="relative">
          <ul
            className={`${open ? 'flex' : 'hidden'} absolute right-0 top-full z-20 mt-2 min-w-48 flex-col items-start gap-2.5 rounded-photo bg-white px-4 py-4 shadow-pvo-md lg:static lg:mt-0 lg:flex lg:min-w-0 lg:flex-row lg:items-center lg:gap-[clamp(1.25rem,2.2vw,42px)] lg:bg-transparent lg:p-0 lg:shadow-none xl:h-full xl:w-full xl:justify-between xl:gap-0 xl:leading-[19px]`}
          >
            {LINKS.map((link) => (
              <li key={link.id} className="xl:flex xl:h-full xl:items-center">
                <PsdText
                  as="a"
                  href={link.href}
                  size={25}
                  weight={500}
                  tracking={0}
                  className={`relative inline-block whitespace-nowrap py-0.5 font-display text-menu uppercase transition-colors duration-300 hover:text-pvo-blue-dark xl:py-0 xl:!leading-[19px] max-xl:![font-size:max(0.8rem,calc(25*var(--u)))] ${
                    active === link.id ? 'text-pvo-slate' : 'text-pvo-slate'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </PsdText>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="flex cursor-pointer flex-col gap-1 border-0 bg-transparent p-1 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="block h-0.5 w-6 bg-pvo-slate" />
            <span className="block h-0.5 w-6 bg-pvo-slate" />
            <span className="block h-0.5 w-6 bg-pvo-slate" />
          </button>
        </PsdBox>
      </div>
    </header>
  )
}
