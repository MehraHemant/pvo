import { PsdBox, PsdStage, PsdText } from './Psd'

const TOP = 921

const STATS = [
  { label: '2010', x: 275 - 160, y: 1685 - 1652, w: 191, h: 62 },
  { label: '15+', x: 894 - 160, y: 1686 - 1652, w: 133, h: 61 },
  { label: '3000+', x: 1416 - 160, y: 1685 - 1652, w: 236, h: 62 }
]

const COLUMNS = [
  {
    label: 'Founded In',
    labelBox: { x: 279, y: 1824 - TOP, w: 183, h: 30 },
    caption: ['Year of', 'establishment'],
    captionBox: { x: 268, y: 1890 - TOP, w: 206, h: 67 },
    icon: '/psd/intro-icon-1.png',
    iconBox: { x: 139, y: 2000 - TOP, w: 230, h: 243 },
    iconClass: 'max-xl:h-[102px] max-xl:w-[97px]'
  },
  {
    label: 'Years of Service',
    labelBox: { x: 823, y: 1824 - TOP, w: 274, h: 30 },
    caption: ['Impactful Service in Outreach and', 'Political Consulting'],
    captionBox: { x: 717, y: 1890 - TOP, w: 487, h: 73 },
    icon: '/psd/intro-icon-2.png',
    iconBox: { x: 892, y: 2030 - TOP, w: 166, h: 184 },
    iconClass: 'max-xl:h-[77px] max-xl:w-[70px]'
  },
  {
    label: 'On-Ground Campaign Days',
    labelBox: { x: 1307, y: 1824 - TOP, w: 453, h: 37 },
    caption: ['Extensive track record of', 'grassroots campaigning'],
    captionBox: { x: 1355, y: 1890 - TOP, w: 357, h: 73 },
    icon: '/psd/intro-icon-3.png',
    iconBox: { x: 1446, y: 2030 - TOP, w: 206, h: 183 },
    iconClass: 'max-xl:h-[77px] max-xl:w-[87px]'
  }
]

export default function Introduction() {
  return (
    <PsdStage
      h={1349}
      id="about"
      data-psd="introduction"
      className="relative w-full overflow-hidden bg-white pb-8 pt-[clamp(3.5rem,6.15vw,118px)] xl:pb-0 xl:pt-0"
    >
      <PsdBox
        x={-45}
        y={912 - TOP}
        w={368}
        h={111}
        className="pointer-events-none absolute z-0 max-xl:left-0 max-xl:top-0 max-xl:h-12 max-xl:w-36"
      >
        <img src="/psd/intro-squiggle.png" alt="" className="block h-full w-full max-w-none object-contain" />
      </PsdBox>
      <PsdBox
        x={1718}
        y={0}
        w={202}
        h={244}
        className="pointer-events-none absolute z-0 max-xl:right-0 max-xl:top-0 max-xl:h-16 max-xl:w-14"
      >
        <img src="/psd/deco-bubbles-right.png" alt="" className="block h-full w-full max-w-none object-contain" />
      </PsdBox>
      <PsdBox x={-1} y={2019 - TOP} w={645} h={252} className="pointer-events-none z-0 hidden xl:block">
        <img src="/psd/intro-glow.png" alt="" className="block h-full w-full max-w-none object-contain" />
      </PsdBox>

      <div className="px-[8.33vw] xl:px-0">
        <PsdText
          as="h2"
          x={658}
          y={1039 - TOP}
          w={604}
          h={62}
          className="mb-[clamp(1.5rem,4.06vw,78px)] text-center font-display text-title uppercase text-pvo-slate xl:mb-0 xl:text-left"
        >
          Introduction
        </PsdText>

        <PsdBox
          x={157}
          y={1179 - TOP}
          w={1605.75}
          className="mb-5 text-copy text-[#3b4853] xl:mb-0 [&_strong]:font-bold"
        >
          <p>
            Founded in 2010, <strong>People Verdict Organization</strong> is a premier Indian outreach and
            political consulting agency with over <span className="font-medium">15 years</span> of impactful
            service. With its roots deeply embedded in the ethos of democracy and public engagement, the
            organization was conceptualized with a unique idea—to introduce concepts that connect leaders
            directly with the people. This philosophy laid the foundation of our flagship brand,{' '}
            <strong>Janaadesh</strong>, whose tagline resonates with this mission: “Introducing Concepts that
            Connect.”
          </p>
          <p>&nbsp;</p>
          <p>
            Today, People Verdict Organization stands tall as one of India’s most trusted names in outreach and
            grassroots campaigning. With a track record of more than{' '}
            <strong>3000+ on-ground campaign days,</strong> we have solidified our position as the “
            <strong>Ground Champion of India.</strong>”
          </p>
        </PsdBox>

        <PsdBox
          x={160}
          y={1652 - TOP}
          w={1600}
          h={129}
          className="mx-auto mt-[clamp(1.5rem,3.9vw,75px)] grid w-full grid-cols-1 items-center rounded-none bg-stat-bar px-4 py-4 text-center md:h-[clamp(5rem,6.72vw,129px)] md:grid-cols-3 md:px-8 md:py-0 xl:mt-0 xl:px-0 xl:py-0"
        >
          {STATS.map((stat) => (
            <PsdText
              key={stat.label}
              x={stat.x}
              y={stat.y}
              w={stat.w}
              h={stat.h}
              className="whitespace-nowrap font-display text-statnum uppercase text-pvo-slate xl:text-left"
            >
              {stat.label}
            </PsdText>
          ))}
        </PsdBox>

        <div className="mx-auto mt-[clamp(1.25rem,2.24vw,43px)] grid max-w-md grid-cols-1 gap-8 md:max-w-none md:grid-cols-3 md:gap-7 xl:mt-0">
          {COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col items-center text-center">
              <PsdText
                {...col.labelBox}
                className="whitespace-nowrap text-lead text-pvo-slate xl:text-left"
              >
                {col.label}
              </PsdText>
              <PsdText
                {...col.captionBox}
                className="mt-1.5 max-xl:max-w-56 text-center text-caption text-pvo-slate xl:mt-0 xl:whitespace-nowrap"
              >
                {col.caption[0]}
                <br />
                {col.caption[1]}
              </PsdText>
              <PsdBox
                {...col.iconBox}
                className={`z-10 mt-4 ${col.iconClass} xl:mt-0`}
              >
                <img src={col.icon} alt="" className="block h-full w-full object-contain" />
              </PsdBox>
            </div>
          ))}
        </div>
      </div>
    </PsdStage>
  )
}
