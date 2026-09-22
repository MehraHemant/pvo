import { useEffect, useState } from 'react'
import CarouselArrow from './CarouselArrow.jsx'
import { useCarousel } from './useCarousel.js'

// All five banners are 1920x750, the PSD hero height. The width/height
// attributes reserve that ratio before the JPEGs decode, so the section is
// 750 tall from first paint.
const BANNERS = [
  {
    src: '/PVO-Website-Banner-1.jpg',
    title: 'Panch Gaurav Baba Shyam Pradarshani',
    alt: 'Panch Gaurav Baba Shyam Pradarshani at Khatu Shyam Ji — heritage communication through an immersive exhibition'
  },
  {
    src: '/PVO-Website-Banner-2.jpg',
    title: 'Bapu 150 Celebration',
    alt: 'Bapu 150 Celebration — when an event venue became a story'
  },
  {
    src: '/PVO-Website-Banner-3.jpg',
    title: 'Bihar Agriculture Tableau',
    alt: 'Bihar Agriculture Tableau at Gandhi Maidan, Patna — a farming story taken from idea to Independence Day parade'
  },
  {
    src: '/PVO-Website-Banner-4.jpg',
    title: 'Shravani Mela Campaign',
    alt: 'Shravani Mela campaign for Sudha Dairy — thirty days of gates, parlours and branding along the Kanwar route'
  },
  {
    src: '/PVO-Website-Banner-5.jpg',
    title: 'Kamal Mela',
    alt: 'Kamal Mela — a festival of thematic stalls and stages built around public communication'
  }
]

const AUTOPLAY_MS = 5000

// The banners are finished artwork with their own headline on the left, so the
// controls sit together in one cluster along the bottom rather than over it.
const ARROW = 'h-[clamp(1.5rem,1.98vw,38px)] w-[clamp(1.5rem,1.98vw,38px)]'

export default function Hero() {
  const { scrollerRef, index, goTo, step, onKeyDown } = useCarousel(BANNERS.length)
  // Autoplay holds while the pointer or focus is inside, and stops for good
  // once the visitor has driven the carousel themselves.
  const [held, setHeld] = useState(false)
  const [driven, setDriven] = useState(false)

  useEffect(() => {
    if (held || driven) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') goTo((index + 1) % BANNERS.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [driven, goTo, held, index])

  return (
    <section
      className="relative w-full overflow-hidden bg-pvo-parchment"
      id="home"
      aria-roledescription="carousel"
      aria-label="People Verdict campaign highlights"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
      onPointerDown={() => setDriven(true)}
      onKeyDown={() => setDriven(true)}
    >
      <div
        ref={scrollerRef}
        data-carousel-scroller
        tabIndex={0}
        role="group"
        aria-label="Campaign banners, use the left and right arrow keys"
        onKeyDown={onKeyDown}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2E3C4E]"
      >
        {BANNERS.map((banner, i) => (
          <div
            key={banner.src}
            data-carousel-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`${banner.title} (${i + 1} of ${BANNERS.length})`}
            className="w-full shrink-0 snap-start"
          >
            <img
              src={banner.src}
              alt={banner.alt}
              width={1920}
              height={750}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="mx-auto block h-auto w-full"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-[clamp(0.5rem,1.15vw,22px)] left-1/2 z-10 flex -translate-x-1/2 items-center gap-[clamp(0.5rem,0.83vw,16px)]">
        <CarouselArrow back label="Previous banner" onClick={() => step(-1)} className={ARROW} />

        <div className="flex gap-[clamp(5px,0.42vw,8px)]" role="group" aria-label="Choose a banner">
          {BANNERS.map((banner, i) => (
            <button
              key={banner.src}
              type="button"
              data-carousel-dot
              aria-label={`Show ${banner.title}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => goTo(i)}
              className={`h-[clamp(9px,0.78vw,15px)] w-[clamp(9px,0.78vw,15px)] rounded-full border-2 border-[#2E3C4E] p-0 shadow-pvo-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E3C4E] ${
                i === index ? 'bg-[#2E3C4E]' : 'bg-white/80 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <CarouselArrow label="Next banner" onClick={() => step(1)} className={ARROW} />
      </div>
    </section>
  )
}
