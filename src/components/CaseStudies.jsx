import { useCallback, useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CarouselArrow from './CarouselArrow.jsx'
import Container from './Container.jsx'
import {
  SWIPER_TOUCH_LOOP,
  bindSwiperLoopFix,
  duplicateSlidesForLoop,
  fixSwiperLoop,
} from './swiperLoop.js'

const AUTOPLAY_MS = 5000

const CASES = [
  {
    src: '/case-bapu.jpg',
    alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event',
    title: 'BAPU JAYANTI',
    text: 'Spearheaded awareness campaigns with thematic events, storytelling zones, and message-driven creative installations.',
  },
  {
    src: '/case-jagannath.jpg',
    alt: 'Jagannath Ji Yatra — roadside LED branding along the yatra route',
    title: 'JAGANNATH JI YATRA',
    text: 'Organized laser light shows, experience zones, and branding outreach along the yatra route, creating strong community connect.',
  },
  {
    src: '/case-shravani.jpg',
    alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling',
    title: 'BIHAR SHRAVANI MELA',
    text: 'Successfully managed spiritual outreach and crowd handling through visual campaigns, installations, and LED Vans across key Kanwar routes.',
  },
  {
    src: '/iec-1.jpg',
    alt: 'IEC Campaign — branded outreach vans on a rural Bihar route',
    title: 'IEC CAMPAIGN',
    text: 'Delivered information, education, and communication drives with mobile vans, on-ground activations, and localized creative for rural audiences.',
  },
  {
    src: '/PVO-Website-Banner-5.jpg',
    alt: 'Kamal Mela — open-ground public gathering and stage branding',
    title: 'KAMAL MELA',
    text: 'Built high-energy experience zones, stage branding, and crowd engagement formats that amplified message recall at large public gatherings.',
  },
  {
    src: '/iec-3.jpg',
    alt: 'LED van activation — night-time branded vehicle on campaign route',
    title: 'LED VAN ACTIVATION',
    text: 'Deployed illuminated mobile units and route-based visibility to extend campaign reach across cities, highways, and high-footfall corridors.',
  },
]

const CASE_SLIDES = duplicateSlidesForLoop(CASES, 3)

const CASE_STUDIES_BREAKPOINTS = {
  640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
  1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 16 },
}

const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 md:-mt-6'

function CaseStudyCard({ item, index, total }) {
  return (
    <article
      className="flex h-full flex-col text-center"
      role="group"
      aria-roledescription="slide"
      aria-label={`${item.title} (${index + 1} of ${total})`}
    >
      <div className="aspect-case overflow-hidden rounded-photo border-2 border-pvo-case-border md:rounded-card-md xl:rounded-card">
        <img
          src={item.src}
          alt={item.alt}
          className="object-cover-right h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <h3 className="mb-2 mt-3 text-case-kicker uppercase text-pvo-slate md:mt-3.5 xl:mt-4">
        {item.title}
      </h3>
      <p className="mx-auto max-w-prose-sm flex-1 text-section-sm leading-relaxed text-pvo-text-light">
        {item.text}
      </p>
    </article>
  )
}

export default function CaseStudies() {
  const swiperRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const onKeyDown = useCallback((event) => {
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!delta) return
    event.preventDefault()
    if (delta < 0) swiperRef.current?.slidePrev()
    else swiperRef.current?.slideNext()
  }, [])

  return (
    <section
      id="projects"
      className="section-y relative w-full overflow-hidden bg-pvo-surface"
      aria-labelledby="case-studies-heading"
    >
      <Container>
        <h2
          id="case-studies-heading"
          className="mb-4 md:mb-6 xl:mb-7 text-center text-section-title uppercase text-pvo-slate"
        >
          CASE STUDIES & HIGHLIGHTS
        </h2>

        <div
          className="carousel-track mt-5 md:mt-7 xl:mt-8"
          role="group"
          aria-roledescription="carousel"
          aria-label="Case studies highlights"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <Swiper
            {...SWIPER_TOUCH_LOOP}
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={CASE_STUDIES_BREAKPOINTS}
            loopAdditionalSlides={4}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: AUTOPLAY_MS,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            onSwiper={bindSwiperLoopFix(swiperRef)}
            onBreakpoint={fixSwiperLoop}
            onResize={fixSwiperLoop}
            onSlideChangeTransitionEnd={fixSwiperLoop}
            className="case-studies-swiper swiper-touch-carousel w-full overflow-hidden"
          >
            {CASE_SLIDES.map((item, i) => (
              <SwiperSlide key={`${item.title}-${i}`} className="!h-auto">
                <CaseStudyCard item={item} index={i % CASES.length} total={CASES.length} />
              </SwiperSlide>
            ))}
          </Swiper>

          <CarouselArrow
            back
            label="Previous case study"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${ARROW} left-0 top-[40%]`}
          />
          <CarouselArrow
            label="Next case study"
            onClick={() => swiperRef.current?.slideNext()}
            className={`${ARROW} right-0 top-[40%]`}
          />
        </div>
      </Container>
    </section>
  )
}
