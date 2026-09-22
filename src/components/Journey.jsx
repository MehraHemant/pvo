import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const AUTOPLAY_MS = 3000

const SLIDES = [
  {
    year: '2009-10',
    title: 'STARTED WITH PASSION',
    description: 'We have decided to follow our passion'
  },
  {
    year: '2014-15',
    title: 'YEAR OF CHANGE',
    description: 'These were the years, where wehave Identified our strength and code'
  },
  {
    year: '2016-18',
    title: 'YEAR OF INNOVATION',
    description: 'Kamal Mela, Kamal Jatre, Selfie with Modi'
  },
  {
    year: '2019',
    title: 'YEAR OF NARRATION',
    description: 'Bharat ke man ki baat, Aakansha Peti'
  },
  {
    year: '2020-22',
    title: 'MISSION PATLIPUTRA',
    description: 'Aatmanirbhar Bihar and BJP 4 WB Campaign'
  },
  {
    year: '2022',
    title: 'YEAR OF LANDMARK CAMPAIGN',
    description: 'Aayega to modi hi, BJP campaign in Uttarakhand'
  },
  {
    year: '2023-24',
    title: 'Viksit Bharat',
    description: 'Viksit Bharat, Fir ek bar Modi Sarkar'
  },
  {
    year: '2025',
    title: ' Cultural  Events',
    description:
      'Mahakumbh-2025, Falgun mela khatu shyam 2025, Pandharpur wari mela, & Jagannath ji yatra '
  }
]

const GAP = 'clamp(0.75rem,0.9vw,17px)'

/** Swiper breakpoints: base 1 / 640→2 / 1024→4 visible; group always 1 for autoplay. */
const JOURNEY_BREAKPOINTS = {
  640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 14 },
  1024: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 17 }
}

function JourneyCard({ card, active }) {
  const ink = active ? 'text-white' : 'text-[#2e3c4e]'
  const shell = active ? 'bg-pvo-blue shadow-pvo-md' : 'bg-white shadow-pvo-sm'

  return (
    <article className={`flex h-full flex-col gap-2 rounded-[22px] px-5 py-12 ${shell} hover:shadow-lg`}>
      {active ? (
        <span className="inline-flex w-fit items-center rounded-pill bg-gradient-to-r from-orange-400 to-pvo-yellow-pill px-3 py-1 font-display text-figure text-[#2e3c4e]">
          {card.year}
        </span>
      ) : (
        <span className="font-display text-figure text-[#2e3c4e]">{card.year}</span>
      )}
      <h3 className={`font-display text-kicker uppercase ${ink}`}>{card.title}</h3>
      <p className={`text-tiny ${ink}`}>{card.description}</p>
    </article>
  )
}

export default function Journey() {
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

  return (
    <section
      data-psd="journey"
      className="relative w-full overflow-hidden bg-pvo-surface py-[clamp(2.5rem,4.17vw,80px)]"
      aria-roledescription="carousel"
      aria-label="People Verdict journey timeline"
    >
      <div className="mx-auto w-full max-w-[1920px] px-[clamp(1.25rem,4.43vw,85px)]">
        <h2 className="mb-[clamp(1.5rem,3vw,58px)] text-center font-display text-title uppercase text-[#2e3c4e]">
          Journey
        </h2>

        <div className="mb-5 space-y-4 text-copy text-[#2e3c4e] md:mb-8">
          <p>
            The journey of People Verdict began in 2010 with a vision to transform political and public
            outreach in India. Over the years, we have built a robust ecosystem of communication and activation
            tools, consistently innovating in how leaders interact with citizens.
          </p>
          <p>
            From humble beginnings to handling large-scale nationwide campaigns, the organization has grown
            exponentially—diversifying into digital outreach, media, event management, and more. Our deep
            understanding of rural and urban voter psychology has made us the preferred choice for many state
            and central government projects, as well as political clients.
          </p>
        </div>

        <div
          data-carousel-scroller
          className="journey-swiper mx-auto mt-[clamp(1.5rem,4.7vw,91px)] focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#2e3c4e]"
          style={{ ['--journey-gap']: GAP }}
        >
          <Swiper
            modules={[Autoplay]}
            loop
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
                    pauseOnMouseEnter: true
                  }
            }
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full "
          >
            {SLIDES.map((card, i) => (
              <SwiperSlide key={card.year} className="!h-auto">
                <div
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${card.year}, ${card.title} (${i + 1} of ${SLIDES.length})`}
                  className="h-full py-8"
                >
                  <JourneyCard card={card} active={i === activeIndex} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
