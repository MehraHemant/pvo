import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CarouselArrow from './CarouselArrow.jsx'
import { PsdBox, PsdStage, PsdText } from './Psd'

const TOP = 6973

/** Visible strip on the PSD artboard (carousel viewport at xl). */
const ROW = { x: 74, y: 246, w: 1766, h: 650 }

/** Uniform card box on desktop; mobile scales via className. */
const CARD = { w: 578, h: 650 }

const CASES = [
  {
    src: '/case-bapu.jpg',
    alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event',
    title: 'Bapu Jayanti',
    text: 'Spearheaded awareness campaigns with thematic events, storytelling zones, and message-driven creative installations.'
  },
  {
    src: '/case-jagannath.jpg',
    alt: 'Jagannath Ji Yatra — roadside LED branding along the yatra route',
    title: 'Jagannath Ji Yatra',
    text: 'Organized laser light shows, experience zones, and branding outreach along the yatra route, creating strong community connect.'
  },
  {
    src: '/case-shravani.jpg',
    alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling',
    title: 'Bihar Shravani Mela',
    text: 'Successfully managed spiritual outreach and crowd handling through visual campaigns, installations, and LED Vans across key Kanwar routes.'
  }
]

/** Swiper breakpoints: 1 mobile / 640→2 / 1024→3 (fits ROW.w with CARD.w + gaps). */
const CASE_STUDIES_BREAKPOINTS = {
  640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
  1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 16 }
}

/** Inset from viewport / PSD artboard edges (matches Services). */
const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 left-3 right-3 xl:top-[calc(425*var(--u))] xl:h-[calc(48*var(--u))] xl:w-[calc(48*var(--u))] xl:translate-y-0 xl:left-[calc(32*var(--u))] xl:right-[calc(32*var(--u))]'

function CaseStudyCard({ item, index, total }) {
  return (
    <PsdBox
      as="article"
      w={CARD.w}
      h={CARD.h}
      role="group"
      aria-roledescription="slide"
      aria-label={`${item.title} (${index + 1} of ${total})`}
      className="mx-auto flex h-full w-full max-w-[min(86%,38rem)] flex-col text-center max-xl:p-2 xl:max-w-none"
    >
      <PsdBox
        x={19}
        y={10}
        w={507}
        h={386}
        className="mb-4 aspect-[507/386] w-full shrink-0 overflow-hidden rounded-[18px] ring-[6px] ring-pvo-case-border md:mb-5 xl:mb-0"
      >
        <img src={item.src} alt={item.alt} className="block h-full w-full object-cover" />
      </PsdBox>
      <PsdText
        as="h3"
        x={168}
        y={439}
        w={201}
        h={22}
        className="mb-2 shrink-0 whitespace-nowrap font-display text-case uppercase text-[#2e3c4e] xl:mb-0 xl:text-center"
      >
        {item.title}
      </PsdText>
      <PsdText
        as="p"
        x={8.34}
        y={496.22}
        w={520.14}
        className="min-h-[clamp(4.5rem,12vw,7rem)] flex-1 text-center text-casebody text-[#2e3c4e] xl:mx-0 xl:min-h-[calc(120*var(--u))] xl:max-w-none xl:text-center"
      >
        {item.text}
      </PsdText>
    </PsdBox>
  )
}

export default function CaseStudies() {
  const swiperRef = useRef(null)

  const onKeyDown = useCallback((event) => {
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (!delta) return
    event.preventDefault()
    if (delta < 0) swiperRef.current?.slidePrev()
    else swiperRef.current?.slideNext()
  }, [])

  return (
    <PsdStage
      h={979}
      id="projects"
      data-psd="cases"
      className="relative w-full overflow-hidden bg-pvo-surface py-16 md:py-24 xl:py-0"
    >
      <div className="px-[clamp(1.25rem,4.43vw,85px)] xl:px-0">
        <PsdText
          as="h2"
          x={378}
          y={7079 - TOP}
          w={1161}
          h={62}
          className="mb-6 text-center font-display text-title uppercase text-[#2e3c4e] xl:mb-0 xl:whitespace-nowrap xl:text-left"
        >
          Case Studies &amp; Highlights
        </PsdText>

        <div className="relative mt-5 md:mt-8 xl:contents">
          <PsdBox
            data-carousel-scroller
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label="Case studies, use the left and right arrow keys"
            onKeyDown={onKeyDown}
            x={ROW.x}
            y={ROW.y}
            w={ROW.w}
            h={ROW.h}
            className="w-full max-w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e3c4e]"
          >
            <Swiper
              loop
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              breakpoints={CASE_STUDIES_BREAKPOINTS}
              loopAdditionalSlides={3}
              watchSlidesProgress
              observer
              observeParents
              onSwiper={(instance) => {
                swiperRef.current = instance
                instance.loopFix()
              }}
              onSlideChange={(instance) => instance.loopFix()}
              className="case-studies-swiper h-full w-full overflow-hidden"
            >
              {CASES.map((item, i) => (
                <SwiperSlide key={item.title} className="!h-full">
                  <CaseStudyCard item={item} index={i} total={CASES.length} />
                </SwiperSlide>
              ))}
            </Swiper>
          </PsdBox>

          <CarouselArrow
            back
            label="Previous case study"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`${ARROW} !left-3 !right-auto xl:!left-[calc(32*var(--u))]`}
          />
          <CarouselArrow
            label="Next case study"
            onClick={() => swiperRef.current?.slideNext()}
            className={`${ARROW} !right-3 !left-auto xl:!right-[calc(32*var(--u))]`}
          />
        </div>
      </div>
    </PsdStage>
  )
}
