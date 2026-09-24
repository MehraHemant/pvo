import { useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
  SWIPER_TOUCH_LOOP,
  bindSwiperLoopFix,
  duplicateSlidesForLoop,
  fixSwiperLoop,
} from './swiperLoop.js'
import Container from './Container.jsx'

const LEGACY_SLIDES = [
  {
    year: '2009-10',
    title: 'STARTED WITH PASSION',
    description: 'We have decided to follow our passion',
  },
  {
    year: '2014-15',
    title: 'YEAR OF CHANGE',
    description: 'These were the years, where wehave Identified our strength and code',
  },
  {
    year: '2016-18',
    title: 'YEAR OF INNOVATION',
    description: 'Kamal Mela, Kamal Jatre, Selfie with Modi',
  },
  {
    year: '2019',
    title: 'YEAR OF NARRATION',
    description: 'Bharat ke man ki baat, Aakansha Peti',
  },
  {
    year: '2020-22',
    title: 'MISSION PATLIPUTRA',
    description: 'Aatmanirbhar Bihar and BJP 4 WB Campaign',
  },
  {
    year: '2022',
    title: 'YEAR OF LANDMARK CAMPAIGN',
    description: 'Aayega to modi hi, BJP campaign in Uttarakhand',
  },
  {
    year: '2023-24',
    title: 'Viksit Bharat',
    description: 'Viksit Bharat, Fir ek bar Modi Sarkar',
  },
  {
    year: '2025',
    title: ' Cultural  Events',
    description:
      'Mahakumbh-2025, Falgun mela khatu shyam 2025, Pandharpur wari mela, & Jagannath ji yatra ',
  },
]

const AUTOPLAY_MS = 3000

/** Swiper loop needs >2× max slidesPerView; 8 slides at 4-up is only 2×. */
const JOURNEY_SLIDES = duplicateSlidesForLoop(
  LEGACY_SLIDES.length > 4 * 2 ? LEGACY_SLIDES : [...LEGACY_SLIDES, ...LEGACY_SLIDES],
  4
)

const JOURNEY_BREAKPOINTS = {
  0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 12 },
  640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
  1024: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 18 },
}

function JourneyCard({ card, isActive }) {
  const cardBg = isActive ? 'bg-pvo-blue text-white shadow-pvo-md' : 'bg-white shadow-pvo-sm'
  const yearClass = isActive
    ? 'mb-2 inline-block rounded-pill bg-pvo-yellow-pill px-1.5 text-journey-year leading-tight text-pvo-slate'
    : 'mb-2 inline-block text-journey-year leading-tight text-pvo-slate'
  const titleClass = isActive
    ? 'mb-1.5 text-journey-kicker uppercase text-white'
    : 'mb-1.5 text-journey-kicker uppercase text-pvo-slate'
  const descClass = isActive
    ? 'text-journey-body leading-normal text-white/95'
    : 'text-journey-body leading-normal text-pvo-text-light'

  return (
    <article
      className={`h-full rounded-photo p-4 transition duration-300 hover:-translate-y-1 hover:shadow-pvo-md md:rounded-card-md md:p-5 xl:rounded-card xl:p-6 ${cardBg}`}
    >
      <span className={yearClass}>{card.year}</span>
      <h3 className={titleClass}>{card.title}</h3>
      <p className={descClass}>{card.description}</p>
    </article>
  )
}

export default function Journey() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const syncActiveIndex = (swiper) => {
    setActiveIndex(swiper.realIndex)
  }

  return (
    <section
      className="section-y relative w-full overflow-hidden bg-pvo-surface"
      aria-labelledby="journey-heading"
    >
      <Container>
        <h2
          id="journey-heading"
          className="mb-4 md:mb-6 xl:mb-7 text-center text-section-title uppercase text-pvo-slate"
        >
          JOURNEY
        </h2>
        <div className="prose-strong mb-5 text-section-body text-pvo-text-light md:mb-7 xl:mb-8">
          <p>
            The journey of People Verdict began in 2010 with a vision to transform political and public
            outreach in India. Over the years, we have built a robust ecosystem of communication and
            activation tools, consistently innovating in how leaders interact with citizens.
            <br />
            From humble beginnings to handling large-scale nationwide campaigns, the organization has grown
            exponentially&mdash;diversifying into digital outreach, media, event management, and more. Our
            deep understanding of rural and urban voter psychology has made us the preferred choice for many
            state and central government projects, as well as political clients.
          </p>
        </div>

        <div className="journey-swiper mt-5 md:mt-7 xl:mt-8">
          <Swiper
            {...SWIPER_TOUCH_LOOP}
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={12}
            breakpoints={JOURNEY_BREAKPOINTS}
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
            onSwiper={bindSwiperLoopFix(swiperRef, syncActiveIndex)}
            onSlideChange={syncActiveIndex}
            onBreakpoint={fixSwiperLoop}
            onResize={fixSwiperLoop}
            onSlideChangeTransitionEnd={fixSwiperLoop}
            className="journey-swiper-track swiper-touch-carousel w-full overflow-hidden"
            aria-roledescription="carousel"
            aria-label="People Verdict journey timeline"
          >
            {JOURNEY_SLIDES.map((card, index) => (
              <SwiperSlide key={`${card.year}-${index}`} className="!h-auto py-6">
                <JourneyCard card={card} isActive={activeIndex === index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
