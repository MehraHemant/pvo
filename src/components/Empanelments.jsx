import { PsdBox, PsdStage, PsdText } from './Psd'

const TOP = 6006

// Source PNGs are square with padding. Crop fractions map the opaque artwork
// onto the PSD smart-object box so the mark fills that box.
const LOGOS = [
  {
    src: '/Empanelments/Logo1.png',
    alt: 'DAVP — Directorate of Advertising and Visual Publicity',
    left: 68,
    top: 94,
    width: 187,
    height: 129,
    crop: { x: 231 / 2084, y: 441 / 2084, w: (1835 - 231) / 2084, h: (1552 - 441) / 2084 }
  },
  {
    src: '/Empanelments/Logo2.png',
    alt: 'Government of Bihar',
    left: 413,
    top: 47,
    width: 186,
    height: 217,
    crop: { x: 324 / 2084, y: 106 / 2084, w: (1809 - 324) / 2084, h: (1841 - 106) / 2084 }
  },
  {
    src: '/Empanelments/Logo3.png',
    alt: 'Government of Goa',
    left: 87,
    top: 384,
    width: 155,
    height: 224,
    crop: { x: 426 / 2084, y: 151 / 2084, w: (1658 - 426) / 2084, h: (1932 - 151) / 2084 }
  },
  {
    src: '/Empanelments/Logo4.png',
    alt: 'Government of Assam',
    left: 426,
    top: 393,
    width: 160,
    height: 206,
    crop: { x: 437 / 2084, y: 305 / 2084, w: (1647 - 437) / 2084, h: (1861 - 305) / 2084 }
  }
]

export default function Empanelments() {
  return (
    <PsdStage
      h={918}
      data-psd="empanelments"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24 xl:py-0"
    >
      <PsdBox
        x={1718}
        y={5979 - TOP}
        w={202}
        h={244}
        className="pointer-events-none absolute z-0 max-xl:right-0 max-xl:top-0 max-xl:h-16 max-xl:w-14"
      >
        <img src="/psd/deco-bubbles-right.png" alt="" className="block h-full w-full max-w-none object-contain" />
      </PsdBox>

      <div className="grid grid-cols-1 items-center justify-items-center gap-8 px-[clamp(1.25rem,4.43vw,85px)] text-center lg:grid-cols-2 lg:justify-items-stretch lg:text-left xl:px-0">
        <div>
          <PsdText
            as="h2"
            x={81}
            y={6171 - TOP}
            w={658}
            h={62}
            className="mb-6 text-center font-display text-title uppercase text-[#2e3c4e] lg:text-left xl:mb-0 xl:text-center"
          >
            Empanelments
          </PsdText>
          <PsdText
            as="p"
            x={77}
            y={6281 - TOP}
            w={905.78}
            className="mb-5 text-copy text-[#2e3c4e] md:mb-8 lg:max-w-xl xl:mb-0 xl:max-w-none"
          >
            These empanelments endorse our credibility, quality of service, and national capability to deliver
            high-impact campaigns.
          </PsdText>
          <ul className="grid gap-4 md:gap-6">
            <li className="flex items-start justify-center gap-[clamp(0.75rem,2.24vw,43px)] text-left lg:justify-start">
              <PsdBox
                x={77}
                y={6507 - TOP}
                w={91}
                h={91}
                className="max-xl:h-[38px] max-xl:w-[38px] shrink-0"
              >
                <img src="/psd/empanel-star.png" alt="" className="block h-full w-full object-contain" />
              </PsdBox>
              <PsdText
                as="h3"
                x={211}
                y={6513 - TOP}
                w={745.69}
                className="text-empanel text-[#2e3c4e]"
              >
                Directorate of Advertising and Visual Publicity (DAVP)
              </PsdText>
            </li>
            <li className="flex items-start justify-center gap-[clamp(0.75rem,2.24vw,43px)] text-left lg:justify-start">
              <PsdBox
                x={80}
                y={6675 - TOP}
                w={85}
                h={107}
                className="max-xl:h-[45px] max-xl:w-[36px] shrink-0"
              >
                <img src="/psd/empanel-ngo.png" alt="" className="block h-full w-full object-contain" />
              </PsdBox>
              <div>
                <PsdText
                  as="h3"
                  x={213}
                  y={6687 - TOP}
                  w={802.84}
                  className="text-empanel text-[#2e3c4e]"
                >
                  5 State Governments
                </PsdText>
                <PsdText
                  as="p"
                  x={212}
                  y={6750 - TOP}
                  w={662.1}
                  className="mt-0.5 text-emsub text-[#2e3c4e] xl:mt-0"
                >
                  for specialized outreach and mobility solutions
                </PsdText>
              </div>
            </li>
          </ul>
        </div>

        <PsdBox
          x={1055}
          y={6182 - TOP}
          w={668}
          h={662}
          className="relative mx-auto aspect-square w-full max-w-[420px] lg:ml-auto lg:mr-0 xl:aspect-auto xl:max-w-none"
        >
          <img src="/psd/empanel-frames.png" alt="" className="absolute inset-0 h-full w-full object-fill" />
          {LOGOS.map((logo) => (
            <span
              key={logo.src}
              className="absolute overflow-hidden"
              style={{
                left: `${(logo.left / 668) * 100}%`,
                top: `${(logo.top / 662) * 100}%`,
                width: `${(logo.width / 668) * 100}%`,
                height: `${(logo.height / 662) * 100}%`
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="absolute max-w-none"
                style={{
                  width: `${100 / logo.crop.w}%`,
                  height: `${100 / logo.crop.h}%`,
                  left: `${(-logo.crop.x / logo.crop.w) * 100}%`,
                  top: `${(-logo.crop.y / logo.crop.h) * 100}%`
                }}
              />
            </span>
          ))}
        </PsdBox>
      </div>
    </PsdStage>
  )
}
