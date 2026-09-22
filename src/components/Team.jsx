import Container from './Container'
import { PsdBox, PsdStage, psdLen } from './Psd'

const TRAITS = [
  {
    icon: '/psd/team-icon-leadership.png',
    width: 58,
    height: 58,
    title: 'VISIONARY LEADERSHIP',
    text: 'Strategic thinkers with a people - first approach'
  },
  {
    icon: '/psd/team-icon-culture.png',
    width: 84,
    height: 51,
    title: 'COLLABORATIVE CULTURE',
    text: 'Open communication, shared goals, stronger impact'
  },
  {
    icon: '/psd/team-icon-results.png',
    width: 57,
    height: 54,
    title: 'RESULTS THAT MATTER',
    text: 'Data- informed execution for public good'
  }
]

export default function Team() {
  return (
    <PsdStage
      id="team"
      h={821}
      className="relative w-full overflow-hidden bg-team-wash py-16 md:py-24 xl:py-0"
    >
      <PsdBox x={0} y={0} w={1920} h={822} className="pointer-events-none hidden xl:block">
        <img
          src="/psd/team-section.png"
          alt=""
          aria-hidden="true"
          className="block h-full w-full max-w-none object-cover object-top"
        />
      </PsdBox>

      {/* Same card tree as the mobile layout. At xl it stays in the accessibility
          tree (the bitmap has no live text) but is clipped out of view. */}
      <div className="xl:sr-only">
        <Container inset="tight" className="relative z-10 grid grid-cols-1 items-stretch gap-8 xl:grid-cols-2 xl:gap-10">
          <div className="flex flex-col items-start pt-2 md:pt-5">
            <span className="mb-2 block font-display text-lead uppercase tracking-wide text-pvo-blue">
              PEOPLE. PURPOSE. PERFORMANCE
            </span>
            <h2 className="font-display text-team uppercase text-pvo-navy">
              TEAM &amp;
              <br />
              MANAGEMENT
            </h2>
            <span className="mb-4 mt-3 block h-1 w-10 rounded-sm bg-pvo-blue md:mb-5 md:mt-4 md:w-12" />
            <p className="mb-4 max-w-none text-copy text-pvo-text md:mb-6 xl:max-w-lg">
              Our strength lies in our people. The People Verdict Organization is led by a core team of
              passionate professionals and domain experts:
            </p>
            <a
              href="#team"
              className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-pvo-blue-dark py-2.5 pl-6 pr-1.5 text-lead font-medium leading-tight text-white"
            >
              Meet Our Team
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-pvo-navy" aria-hidden="true">
                <svg className="h-3/5 w-3/5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>

            <div className="mt-auto grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-3 md:gap-0 md:pt-12">
              {TRAITS.map((trait) => (
                <div
                  key={trait.title}
                  className="border-t border-pvo-team-line px-1 pb-0 pt-6 text-center first:border-t-0 first:pt-0 md:border-l md:border-t-0 md:px-2 md:pt-0 md:first:border-l-0"
                >
                  <span className="mx-auto mb-3 flex items-end justify-center md:mb-4" style={{ height: psdLen(58) }}>
                    <img
                      src={trait.icon}
                      alt=""
                      className="object-contain"
                      style={{ width: psdLen(trait.width), height: psdLen(trait.height) }}
                    />
                  </span>
                  <h3 className="mb-2 font-display text-menu font-bold uppercase leading-tight text-pvo-navy">
                    {trait.title}
                  </h3>
                  <p className="text-caption leading-normal text-pvo-text-light">{trait.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <article className="relative mb-4 flex flex-col gap-3 overflow-hidden rounded-card bg-pvo-navy-deep p-3 shadow-pvo-sm sm:flex-row md:mb-5 md:gap-4 md:p-4">
              <img
                src="/psd/team-ring-ceo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute z-0 object-contain"
                style={{
                  right: psdLen(-8),
                  top: psdLen(-8),
                  width: psdLen(94),
                  height: psdLen(89)
                }}
              />
              <div className="w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-32 md:w-40 xl:w-52">
                <img
                  src="/Team Images/ujjwal.jpg"
                  alt="Ujjawal Singh, Chief Executive Officer"
                  className="block h-48 w-full object-cover sm:h-full sm:min-h-28"
                />
              </div>
              <div className="relative z-10 min-w-0 pr-1 pt-1">
                <span className="block text-menu font-medium leading-tight text-white">CEO</span>
                <h3 className="mt-0.5 font-display text-figure font-bold leading-tight text-white">Ujjawal Singh</h3>
                <span className="mt-0.5 block text-menu font-medium leading-tight text-pvo-ceo-accent">
                  Engineer. MBA. Visionary Leader.
                </span>
                <p className="mt-3 max-w-lg text-caption leading-normal text-white">
                  By day, Ujjawal is a passionate marketing professional, steering our strategic acumen and a
                  relentless drive for success. With a sharp engineering mind and a robust business background,
                  he brings a unique blend of technical expertise and managerial prowess to the table.
                </p>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
              <article className="flex flex-col gap-3 rounded-card bg-white p-3 shadow-pvo-sm sm:flex-row md:gap-4 md:p-4">
                <div className="w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-24 md:w-28">
                  <img
                    src="/Team Images/Abhishek Sir.jpeg"
                    alt="Abhishek, Chief Operating Officer"
                    className="block h-48 w-full object-cover sm:h-full sm:min-h-28"
                  />
                </div>
                <div className="relative z-10 min-w-0 pr-1">
                  <h3 className="mt-0.5 font-display text-lead font-bold leading-tight text-pvo-navy">Abhishek</h3>
                  <span className="mt-0.5 block text-caption font-medium leading-tight text-pvo-blue">
                    Chief Operating Officer
                  </span>
                  <span className="mt-1 block h-0.5 w-6 bg-pvo-blue" />
                  <p className="mt-3 max-w-lg text-caption leading-normal text-pvo-text-light">
                    16 years of experience in impactful rural government campaigns.
                    Empowering teams and driving continuous improvement.
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-3 rounded-card bg-white p-3 shadow-pvo-sm sm:flex-row md:gap-4 md:p-4">
                <div className="w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-24 md:w-28">
                  <img
                    src="/Team Images/Anshu.jpg"
                    alt="Aarti, Sr. Manager Tender &amp; Government Project"
                    className="block h-48 w-full object-cover sm:h-full sm:min-h-28"
                  />
                </div>
                <div className="relative z-10 min-w-0 pr-1">
                  <h3 className="mt-0.5 font-display text-lead font-bold leading-tight text-pvo-navy">Aarti</h3>
                  <span className="mt-0.5 block text-caption font-medium leading-tight text-pvo-blue">
                    Sr.Manager Tender &amp; Goverment Project
                  </span>
                  <span className="mt-1 block h-0.5 w-6 bg-pvo-blue" />
                  <p className="mt-3 max-w-lg text-caption leading-normal text-pvo-text-light">
                    Aarti manages tenders and government projects with precision and expertise.
                    She ensures smooth execution, compliance, and timely delivery.
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-3 rounded-card bg-white p-3 shadow-pvo-sm sm:flex-row md:gap-4 md:p-4">
                <div className="w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-24 md:w-28">
                  <img
                    src="/Team Images/ishu.jpg"
                    alt="Ishwar, Business Planning &amp; Development"
                    className="block h-48 w-full object-cover sm:h-full sm:min-h-28"
                  />
                </div>
                <div className="relative z-10 min-w-0 pr-1">
                  <h3 className="mt-0.5 font-display text-lead font-bold leading-tight text-pvo-navy">Ishwar</h3>
                  <span className="mt-0.5 block text-caption font-medium leading-tight text-pvo-blue">
                    Business Planning &amp; Development
                  </span>
                  <span className="mt-1 block h-0.5 w-6 bg-pvo-blue" />
                  <p className="mt-3 max-w-lg text-caption leading-normal text-pvo-text-light">
                    Passionate about travel, nature, and experiential marketing.
                    She brings creativity and fresh energy to every project.
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-3 rounded-card bg-white p-3 shadow-pvo-sm sm:flex-row md:gap-4 md:p-4">
                <div className="w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-24 md:w-28">
                  <img
                    src="/Team Images/Avinash.jpg"
                    alt="Avinash, Social Media Manager"
                    className="block h-48 w-full object-cover sm:h-full sm:min-h-28"
                  />
                </div>
                <div className="relative z-10 min-w-0 pr-1">
                  <h3 className="mt-0.5 font-display text-lead font-bold leading-tight text-pvo-navy">Avinash</h3>
                  <span className="mt-0.5 block text-caption font-medium leading-tight text-pvo-blue">
                    Social Media Manager
                  </span>
                  <span className="mt-1 block h-0.5 w-6 bg-pvo-blue" />
                  <p className="mt-3 max-w-lg text-caption leading-normal text-pvo-text-light">
                    Energetic and dedicated, Avinash drives social media campaigns with fresh ideas.
                    From Mission Pataliputra to Viksit Bharat, he consistently delivers strong results.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </div>
    </PsdStage>
  )
}
