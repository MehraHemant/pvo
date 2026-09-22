import { PsdBox, PsdStage, PsdText } from './Psd'

const TOP = 5157

const COLUMNS = [
  {
    key: 'mission',
    icon: '/Mission -Vission - Our Values/Mission.png',
    mini: '/Mission -Vission - Our Values/Mission 1.png',
    line: 'bg-pvo-blue',
    title: (
      <>
        OUR <span className="text-pvo-blue">MISSION</span>
      </>
    ),
    sr: 'Our mission',
    box: { x: 158.41, y: 5801 - TOP, w: 469 },
    text: (
      <>
        To become <strong>India’s top outreach agency</strong>, known for delivering{' '}
        <strong>innovative concepts</strong> with the <strong>highest standards of integrity.</strong>
      </>
    )
  },
  {
    key: 'vision',
    icon: '/Mission -Vission - Our Values/Vision.png',
    mini: '/Mission -Vission - Our Values/Vision 1.png',
    line: 'bg-pvo-red',
    title: (
      <>
        OUR <span className="text-pvo-red">VISION</span>
      </>
    ),
    sr: 'Our vision',
    box: { x: 725.41, y: 5801 - TOP, w: 469 },
    text: (
      <>
        To establish <strong>People Verdict Organization </strong>as the <strong>preferred agency</strong> for
        all <strong>Central and State Government departments</strong>, offering reliable, creative, and
        result-driven outreach solutions.
      </>
    )
  },
  {
    key: 'values',
    icon: '/Mission -Vission - Our Values/Values.png',
    mini: '/Mission -Vission - Our Values/Values 1.png',
    line: 'bg-pvo-slate',
    title: (
      <>
        OUR <span>VALUES</span>
      </>
    ),
    sr: 'Our values',
    box: { x: 1310.41, y: 5801 - TOP, w: 469 },
    text: (
      <>
        To establish <strong>People Verdict Organization </strong>as the <strong>preferred agency</strong> for
        all <strong>Central and State Government departments</strong>, offering reliable, creative, and
        result-driven outreach solutions.
      </>
    )
  }
]

export default function MissionVision() {
  return (
    <PsdStage
      h={800}
      data-psd="mission"
      className="relative isolate w-full overflow-hidden bg-white py-16 md:py-24 xl:py-0"
    >
      <img
        src="/mvv-section.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-bottom opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/70" aria-hidden="true" />

      <PsdBox x={252} y={5234 - TOP} w={1414} h={532} className="pointer-events-none z-10 hidden xl:block">
        <img src="/psd/mvv-titles.png" alt="" aria-hidden="true" className="block h-full w-full max-w-none object-fill" />
      </PsdBox>

      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 px-[clamp(1.25rem,4.43vw,85px)] lg:max-w-none lg:grid-cols-3 lg:gap-0 xl:max-w-none xl:px-0">
        {COLUMNS.map((col) => (
          <article
            key={col.key}
            className="flex flex-col items-center border-t border-pvo-mvv-line px-3 pb-0 pt-8 text-center first:border-t-0 first:pt-0 md:px-5 lg:border-l lg:border-t-0 lg:pt-0 lg:first:border-l-0 xl:border-0 xl:p-0"
          >
            <span className="mb-4 block h-16 w-16 md:mb-6 md:h-24 md:w-24 xl:hidden">
              <img src={col.icon} alt="" className="block h-full w-full object-contain" />
            </span>
            <h3 className="font-display text-mvvtitle uppercase text-pvo-slate xl:sr-only">{col.title}</h3>
            <span className={`relative my-4 block h-px w-24 md:my-6 md:w-32 xl:hidden ${col.line}`}>
              <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inherit" />
            </span>
            <span className="mb-3 block h-8 w-8 md:mb-5 md:h-12 md:w-12 xl:hidden">
              <img src={col.mini} alt="" className="block h-full w-full object-contain" />
            </span>
            <PsdText
              as="p"
              x={col.box.x}
              y={col.box.y}
              w={col.box.w}
              className="max-w-sm text-center text-mvv text-[#2e3c4e] xl:max-w-none [&_strong]:font-semibold"
            >
              {col.text}
            </PsdText>
          </article>
        ))}
      </div>
      <p className="sr-only">
        {COLUMNS.map((col) => (
          <span key={col.key}>{col.sr}. </span>
        ))}
      </p>
    </PsdStage>
  )
}
