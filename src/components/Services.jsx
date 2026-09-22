import CarouselArrow from './CarouselArrow.jsx'
import CarouselDots from './CarouselDots.jsx'
import Container from './Container'
import { psdLen, PsdBox, PsdStage, PsdText } from './Psd.jsx'
import { useEmblaSection } from './useEmblaSection.js'

// The visible strip is the PSD's photo row, 85..1835 x 348..867: three frames
// with a 31px gutter, which is exactly 1750 wide. The track runs on past it.
const ROW = { x: 85, y: 348, w: 1750, h: 519 }

const PHOTOS = [
  {
    src: '/iec-1.jpg',
    alt: 'IEC Campaign — branded LED vans for a Bihar agriculture outreach drive',
    w: 563
  },
  {
    src: '/iec-2.jpg',
    alt: 'IEC Campaign — open-ground public gathering at Kamal Mela',
    w: 562
  },
  {
    src: '/iec-3.jpg',
    alt: 'IEC Campaign — rural audience at a Shravani Mela LED van activation',
    w: 563
  }
]

// Mobile: over the strip's edges. Desktop: out in the artboard margin beside
// the row, which is empty in the PSD, vertically centred on the frames.
const ARROW =
  'absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 xl:top-[calc(584*var(--u))] xl:h-[calc(48*var(--u))] xl:w-[calc(48*var(--u))] xl:translate-y-0'

export default function Services() {
  const { emblaRef, index, canScroll, goTo, step, onKeyDown } = useEmblaSection()

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
        <PsdBox
          x={729}
          y={233}
          w={458}
          h={79}
          className="mx-auto mb-5 flex h-[clamp(2.5rem,4.11vw,79px)] w-fit min-w-[clamp(12rem,23.85vw,458px)] items-center justify-center bg-pvo-amber-mid px-8 md:mb-7"
          style={{ borderRadius: 'calc(8 * var(--u))' }}
        >
          <span className="text-badge uppercase text-[#2E3C4E]">IEC CAMPAIGN</span>
        </PsdBox>

        {/* Vanishes at xl so the scroller inside positions against the stage. */}
        <div className="relative xl:contents">
          <PsdBox
            ref={emblaRef}
            data-carousel-scroller
            tabIndex={canScroll ? 0 : -1}
            role="group"
            aria-roledescription="carousel"
            aria-label="IEC campaign photos, use the left and right arrow keys"
            onKeyDown={onKeyDown}
            x={ROW.x}
            y={ROW.y}
            w={ROW.w}
            h={ROW.h}
            className="overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2E3C4E]"
          >
            <div className="flex h-full gap-[clamp(0.75rem,1.6vw,31px)] xl:gap-[calc(31*var(--u))]">
              {PHOTOS.map((photo, i) => (
                <PsdBox
                  as="figure"
                  key={photo.src}
                  data-carousel-slide
                  w={photo.w}
                  h={ROW.h}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Photo ${i + 1} of ${PHOTOS.length}`}
                  className="min-w-0 shrink-0 grow-0 overflow-hidden border-2 border-black max-xl:w-[min(86%,38rem)]"
                  style={{ borderRadius: 'calc(22 * var(--u))' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="block h-full w-full object-cover max-xl:aspect-[563/519]"
                  />
                </PsdBox>
              ))}
            </div>
          </PsdBox>

          <CarouselArrow
            back
            label="Previous IEC campaign photo"
            onClick={() => step(-1)}
            className={`${ARROW} -left-3 xl:left-[calc(18*var(--u))] ${canScroll ? '' : 'hidden'}`}
          />
          <CarouselArrow
            label="Next IEC campaign photo"
            onClick={() => step(1)}
            className={`${ARROW} -right-3 xl:right-[calc(18*var(--u))] ${canScroll ? '' : 'hidden'}`}
          />
        </div>

        <div className="xl:absolute xl:left-1/2 xl:top-[calc(886*var(--u))] xl:z-10 xl:-translate-x-1/2 xl:mt-0">
          <CarouselDots
            count={PHOTOS.length}
            index={index}
            onSelect={goTo}
            groupLabel="Choose an IEC campaign photo"
            itemLabel={(i) => `Show IEC campaign photo ${i + 1}`}
          />
        </div>
      </Container>
    </PsdStage>
  )
}
