import { useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CarouselArrow from './CarouselArrow.jsx'
import Container from './Container.jsx'
import { SWIPER_TOUCH_LOOP, bindSwiperLoopFix, fixSwiperLoop } from './swiperLoop.js'

const AUTOPLAY_MS = 3000

/** Each slide: campaign heading + row of three photos (one full group per swipe). */
const GROUPS = [
  {
    title: 'IEC CAMPAIGN',
    images: [
      {
        src: '/ice1.webp',
        alt: 'IEC Campaign — branded LED vans for a Bihar agriculture outreach drive',
      },
      {
        src: '/ice2.webp',
        alt: 'IEC Campaign — open-ground public gathering at Kamal Mela',
      },
      {
        src: '/ice3.webp',
        alt: 'IEC Campaign — rural audience at a Shravani Mela LED van activation',
      },
    ],
  },
  {
    title: 'OUTDOOR / DOOH',
    images: [
      {
        src: '/dooh1.webp',
        alt: 'Jagannath Ji Yatra — roadside LED branding along the yatra route',
      },
      {
        src: '/dooh2.jpeg',
        alt: 'Bapu 150 Celebration — when an event venue became a story',
      },
      {
        src: '/dooh3.jpeg',
        alt: 'Open-ground public gathering at a Kamal Mela activation',
      },
    ],
  },
  {
    title: 'MOBILITY (MASS OUTREACH)',
    images: [
      {
        src: '/mobility1.webp',
        alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event',
      },
      {
        src: '/mobility2.webp',
        alt: 'Jagannath Ji Yatra — community branding along the yatra route',
      },
      {
        src: '/mobility3.jpeg',
        alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling',
      },
    ],
  },
  {
    title: 'TECHNOLOGY',
    images: [
      {
        src: '/Technology1.jpeg',
        alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event',
      },
      {
        src: '/Technology2.jpeg',
        alt: 'Jagannath Ji Yatra — community branding along the yatra route',
      },
      {
        src: '/Technology3.jpeg',
        alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling',
      },
    ],
  },
]

const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 max-md:mt-5 md:mt-0'

function CampaignBadge({ title }) {
  return (
    <span className="mx-auto mb-4 block w-fit rounded-pill bg-pvo-amber-mid px-6 py-1 text-case-kicker uppercase text-pvo-slate md:mb-6 xl:mb-7">
      {title}
    </span>
  )
}

function PhotoRow({ images }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 xl:gap-5">
      {images.map((photo, index) => (
        <figure
          key={photo.src}
          className={`aspect-photo min-w-0 overflow-hidden rounded-photo border-2 border-pvo-slate-border md:rounded-card-md xl:rounded-card ${
            index === 2 ? 'services-feature-col' : ''
          }`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="object-cover-focus h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  )
}

export default function Services() {
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

  return (
    <section
      id="services"
      className="section-y relative w-full overflow-hidden bg-white"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-16 z-0 size-24 rounded-full bg-pvo-mint opacity-50 md:-left-4 md:top-20 md:size-40 xl:top-24 xl:size-56"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-8 bottom-8 z-0 size-16 rounded-full bg-pvo-periwinkle opacity-50 md:-left-12 md:bottom-10 md:size-28 xl:-left-16 xl:bottom-12 xl:size-36"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-4 top-24 z-0 size-20 rounded-full bg-pvo-sky-dot opacity-50 md:-right-6 md:top-28 md:size-32 xl:-right-8 xl:top-32 xl:size-44"
        aria-hidden="true"
      />

      <Container>
        <h2
          id="services-heading"
          className="mb-4 md:mb-6 xl:mb-7 text-center text-section-title uppercase text-pvo-slate"
        >
          Our Services
        </h2>

        <p className="mx-auto mb-5 max-w-prose-lg text-center text-section-body text-pvo-text-light md:mb-7 xl:mb-8">
          We offer a comprehensive suite of services designed to meet every outreach requirement
        </p>

        <div className="carousel-track">
          <Swiper
            {...SWIPER_TOUCH_LOOP}
            modules={[Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            loopAdditionalSlides={1}
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
            className="services-swiper swiper-touch-carousel w-full overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Service campaign groups"
          >
            {GROUPS.map((group, index) => (
              <SwiperSlide key={group.title} className="!h-auto">
                <div
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${group.title} (${index + 1} of ${GROUPS.length})`}
                  className="flex w-full flex-col"
                >
                  <CampaignBadge title={group.title} />
                  <PhotoRow images={group.images} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <CarouselArrow
            back
            label="Previous service campaign"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${ARROW} left-0 translate-y-[50%]`}
          />
          <CarouselArrow
            label="Next service campaign"
            onClick={() => swiperRef.current?.slideNext()}
            className={`${ARROW} right-0 translate-y-[50%]`}
          />
        </div>
      </Container>
    </section>
  )
}
