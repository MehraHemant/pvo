import { useCallback, useEffect, useState } from 'react'
import Container from './Container.jsx'

const MEMBERS_PER_PAGE = 4
const ROTATION_INTERVAL_MS = 3000
const FADE_DURATION_MS = 500
const TRAITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-full w-full">
        <circle cx="11" cy="13" r="8" />
        <circle cx="11" cy="13" r="4.5" />
        <circle cx="11" cy="13" r="1.4" fill="currentColor" stroke="none" />
        <path d="M11 13 20.5 3.5M17 3.5h3.5V7" />
      </svg>
    ),
    title: 'VISIONARY LEADERSHIP',
    text: 'Strategic thinkers with a people-first approach'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M12 11.2a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2zm-6.2.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2zm12.4 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2zM12 12.6c-2.6 0-5.1 1.3-5.1 3.1V19h10.2v-3.3c0-1.8-2.5-3.1-5.1-3.1zM4.6 13.1C2.6 13.3.9 14.3.9 15.7V19h4.5v-3.3c0-.9.4-1.7 1-2.4a7 7 0 0 0-1.8-.2zm14.8 0c-.6 0-1.2.1-1.8.2.6.7 1 1.5 1 2.4V19h4.5v-3.3c0-1.4-1.7-2.4-3.7-2.6z" />
      </svg>
    ),
    title: 'COLLABORATIVE CULTURE',
    text: 'Open communication, shared goals, stronger impact'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6z" />
      </svg>
    ),
    title: 'RESULTS THAT MATTER',
    text: 'Data-informed execution for public good'
  }
]

const TEAM_MEMBERS = [
  {
    name: 'Abhishek',
    role: 'Chief Operating Officer',
    image: '/Team Images/Abhishek Sir.jpeg',
    bio: '16 years of experience in impactful rural government campaigns. Empowering teams and driving continuous improvement.'
  },
  {
    name: 'Aarti',
    role: 'Sr.Manager Tender & Government Project',
    image: '/Team Images/Anshu.jpg',
    bio: 'Aarti manages tenders, government projects with precision and expertise. She ensures execution, compliance, and timely delivery.'
  },
  {
    name: 'Ishwar',
    role: 'Business Planning & Development',
    image: '/Team Images/ishu.jpg',
    bio: 'Passionate about travel, nature, and experiential marketing. She brings creativity and fresh energy to every project.'
  },
  {
    name: 'Avinash',
    role: 'Social Media Manager',
    image: '/Team Images/Avinash.jpg',
    bio: 'Energetic and dedicated, Avinash drives social media campaigns with fresh ideas. From Mission Pataliputra to Viksit Bharat, he consistently delivers strong results.'
  },
  {
    name: 'Anuj',
    role: 'Project Coordinator',
    image: '/Team Images/Anuj.jpg',
    bio: 'Anuj keeps cross-functional projects on track with clear timelines, stakeholder alignment, and dependable follow-through.'
  },
  {
    name: 'Ashwani',
    role: 'Creative Director',
    image: '/Team Images/Ashwani.png',
    bio: 'Ashwani shapes campaign narratives and visual identity, blending insight with bold creative direction for public-facing work.'
  },
  {
    name: 'Tanishka',
    role: 'Client Relations Manager',
    image: '/Team Images/Tanishka.png',
    bio: 'Tanishka builds trusted client partnerships and ensures every engagement reflects our commitment to clarity and results.'
  },
  {
    name: 'Rohit',
    role: 'Analytics & Insights Lead',
    image: '/Team Images/ishu.jpg',
    bio: 'Rohit turns field and digital data into actionable insights that guide smarter outreach and measurable campaign outcomes.'
  }
]

const PAGE_COUNT = Math.ceil(TEAM_MEMBERS.length / MEMBERS_PER_PAGE)

function TeamMemberCard({ member }) {
  return (
    <article className="flex min-w-0 flex-col gap-3 p-2 shadow-sm bg-white rounded-lg sm:h-44 sm:flex-row sm:gap-3">
      <div className="relative mx-auto h-full w-full max-w-[10rem] shrink-0 overflow-hidden rounded-md sm:mx-0 sm:w-28 sm:max-h-none md:w-32 xl:rounded-photo">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col pr-0.5">
        <h3 className="shrink-0 text-sm font-bold leading-tight text-pvo-navy sm:text-base">
          {member.name}
        </h3>
        <span className="role-underline relative mt-0.5 block shrink-0 pb-1 text-xs md:text-sm font-medium leading-snug text-pvo-blue after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-5 after:bg-pvo-blue sm:after:w-6 md:after:w-7">
          {member.role}
        </span>
        <p className="mt-1 text-xs md:text-sm leading-snug text-pvo-text-light">
          {member.bio}
        </p>
      </div>
    </article>
  )
}

export default function Team() {
  const [pageIndex, setPageIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const activePageIndex = reduceMotion ? 0 : pageIndex
  const visibleMembers = TEAM_MEMBERS.slice(
    activePageIndex * MEMBERS_PER_PAGE,
    activePageIndex * MEMBERS_PER_PAGE + MEMBERS_PER_PAGE
  )

  const advancePage = useCallback(() => {
    setFadeIn(false)
    window.setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % PAGE_COUNT)
      setFadeIn(true)
    }, FADE_DURATION_MS)
  }, [])

  useEffect(() => {
    if (reduceMotion || PAGE_COUNT <= 1) return undefined

    const intervalId = window.setInterval(advancePage, ROTATION_INTERVAL_MS)
    return () => window.clearInterval(intervalId)
  }, [advancePage, reduceMotion])

  return (
    <section
      id="team"
      className="section-y relative w-full overflow-hidden bg-gradient-to-r from-white to-50% via-white to-gray-100"
      aria-labelledby="team-heading"
    >
      <span
        className="pointer-events-none absolute -bottom-28 left-1/6 z-0 hidden size-80 rounded-full border-4 border-pvo-ring-pale bg-transparent xl:block xl:-bottom-28 xl:size-96 xl:border-8"
        aria-hidden="true"
      ></span>
      <span
        className="pointer-events-none absolute -left-40 top-1/2 z-0 hidden size-28 rounded-full border-[28px] border-pvo-blue bg-transparent xl:block xl:size-56"
        aria-hidden="true"
      ></span>

      <Container className="team-layout">
        <div className="flex flex-col items-start py-20">
          <span className="mb-2 block text-sm font-medium uppercase leading-tight tracking-wide text-pvo-blue sm:text-base">
            PEOPLE. PURPOSE. PERFORMANCE
          </span>
          <h2
            id="team-heading"
            className="text-3xl font-black uppercase leading-none tracking-tight text-pvo-navy sm:text-4xl lg:text-6xl"
          >
            TEAM & MANAGEMENT
          </h2>
          <span className="mb-3 mt-3 block h-1 w-9 rounded-sm bg-pvo-blue md:mb-4 md:mt-4 md:w-11 xl:mb-5 xl:mt-4 xl:w-13" aria-hidden="true"></span>
          <p className="mb-4 max-w-none text-sm font-normal leading-loose text-pvo-text-light sm:text-base md:mb-6 lg:text-lg xl:mb-7 xl:max-w-prose-md">
            Our strength lies in our people. The People Verdict Organization is led by a core team of
            passionate professionals and domain experts:
          </p>
          <a
            href="#team"
            className="inline-flex items-center gap-3 rounded-2xl bg-pvo-blue-dark py-2 pl-5 pr-2 text-base font-bold leading-snug text-white transition duration-300 hover:bg-pvo-hover-blue hover:shadow-pvo-md sm:text-lg"
          >
            Meet Our Team
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-pvo-navy text-white" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-3/5">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>

          <div className="mt-auto grid w-full grid-cols-1 gap-6 pt-7 md:grid-cols-3 md:gap-0 md:pt-10 xl:pt-13">
            {TRAITS.map((trait) => (
              <div
                key={trait.title}
                className="border-t border-pvo-trait-border px-1 pt-6 text-center first:border-t-0 first:pt-0 md:border-l md:border-t-0 md:px-2 md:pt-0 md:first:border-l-0"
              >
                <span className="mx-auto mb-2.5 block size-8 text-pvo-blue md:mb-3 md:size-10 xl:size-trait">
                  {trait.icon}
                </span>
                <h3 className="mb-1 text-sm font-bold uppercase leading-snug tracking-tight text-pvo-navy sm:text-base">
                  {trait.title}
                </h3>
                <p className="text-xs font-medium leading-normal text-pvo-text-light sm:text-sm md:text-base">
                  {trait.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full min-h-0 min-w-0 flex-col py-20">
          <article className="relative mb-3 flex shrink-0 flex-col gap-3 overflow-hidden rounded-photo bg-pvo-navy-deep p-2.5 shadow-pvo-sm sm:flex-row md:mb-4 md:gap-4 md:rounded-card-md md:p-3 xl:mb-5 xl:rounded-card xl:gap-4 xl:p-4">
            <span
              className="pointer-events-none absolute -right-6 -top-6 size-20 rounded-full border-pvo-blue md:-right-8 md:-top-10 md:size-24 border-[20px] xl:-right-11 xl:-top-11 xl:size-30"
              aria-hidden="true"
            ></span>
            <div className="w-full shrink-0 self-stretch overflow-hidden rounded-md sm:w-28 md:w-36 xl:w-44 xl:rounded-photo">
              <img
                src="/Team Images/ujjwal.jpg"
                alt="Ujjawal Singh, Chief Executive Officer"
                className="h-50 w-full object-cover sm:h-full sm:min-h-24 md:min-h-32 xl:min-h-36"
              />
            </div>
            <div className="relative z-10 min-w-0 pr-1 pt-0.5">
              <span className="block text-sm font-medium leading-tight tracking-wide text-white/85 sm:text-base">
                CEO
              </span>
              <h3 className="mt-0.5 text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                Ujjawal Singh
              </h3>
              <span className="mt-0.5 block text-sm font-medium leading-snug tracking-wide text-pvo-ceo-accent sm:text-base">
                Engineer. MBA. Visionary Leader.
              </span>
              <p className="mt-2 max-w-prose-lg text-xs leading-normal text-white sm:text-sm md:text-base">
                By day, Ujjawal is a passionate marketing professional, steering our strategic acumen and a
                relentless drive for success. With a sharp engineering mind and a robust business background,
                he brings a unique blend of technical expertise and managerial prowess to the table.
              </p>
            </div>
          </article>

          <div
            className="team-rotator"
            aria-live={reduceMotion ? undefined : 'polite'}
          >
            <div
              className="grid min-w-0 grid-cols-1 gap-4 transition-opacity ease-in-out sm:grid-cols-2 sm:gap-6"
              style={{
                opacity: fadeIn ? 1 : 0,
                transitionDuration: `${FADE_DURATION_MS}ms`,
                pointerEvents: fadeIn ? 'auto' : 'none',
              }}
              aria-label={
                reduceMotion
                  ? 'Team members'
                  : `Team members, page ${activePageIndex + 1} of ${PAGE_COUNT}`
              }
            >
              {visibleMembers.map((member) => (
                <TeamMemberCard key={`${member.name}-${member.role}`} member={member} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
