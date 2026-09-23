const COLUMNS = [
  {
    key: 'mission',
    icon: '/Mission -Vission - Our Values/Mission.png',
    mini: '/Mission -Vission - Our Values/Mission 1.png',
    line: 'bg-pvo-blue',
    dot: 'bg-pvo-blue',
    title: (
      <>
        OUR <span className="text-pvo-blue">MISSION</span>
      </>
    ),
    text: (
      <>
        To become <strong>India&rsquo;s top outreach agency,</strong> known for delivering{' '}
        <strong>innovative concepts</strong> with the <strong>highest standards of integrity.</strong>
      </>
    )
  },
  {
    key: 'vision',
    icon: '/Mission -Vission - Our Values/Vision.png',
    mini: '/Mission -Vission - Our Values/Vision 1.png',
    line: 'bg-pvo-red',
    dot: 'bg-pvo-red',
    title: (
      <>
        OUR <span className="text-pvo-red">VISION</span>
      </>
    ),
    text: (
      <>
        To establish <strong>People Verdict Organization</strong> as the <strong>preferred agency</strong>
        for all <strong>Central and State Government departments,</strong> offering reliable, creative,
        and result-driven outreach
      </>
    )
  },
  {
    key: 'values',
    icon: '/Mission -Vission - Our Values/Values.png',
    mini: '/Mission -Vission - Our Values/Values 1.png',
    line: 'bg-pvo-slate',
    dot: 'bg-pvo-slate',
    title: (
      <>
        OUR <span className="text-pvo-slate">VALUES</span>
      </>
    ),
    text: (
      <>
        To establish <strong>People Verdict Organization</strong> as the <strong>preferred agency</strong>
        for all <strong>Central and State Government departments,</strong> offering reliable, creative,
        and result-driven outreach
      </>
    )
  }
]

import Container from './Container.jsx'

export default function MissionVision() {
  return (
    <section
      className="mvv-section section-y relative w-full overflow-hidden"
      aria-labelledby="mvv-heading"
    >
      <Container>
        <h2 id="mvv-heading" className="sr-only">Mission, Vision, Values</h2>
        <div className="mx-auto grid max-w-prose-md grid-cols-1 gap-7 md:gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-0 xl:gap-10">
          {COLUMNS.map((col, index) => (
            <article
              key={col.key}
              className={`flex flex-col items-center border-t border-pvo-border px-3 pt-7 text-center md:px-4 md:pt-8 xl:px-5 xl:pt-10 lg:border-l lg:border-t-0 lg:pt-0 lg:first:border-l-0`}
            >
              <span className="mb-4 block size-16 md:mb-5 md:size-20 xl:mb-6 xl:size-28">
                <img src={col.icon} alt="" className="h-full w-full object-contain" />
              </span>
              <h3 className="text-mvv-head uppercase text-pvo-slate">
                {col.title}
              </h3>
              <span className={`relative my-4 block h-px w-24 md:my-5 md:w-28 xl:my-6 xl:w-32 ${col.line}`}>
                <span className={`absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${col.dot}`} />
              </span>
              <span className="mb-3 block size-8 opacity-80 md:mb-4 md:size-10 xl:mb-5 xl:size-14">
                <img src={col.mini} alt="" className="h-full w-full object-contain" />
              </span>
              <p className="prose-strong max-w-xl text-section-sm leading-relaxed text-pvo-text-light">
                {col.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
