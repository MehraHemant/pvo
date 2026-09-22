import { useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CarouselArrow from './CarouselArrow.jsx'
import Container from './Container'
import { psdLen, PsdBox, PsdStage, PsdText } from './Psd.jsx'

const AUTOPLAY_MS = 3000

/** Each slide: campaign heading + row of three photos (desktop shows all three). */
const GROUPS = [
  {
    title: 'IEC CAMPAIGN',
    images: [
      {
        src: '/iec-1.jpg',
        alt: 'IEC Campaign — branded LED vans for a Bihar agriculture outreach drive'
      },
      {
        src: '/iec-2.jpg',
        alt: 'IEC Campaign — open-ground public gathering at Kamal Mela'
      },
      {
        src: '/iec-3.jpg',
        alt: 'IEC Campaign — rural audience at a Shravani Mela LED van activation'
      }
    ]
  },
  {
    title: 'LED VAN ACTIVATION',
    images: [
      {
        src: '/PVO-Website-Banner-1.jpg',
        alt: 'Jagannath Ji Yatra — roadside LED branding along the yatra route'
      },
      {
        src: '/PVO-Website-Banner-2.jpg',
        alt: 'Bapu 150 Celebration — when an event venue became a story'
      },
      {
        src: '/PVO-Website-Banner-5.jpg',
        alt: 'Open-ground public gathering at a Kamal Mela activation'
      }
    ]
  },
  {
    title: 'CULTURAL EVENTS',
    images: [
      {
        src: '/case-bapu.jpg',
        alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event'
      },
      {
        src: '/case-jagannath.jpg',
        alt: 'Jagannath Ji Yatra — community branding along the yatra route'
      },
      {
        src: '/case-shravani.jpg',
        alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling'
      }
    ]
  }
]

const GAP = 'clamp(0.75rem,1.6vw,31px)'

const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 xl:top-[calc(550*var(--u))] xl:h-[calc(48*var(--u))] xl:w-[calc(48*var(--u))] xl:translate-y-0'

function CampaignBadge({ title }) {
  return (
    <div
      className="mx-auto mb-5 flex h-[clamp(2.5rem,4.11vw,79px)] w-fit min-w-[clamp(12rem,23.85vw,458px)] items-center justify-center bg-pvo-amber-mid px-8 md:mb-7"
      style={{ borderRadius: 'calc(8 * var(--u))' }}
    >
      <span className="text-badge uppercase text-[#2E3C4E]">{title}</span>
    </div>
  )
}

function PhotoRow({ images }) {
  return (
    <div
      className="grid grid-cols-1 gap-[var(--services-gap)] md:grid-cols-3"
      style={{ ['--services-gap']: GAP }}
    >
      {images.map((photo) => (
        <figure
          key={photo.src}
          className="min-w-0 overflow-hidden border-2 border-black max-xl:aspect-[563/519]"
          style={{ borderRadius: 'calc(22 * var(--u))' }}
        >
          <img src={photo.src} alt={photo.alt} className="block h-full w-full object-cover xl:h-[calc(519*var(--u))]" />
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
    <PsdStage
      h={937}
      id="services"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24 xl:py-0"
    >
      <PsdBox
        as="img"
        src="/psd/deco-bubbles-left.png"
        alt=""
        aria-hidden="true"
        x={-1}
        y={0}
        w={202}
        h={244}
        className="pointer-events-none z-0 max-w-none select-none max-xl:absolute max-xl:-left-px max-xl:top-0"
        style={{ width: psdLen(202), height: psdLen(244) }}
      />

      <Container inset="tight" className="max-xl:relative max-xl:z-10 xl:contents">
        <PsdText
          as="h2"
          x={672}
          y={66}
          className="mb-6 text-center font-display text-title uppercase text-[#2E3C4E] xl:leading-[67.3px]"
        >
          Our Services
        </PsdText>
        <PsdText
          as="p"
          x={300.25}
          y={162.16}
          w={1319.06}
          className="mx-auto mb-5 text-center text-copy text-[#2E3C4E] md:mb-8 xl:leading-[27.8px]"
        >
          We offer a comprehensive suite of services designed to meet every outreach requirement
        </PsdText>

        <div className="relative xl:contents">
          <PsdBox
            data-carousel-scroller
            x={85}
            y={233}
            w={1750}
            h={634}
            className="w-full max-w-full overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              loop
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              loopAdditionalSlides={1}
              watchSlidesProgress
              observer
              observeParents
              autoplay={
                reduceMotion
                  ? false
                  : {
                      delay: AUTOPLAY_MS,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true
                    }
              }
              onSwiper={(instance) => {
                swiperRef.current = instance
                instance.loopFix()
              }}
              className="services-swiper w-full overflow-hidden"
            >
              {GROUPS.map((group, i) => (
                <SwiperSlide key={group.title} className="!h-auto">
                  <div
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${group.title} (${i + 1} of ${GROUPS.length})`}
                    className="flex flex-col"
                  >
                    <CampaignBadge title={group.title} />
                    <PhotoRow images={group.images} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </PsdBox>

          <CarouselArrow
            back
            label="Previous service campaign"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${ARROW} left-3 xl:left-[calc(32*var(--u))]`}
          />
          <CarouselArrow
            label="Next service campaign"
            onClick={() => swiperRef.current?.slideNext()}
            className={`${ARROW} right-3 xl:right-[calc(32*var(--u))]`}
          />
        </div>
      </Container>
    </PsdStage>
  )
}
