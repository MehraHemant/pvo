import { useCallback, useEffect, useRef, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SWIPER_TOUCH_LOOP, bindSwiperLoopFix, fixSwiperLoop } from '../lib/swiperCarousel.js'

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
      className="w-full overflow-hidden bg-pvo-parchment"
      id="home"
      aria-roledescription="carousel"
      aria-label="People Verdict campaign highlights"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <Swiper
        {...SWIPER_TOUCH_LOOP}
        modules={[Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={0}
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
        className="hero-swiper swiper-touch-carousel w-full"
      >
        {BANNERS.map((banner, i) => (
          <SwiperSlide key={banner.src}>
            <img
              src={banner.src}
              alt={banner.alt}
              width={1920}
              height={750}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="mx-auto h-auto w-full max-w-hero"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
