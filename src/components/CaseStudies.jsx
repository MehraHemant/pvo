import CarouselArrow from './CarouselArrow.jsx'
import CarouselDots from './CarouselDots.jsx'
import { PsdBox, PsdStage, PsdText } from './Psd'
import { useEmblaSection } from './useEmblaSection.js'

const TOP = 6973

/**
 * The visible strip. A card here is three separately placed PSD layers rather
 * than one box, so the row is described the way Journey describes its cards:
 * each slide carries its own PSD width and its parts sit at coordinates
 * relative to it. The strip itself is invisible, so it is drawn a few pixels
 * outside the cards to leave the photos' 6px ring clear of the clip edge —
 * only the card geometry inside it is PSD-exact.
 *
 * Cards sit at 82.34..602.48, 652..1268 and 1318..1826, photos at y 256..643
 * and the longest body runs to 888.
 */
const ROW = { x: 74, y: 246, w: 1766, h: 650 }

const CASES = [
  {
    src: '/case-bapu.jpg',
    alt: 'Bapu Jayanti — Gandhi Vichar Samagam stage event',
    title: 'Bapu Jayanti',
    text: 'Spearheaded awareness campaigns with thematic events, storytelling zones, and message-driven creative installations.',
    slide: 578, // card box plus the PSD gutter that follows it
    photo: { x: 19, y: 10, w: 507, h: 386 },
    titleBox: { x: 168, y: 439, w: 201, h: 22 },
    bodyBox: { x: 8.34, y: 496.22, w: 520.14 }
  },
  {
    src: '/case-jagannath.jpg',
    alt: 'Jagannath Ji Yatra — roadside LED branding along the yatra route',
    title: 'Jagannath Ji Yatra',
    text: 'Organized laser light shows, experience zones, and branding outreach along the yatra route, creating strong community connect.',
    slide: 666,
    photo: { x: 0, y: 10, w: 616, h: 386 },
    titleBox: { x: 159, y: 441, w: 309, h: 22 },
    bodyBox: { x: 23.6, y: 497.22, w: 585.89 }
  },
  {
    src: '/case-shravani.jpg',
    alt: 'Bihar Shravani Mela — Kanwar route outreach and crowd handling',
    title: 'Bihar Shravani Mela',
    text: 'Successfully managed spiritual outreach and crowd handling through visual campaigns, installations, and LED Vans across key Kanwar routes.',
    slide: 549.66,
    photo: { x: 0, y: 10, w: 508, h: 387 },
    titleBox: { x: 92, y: 440, w: 326, h: 23 },
    bodyBox: { x: 3.09, y: 496.22, w: 502.66 }
  }
]

// Mobile: over the strip's edges. Desktop: out in the artboard margin beside
// the row, which is empty in the PSD, vertically centred on the photos.
const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 xl:top-[calc(425*var(--u))] xl:h-[calc(48*var(--u))] xl:w-[calc(48*var(--u))] xl:translate-y-0'

export default function CaseStudies() {
  const { emblaRef, index, canScroll, goTo, step, onKeyDown } = useEmblaSection()

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

        {/* Vanishes at xl so the scroller inside positions against the stage. */}
        <div className="relative mt-5 md:mt-8 xl:contents">
          <PsdBox
            ref={emblaRef}
            data-carousel-scroller
            tabIndex={canScroll ? 0 : -1}
            role="group"
            aria-roledescription="carousel"
            aria-label="Case studies, use the left and right arrow keys"
            onKeyDown={onKeyDown}
            x={ROW.x}
            y={ROW.y}
            w={ROW.w}
            h={ROW.h}
            className="overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2e3c4e]"
          >
            <div className="flex h-full gap-5 md:gap-[clamp(1.25rem,2.7vw,52px)] xl:gap-0">
              {CASES.map((item, i) => (
                <PsdBox
                  as="article"
                  key={item.title}
                  data-carousel-slide
                  w={item.slide}
                  h={ROW.h}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${item.title} (${i + 1} of ${CASES.length})`}
                  className="relative min-w-0 shrink-0 grow-0 text-center max-xl:w-[min(86%,38rem)] max-xl:p-2"
                >
                  <PsdBox
                    {...item.photo}
                    className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-[18px] ring-[6px] ring-pvo-case-border md:mb-5 xl:mb-0"
                  >
                    <img src={item.src} alt={item.alt} className="block h-full w-full object-cover" />
                  </PsdBox>
                  <PsdText
                    as="h3"
                    {...item.titleBox}
                    className="mb-2 whitespace-nowrap font-display text-case uppercase text-[#2e3c4e] xl:mb-0 xl:text-center"
                  >
                    {item.title}
                  </PsdText>
                  <PsdText
                    as="p"
                    {...item.bodyBox}
                    className="mx-auto max-w-md text-center text-casebody text-[#2e3c4e] xl:mx-0 xl:max-w-none"
                  >
                    {item.text}
                  </PsdText>
                </PsdBox>
              ))}
            </div>
          </PsdBox>

          <CarouselArrow
            back
            label="Previous case study"
            onClick={() => step(-1)}
            className={`${ARROW} -left-3 xl:left-[calc(14*var(--u))] ${canScroll ? '' : 'hidden'}`}
          />
          <CarouselArrow
            label="Next case study"
            onClick={() => step(1)}
            className={`${ARROW} -right-3 xl:right-[calc(14*var(--u))] ${canScroll ? '' : 'hidden'}`}
          />
        </div>

        <div className="xl:absolute xl:left-1/2 xl:top-[calc(934*var(--u))] xl:z-10 xl:-translate-x-1/2 xl:mt-0">
          <CarouselDots
            count={CASES.length}
            index={index}
            onSelect={goTo}
            groupLabel="Choose a case study"
            itemLabel={(i) => `Show ${CASES[i].title}`}
            borderClass="border-[#2e3c4e]"
            fillClass="bg-[#2e3c4e]"
          />
        </div>
      </div>
    </PsdStage>
  )
}
