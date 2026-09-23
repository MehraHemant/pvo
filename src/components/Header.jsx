import { useEffect, useState } from 'react'
import Container from './Container.jsx'

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
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-header w-full bg-white py-2 shadow-pvo-xs md:py-2.5 xl:py-3">
      <Container className="flex min-w-0 items-center justify-between gap-3 md:gap-4">
        <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/PVO-Logo-.png" alt="PVO - People Verdict Organization" className="h-10 w-auto max-sm:h-8 md:h-14 xl:h-20" />
        </a>
        <nav aria-label="Primary" className="relative min-w-0 shrink">
          <ul className={`${open ? 'flex' : 'hidden'} absolute right-0 top-full z-20 mt-2.5 min-w-48 max-w-[calc(100vw-2rem)] flex-col items-start gap-2.5 rounded-md bg-white px-4 py-4 shadow-pvo-md max-sm:left-0 max-sm:right-0 max-sm:min-w-0 lg:static lg:flex lg:max-w-none lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-2 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-5 2xl:gap-7 xl:rounded-photo`}>
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link relative py-1 text-sm font-medium uppercase leading-snug tracking-wide text-pvo-slate transition-colors duration-300 hover:text-pvo-blue-dark after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-pvo-blue-dark after:transition-transform after:duration-300 xl:text-base xl:leading-tight 2xl:text-lg ${active === link.id ? 'text-pvo-blue-dark after:scale-x-100' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="flex flex-col gap-1 bg-transparent p-1.5 lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-5 bg-pvo-slate" />
            <span className="block h-0.5 w-5 bg-pvo-slate" />
            <span className="block h-0.5 w-5 bg-pvo-slate" />
          </button>
        </nav>
      </Container>
    </header>
  )
}
