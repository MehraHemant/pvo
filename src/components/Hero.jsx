import { useCallback, useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CarouselDots from './CarouselDots.jsx'

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

export default function Hero() {
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

  const onKeyDown = useCallback((event) => {
    const delta = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
    if (delta) {
      event.preventDefault()
      if (delta < 0) swiperRef.current?.slidePrev()
      else swiperRef.current?.slideNext()
      return
    }
    if (event.key === 'Home') {
      event.preventDefault()
      swiperRef.current?.slideToLoop(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      swiperRef.current?.slideToLoop(BANNERS.length - 1)
    }
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-pvo-parchment"
      id="home"
      aria-roledescription="carousel"
      aria-label="People Verdict campaign highlights"
    >
      <div
        data-carousel-scroller
        tabIndex={0}
        role="group"
        aria-label="Campaign banners, use the left and right arrow keys"
        onKeyDown={onKeyDown}
        className="overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#2E3C4E]"
      >
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={0}
          loopAdditionalSlides={4}
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
            setActiveIndex(instance.realIndex)
            instance.loopFix()
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-swiper w-full overflow-hidden"
        >
          {BANNERS.map((banner, i) => (
            <SwiperSlide key={banner.src}>
              <div
                role="group"
                aria-roledescription="slide"
                aria-label={`${banner.title} (${i + 1} of ${BANNERS.length})`}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pointer-events-none absolute bottom-[clamp(0.5rem,1.15vw,22px)] left-1/2 z-10 -translate-x-1/2 [&>div]:mt-0 [&>div]:gap-[clamp(5px,0.42vw,8px)]">
        <div className="pointer-events-auto">
          <CarouselDots
            count={BANNERS.length}
            index={activeIndex}
            onSelect={(i) => swiperRef.current?.slideToLoop(i)}
            groupLabel="Choose a banner"
            itemLabel={(i) => `Show ${BANNERS[i].title}`}
          />
        </div>
      </div>
    </section>
  )
}
