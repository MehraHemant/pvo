import Container from './Container.jsx'

export default function Empanelments() {
  return (
    <section className="section-y relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -right-12 -top-16 size-32 rounded-full bg-pvo-mint md:-right-8 md:-top-10 md:size-40 xl:-right-8 xl:-top-10 xl:size-52"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 top-5 size-20 rounded-full bg-pvo-teal-soft md:top-8 md:size-24 xl:right-0 xl:top-16 xl:size-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-1 -bottom-6 size-12 rounded-full bg-pvo-teal-mid md:-bottom-4 md:size-16 xl:-bottom-2 xl:size-24"
        aria-hidden="true"
      />

      <Container className="grid items-center justify-items-center gap-6 text-center md:gap-10 lg:grid-cols-2 lg:justify-items-stretch lg:text-left xl:gap-14">
        <div>
          <h2 className="mb-4 text-center text-section-title uppercase text-pvo-slate md:mb-6 lg:text-left xl:mb-7">
            EMPANELMENTS
          </h2>
          <p className="mb-5 max-w-none text-section-body text-pvo-text-light md:mb-7 lg:max-w-prose-sm xl:mb-8">
            These empanelments endorse our credibility, quality of service, and national capability to deliver high-impact
          </p>
          <ul className="grid gap-4 md:gap-5 xl:gap-6">
            <li className="flex items-start justify-center gap-3 text-left md:gap-4 lg:justify-start xl:gap-5">
              <svg
                className="size-8 shrink-0 text-pvo-empanel-icon md:size-10 xl:size-trait"
                viewBox="0 0 53 53"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M26.5 2.5L30.8 15.8H44.5L34.2 23.5L38.5 37L26.5 30.5L14.5 37L18.8 23.5L8.5 15.8H22.2L26.5 2.5Z" />
              </svg>
              <h3 className="max-w-none text-section-lead leading-snug text-pvo-slate lg:max-w-xs">
                Directorate of Advertising and Visual Publicity (DAVP)
              </h3>
            </li>
            <li className="flex items-start justify-center gap-3 text-left md:gap-4 lg:justify-start xl:gap-5">
              <svg
                className="size-8 shrink-0 text-pvo-empanel-icon md:size-10 xl:size-trait"
                viewBox="0 0 53 53"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M26.5 2.5C13.3 2.5 2.5 13.3 2.5 26.5S13.3 50.5 26.5 50.5 50.5 39.7 50.5 26.5 39.7 2.5 26.5 2.5ZM26.5 47C15.2 47 6 37.8 6 26.5S15.2 6 26.5 6 37 15.2 37 26.5 27.8 47 26.5 47ZM26.5 10.5C17.7 10.5 10.5 17.7 10.5 26.5S17.7 42.5 26.5 42.5 42.5 35.3 42.5 26.5 35.3 10.5 26.5 10.5Z" />
                <path d="M26.5 14C20.5 14 16 18.5 16 24.5S20.5 35 26.5 35 37 30.5 37 24.5 31.5 14 26.5 14ZM26.5 32C23.5 32 21 29.5 21 26.5S23.5 21 26.5 21 32 23.5 32 26.5 29.5 32 26.5 32Z" />
              </svg>
              <div>
                <h3 className="max-w-none text-section-lead leading-snug text-pvo-slate lg:max-w-xs">
                  5 State Governments
                </h3>
                <p className="mt-0.5 max-w-none text-section-body leading-normal text-pvo-text-light lg:max-w-sm">
                  for specialized outreach and mobility solutions
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3 md:max-w-md lg:ml-auto lg:mr-0 xl:max-w-empanel xl:gap-3">
          <span className="border-pvo-navy-mid bg-pvo-navy-mid border-12 rounded-tl-full rounded-tr-full rounded-bl-full">
            <div className="bg-white w-full h-full rounded-full">
            <img src="/Empanelments/Logo1.png" alt="DAVP — Directorate of Advertising and Visual Publicity" className="max-h-full max-w-full object-contain" />
            </div>
          </span>
          <span className="border-pvo-blue-soft bg-pvo-blue-soft border-12 rounded-tl-full rounded-tr-full rounded-br-full">
          <div className="bg-white w-full h-full rounded-full">
            <img src="/Empanelments/Logo2.png" alt="Government of Bihar" className="max-h-full max-w-full object-contain" />
          </div>
          </span>
          <span className="border-pvo-blue-soft bg-pvo-blue-soft border-12 rounded-tl-full rounded-bl-full rounded-br-full">
          <div className="bg-white w-full h-full rounded-full">
            <img src="/Empanelments/Logo3.png" alt="Government of Goa" className="max-h-full max-w-full object-contain" />
          </div>
          </span>
          <span className="border-pvo-navy-mid bg-pvo-navy-mid border-12 rounded-br-full rounded-tr-full rounded-bl-full">
          <div className="bg-white w-full h-full rounded-full">
            <img src="/Empanelments/Logo4.png" alt="Government of Assam" className="max-h-full max-w-full object-contain" />
            </div>
          </span>
        </div>
      </Container>
    </section>
  )
}
