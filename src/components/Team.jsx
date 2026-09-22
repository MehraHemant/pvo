import Container from './Container'
import { PsdBox, PsdStage, PsdText, psdLen } from './Psd'

/**
 * Team section layout — measured from public/psd/team-section.png (1920×822).
 * (.psd-data/geometry.json not present in repo.)
 *
 * Native PSD slice: 822px tall, CEO + 2×2 member cards.
 * Stage height extended to 986px so eight members fit in a 2×4 grid at the same
 * card size (442×122, 31px column gap, 16px row gap, grid origin y=450).
 */
const PSD_TEAM_H = 822
const STAGE_H = 986

const LEFT = { x: 92, y: 40, w: 790, h: 740 }
const CEO = { x: 913, y: 40, w: 914, h: 393 }

const MEMBER_W = 442
const MEMBER_H = 122
const MEMBER_GAP_Y = 16
const MEMBER_Y0 = 450
const MEMBER_COL_X = [913, 1386]

function memberBox(index) {
  const row = Math.floor(index / 2)
  const col = index % 2
  return {
    x: MEMBER_COL_X[col],
    y: MEMBER_Y0 + row * (MEMBER_H + MEMBER_GAP_Y),
    w: MEMBER_W,
    h: MEMBER_H
  }
}

const TRAITS = [
  {
    icon: '/psd/team-icon-leadership.png',
    width: 58,
    height: 58,
    title: 'VISIONARY LEADERSHIP',
    text: 'Strategic thinkers with a people-first approach'
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
    role: 'Sr.Manager Tender & Goverment Project',
    image: '/Team Images/Anshu.jpg',
    bio: 'Aarti manages tenders and government projects with precision and expertise. She ensures smooth execution, compliance, and timely delivery.'
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
    role: 'Operations & Project Coordination',
    image: '/Team Images/Anuj.jpg',
    bio: 'Anuj keeps field activations and client deliverables aligned—from planning through on-ground execution—with clarity and accountability.'
  },
  {
    name: 'Ashwani',
    role: 'Senior Accounts & Client Relations',
    image: '/Team Images/Ashwani.png',
    bio: 'Ashwani builds trusted partnerships with government and political clients, ensuring campaigns stay on brief, on budget, and on schedule.'
  },
  {
    name: 'Tanishka',
    role: 'Creative Strategy & Design',
    image: '/Team Images/Tanishka.png',
    bio: 'Tanishka shapes campaign narratives and visual identity so every touchpoint—from print to digital—lands with impact and consistency.'
  },
  {
    name: 'Anshu',
    role: 'Government Liaison & Compliance',
    image: '/Team Images/Anshu.jpg',
    bio: 'Anshu navigates tender processes and regulatory requirements, helping teams move faster while staying fully compliant.'
  }
]

function TeamDecor() {
  return (
    <>
      <PsdBox
        x={0}
        y={586}
        w={73}
        h={236}
        className="pointer-events-none z-0 hidden xl:block"
      >
        <img
          src="/psd/team-ring-left.png"
          alt=""
          aria-hidden="true"
          className="block h-full w-full max-w-none object-contain"
        />
      </PsdBox>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 hidden rounded-full border-[#f5f8fd] bg-transparent xl:block"
        style={{
          left: psdLen(1020),
          top: psdLen(120),
          width: psdLen(780),
          height: psdLen(780),
          borderWidth: psdLen(28)
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute z-0 hidden rounded-full border-pvo-blue bg-transparent xl:block"
        style={{
          left: psdLen(-72),
          top: psdLen(620),
          width: psdLen(210),
          height: psdLen(210),
          borderWidth: psdLen(14)
        }}
      />
    </>
  )
}

function TeamMemberCard({ member, box }) {
  return (
    <PsdBox
      as="article"
      {...box}
      className="flex flex-col gap-3 overflow-hidden rounded-card bg-white p-3 shadow-pvo-sm sm:flex-row sm:items-stretch sm:gap-4 sm:p-4 xl:gap-[calc(14*var(--u))] xl:p-[calc(14*var(--u))]"
      role="listitem"
    >
      <div className="w-full shrink-0 overflow-hidden rounded-photo sm:w-[clamp(84px,7vw,126px)] xl:w-[calc(106*var(--u))]">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          width={106}
          height={106}
          className="block aspect-square h-48 w-full object-cover sm:h-full sm:min-h-[clamp(100px,8vw,148px)] xl:aspect-auto xl:h-full xl:min-h-0"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center pr-0.5 xl:pr-[calc(4*var(--u))]">
        <PsdText
          as="h3"
          size={29.17}
          weight={700}
          className="font-display leading-tight text-pvo-navy"
        >
          {member.name}
        </PsdText>
        <PsdText as="span" size={25} weight={500} className="mt-[calc(2*var(--u))] block leading-snug text-pvo-blue">
          {member.role}
        </PsdText>
        <span
          className="mt-1.5 block h-0.5 w-6 bg-pvo-blue xl:mt-[calc(6*var(--u))] xl:h-[calc(2*var(--u))] xl:w-[calc(24*var(--u))]"
          aria-hidden="true"
        />
        <PsdText
          as="p"
          size={22.93}
          weight={300}
          leading={1.28}
          className="mt-2 line-clamp-3 text-pvo-text-light xl:mt-[calc(8*var(--u))]"
        >
          {member.bio}
        </PsdText>
      </div>
    </PsdBox>
  )
}

function TeamCeoCard() {
  return (
    <PsdBox
      as="article"
      {...CEO}
      className="relative mb-4 flex flex-col gap-3 overflow-hidden rounded-card bg-pvo-navy-deep p-3 shadow-pvo-sm sm:flex-row sm:items-stretch sm:gap-4 sm:p-4 md:mb-5 xl:mb-0 xl:gap-[calc(18*var(--u))] xl:p-[calc(18*var(--u))]"
    >
      <img
        src="/psd/team-ring-ceo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0 object-contain xl:right-[calc(-8*var(--u))] xl:top-[calc(-8*var(--u))] xl:h-[calc(89*var(--u))] xl:w-[calc(94*var(--u))]"
      />
      <div className="relative z-10 w-full shrink-0 self-stretch overflow-hidden rounded-photo sm:w-32 md:w-40 xl:w-[calc(176*var(--u))]">
        <img
          src="/Team Images/ujjwal.jpg"
          alt="Ujjawal Singh, Chief Executive Officer"
          className="block h-48 w-full object-cover sm:h-full sm:min-h-28 xl:h-full xl:min-h-0"
        />
      </div>
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center pr-1 pt-0 xl:pr-[calc(8*var(--u))]">
        <PsdText as="span" size={25} weight={500} className="block uppercase text-white/90">
          CEO
        </PsdText>
        <PsdText
          as="h3"
          size={45.85}
          weight={700}
          className="mt-[calc(4*var(--u))] font-display leading-tight text-white"
        >
          Ujjawal Singh
        </PsdText>
        <PsdText as="span" size={25} weight={500} className="mt-[calc(4*var(--u))] block leading-snug text-pvo-ceo-accent">
          Engineer. MBA. Visionary Leader.
        </PsdText>
        <PsdText
          as="p"
          size={22.93}
          weight={300}
          leading={1.28}
          className="mt-[calc(14*var(--u))] text-white/95 xl:max-w-none"
        >
          By day, Ujjawal is a passionate marketing professional, steering our strategic acumen and a relentless
          drive for success. With a sharp engineering mind and a robust business background, he brings a unique blend
          of technical expertise and managerial prowess to the table.
        </PsdText>
      </div>
    </PsdBox>
  )
}

function TeamLeftColumn() {
  return (
    <PsdBox {...LEFT} className="relative z-10 flex min-w-0 flex-col items-start pt-2 md:pt-5 xl:pt-0">
      <PsdText
        as="span"
        x={135}
        y={104}
        size={37.5}
        weight={600}
        className="mb-2 block font-display uppercase tracking-wide text-pvo-blue sm:text-sm xl:mb-0 xl:text-lead"
      >
        PEOPLE. PURPOSE. PERFORMANCE
      </PsdText>
      <PsdText
        as="h2"
        id="team-heading"
        x={135}
        y={150}
        w={720}
        className="font-display text-team uppercase text-pvo-navy xl:mb-0"
      >
        TEAM &amp;
        <br />
        MANAGEMENT
      </PsdText>
      <PsdBox
        x={135}
        y={268}
        w={48}
        h={6}
        className="mb-4 mt-3 block rounded-sm bg-pvo-blue md:mb-5 md:mt-4 xl:mb-0 xl:mt-0"
        aria-hidden="true"
      />
      <PsdText
        as="p"
        x={135}
        y={290}
        w={760}
        className="mb-4 text-copy text-pvo-text md:mb-6 xl:mb-0 xl:max-w-none"
      >
        Our strength lies in our people. The People Verdict Organization is led by a core team of passionate
        professionals and domain experts:
      </PsdText>
      <PsdBox
        as="a"
        href="#team"
        x={135}
        y={390}
        className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-pvo-blue-dark py-2.5 pl-6 pr-1.5 text-lead font-medium leading-tight text-white transition duration-300 hover:bg-[#046fca] hover:shadow-pvo-md xl:gap-[calc(12*var(--u))] xl:py-[calc(10*var(--u))] xl:pl-[calc(28*var(--u))] xl:pr-[calc(6*var(--u))]"
      >
        Meet Our Team
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-pvo-navy xl:h-[calc(40*var(--u))] xl:w-[calc(40*var(--u))]"
          aria-hidden="true"
        >
          <svg
            className="h-3/5 w-3/5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12h15M13 6l6 6-6 6" />
          </svg>
        </span>
      </PsdBox>

      <PsdBox
        x={92}
        y={671}
        w={790}
        h={140}
        className="mt-auto grid w-full grid-cols-1 gap-6 border-t border-pvo-team-line pt-8 md:grid-cols-3 md:gap-0 md:border-t-0 md:pt-12 xl:mt-0 xl:border-t xl:pt-[calc(18*var(--u))]"
      >
        {TRAITS.map((trait) => (
          <div
            key={trait.title}
            className="border-t border-pvo-team-line px-2 pb-0 pt-6 text-center first:border-t-0 first:pt-0 md:border-l md:border-t-0 md:px-3 md:pt-0 md:first:border-l-0 xl:px-[calc(18*var(--u))]"
          >
            <span
              className="mx-auto mb-3 flex items-end justify-center md:mb-4 xl:mb-[calc(14*var(--u))]"
              style={{ height: psdLen(58) }}
            >
              <img
                src={trait.icon}
                alt=""
                className="object-contain"
                style={{ width: psdLen(trait.width), height: psdLen(trait.height) }}
                decoding="async"
              />
            </span>
            <PsdText
              as="h3"
              size={25}
              weight={700}
              className="mb-2 font-display uppercase leading-snug text-pvo-navy xl:mb-[calc(8*var(--u))]"
            >
              {trait.title}
            </PsdText>
            <PsdText as="p" size={22.93} weight={300} leading={1.28} className="mx-auto max-w-[14rem] text-pvo-text-light md:max-w-none">
              {trait.text}
            </PsdText>
          </div>
        ))}
      </PsdBox>
    </PsdBox>
  )
}

export default function Team() {
  return (
    <PsdStage
      id="team"
      h={STAGE_H}
      data-psd-team-height={PSD_TEAM_H}
      className="relative w-full overflow-hidden bg-team-wash py-16 md:py-24 xl:py-0"
      aria-labelledby="team-heading"
    >
      <TeamDecor />

      <Container
        inset="tight"
        className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 xl:contents xl:max-w-none xl:gap-0"
      >
        <TeamLeftColumn />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:contents" role="list" aria-label="Team members">
          <TeamCeoCard />
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} box={memberBox(index)} />
          ))}
        </div>
      </Container>
    </PsdStage>
  )
}
