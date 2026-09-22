import { useState } from 'react'
import { PsdBox, PsdStage, PsdText } from './Psd'

const TOP = 2319

const FRAMES = [
  { x: 94, y: 2908 - TOP, w: 423, h: 280 },
  { x: 534, y: 2909 - TOP, w: 420, h: 278 },
  { x: 973, y: 2909 - TOP, w: 420, h: 278 },
  { x: 1411, y: 2909 - TOP, w: 420, h: 278 }
]

function rel(ox, oy, x, y, w, h) {
  return { x: x - ox, y: y - oy, w, h }
}

const SLIDES = [
  [
    {
      year: '2009-10',
      yearBox: rel(126, 2964, 142, 2977, 171, 35),
      title: ['STARTED WITH PASSION'],
      titleBox: rel(94, 2908, 128, 3041, 344, 24),
      lines: ['We have decided to follow', 'our passion'],
      bodyBox: rel(94, 2908, 127, 3082, 261, 50),
      active: true
    },
    {
      year: '2014-15',
      yearBox: rel(534, 2909, 571, 2977, 172, 35),
      title: ['YEAR OF CHANGE'],
      titleBox: rel(534, 2909, 569, 3041, 250, 24),
      lines: ['These were the years, where', 'wehave Identified our strength', 'and code'],
      bodyBox: rel(534, 2909, 569, 3082, 302, 73),
      active: false
    },
    {
      year: '2016-18',
      yearBox: rel(973, 2909, 1008, 2977, 171, 35),
      title: ['YEAR OF INNOVATION'],
      titleBox: rel(973, 2909, 1006, 3041, 307, 24),
      lines: ['Kamal Mela, Kamal Jatre, Selfie', 'with Modi'],
      bodyBox: rel(973, 2909, 1007, 3082, 315, 46),
      active: false
    },
    {
      year: '2019',
      yearBox: rel(1411, 2909, 1464, 2977, 101, 35),
      title: ['YEAR OF NARRATION'],
      titleBox: rel(1411, 2909, 1461, 3041, 297, 24),
      lines: ['Bharat ke man ki baat,', 'Aakansha Peti'],
      bodyBox: rel(1411, 2909, 1461, 3082, 222, 46),
      active: false
    }
  ],
  [
    {
      year: '2020-22',
      yearBox: rel(126, 2964, 142, 2977, 171, 35),
      title: ['MISSION PATLIPUTRA'],
      titleBox: rel(94, 2908, 129, 3041, 307, 24),
      lines: ['Aatmanirbhar Bihar and BJP', '4 WB Campaign'],
      bodyBox: rel(94, 2908, 127, 3082, 284, 50),
      active: true
    },
    {
      year: '2022',
      yearBox: rel(534, 2909, 571, 2977, 103, 35),
      title: ['YEAR OF LANDMARK', 'CAMPAIGN'],
      titleBox: rel(534, 2909, 569, 3041, 294, 60),
      lines: ['Aayega to modi hi, BJP campaign', 'in Uttarakhand'],
      bodyBox: rel(534, 2909, 571, 3114, 335, 46),
      active: false
    },
    {
      year: '2023-24',
      yearBox: rel(973, 2909, 1008, 2977, 172, 35),
      title: ['Viksit Bharat'],
      titleBox: rel(973, 2909, 1007, 3041, 229, 24),
      lines: ['Viksit Bharat, Fir ek bar Modi Sarkar'],
      bodyBox: rel(973, 2909, 1006, 3082, 356, 21),
      active: false
    },
    {
      year: '2025',
      yearBox: rel(1411, 2909, 1464, 2977, 102, 35),
      title: [' Cultural  Events'],
      titleBox: rel(1411, 2909, 1462, 3039, 287, 24),
      lines: ['Mahakumbh-2025, Falgun mela', 'khatu shyam 2025, Pandharpur', 'wari mela, & Jagannath ji yatra '],
      bodyBox: rel(1411, 2909, 1462, 3082, 316, 78),
      active: false
    }
  ]
]

function Lines({ lines }) {
  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {line}
    </span>
  ))
}

export default function Journey() {
  const [slide, setSlide] = useState(0)

  return (
    <PsdStage
      h={982}
      data-psd="journey"
      className="relative w-full overflow-hidden bg-pvo-surface py-[clamp(2.5rem,4.17vw,80px)] xl:py-0"
    >
      <div className="px-[clamp(1.25rem,4.43vw,85px)] xl:px-0">
        <PsdText
          as="h2"
          x={772}
          y={2397 - TOP}
          w={377}
          h={62}
          className="mb-[clamp(1.5rem,3vw,58px)] text-center font-display text-title uppercase text-[#2e3c4e] xl:mb-0 xl:text-left"
        >
          Journey
        </PsdText>

        <PsdBox
          x={98}
          y={2517 - TOP}
          w={1721.75}
          className="mb-5 text-copy text-[#2e3c4e] md:mb-8 xl:mb-0"
        >
          <p>
            The journey of People Verdict began in 2010 with a vision to transform political and public
            outreach in India. Over the years, we have built a robust ecosystem of communication and activation
            tools, consistently innovating in how leaders interact with citizens.
          </p>
          <p>
            From humble beginnings to handling large-scale nationwide campaigns, the organization has grown
            exponentially—diversifying into digital outreach, media, event management, and more. Our deep
            understanding of rural and urban voter psychology has made us the preferred choice for many state
            and central government projects, as well as political clients.
          </p>
        </PsdBox>

        <div className="mx-auto mt-[clamp(1.5rem,4.7vw,91px)] grid max-w-sm grid-cols-1 items-stretch gap-[clamp(0.75rem,0.9vw,17px)] sm:max-w-none sm:grid-cols-2 xl:mt-0 xl:max-w-none xl:grid-cols-4">
          {SLIDES[slide].map((card, index) => {
            const frame = FRAMES[index]
            const ink = card.active ? 'text-white' : 'text-[#2e3c4e]'
            return (
              <PsdBox
                key={card.year}
                as="article"
                x={frame.x}
                y={frame.y}
                w={frame.w}
                h={frame.h}
                className={`min-h-[12rem] rounded-[22px] px-5 py-6 xl:min-h-0 xl:px-0 xl:py-0 ${
                  card.active ? 'bg-pvo-blue shadow-pvo-md' : 'bg-white shadow-pvo-sm'
                }`}
              >
                {card.active ? (
                  <PsdBox
                    x={32}
                    y={56}
                    w={210}
                    h={58}
                    className="mb-2 inline-flex items-center rounded-pill bg-pvo-yellow-pill px-[clamp(0.75rem,1.2vw,18px)] xl:mb-0 xl:px-0"
                  >
                    <PsdText
                      {...card.yearBox}
                      className="whitespace-nowrap font-display text-figure text-[#2e3c4e]"
                    >
                      {card.year}
                    </PsdText>
                  </PsdBox>
                ) : (
                  <PsdText
                    {...card.yearBox}
                    className="mb-2 inline-flex items-center whitespace-nowrap font-display text-figure text-[#2e3c4e] xl:mb-0"
                  >
                    {card.year}
                  </PsdText>
                )}
                <PsdText
                  as="h3"
                  {...card.titleBox}
                  className={`mb-2 font-display text-kicker uppercase xl:mb-0 xl:whitespace-pre ${ink}`}
                >
                  <Lines lines={card.title} />
                </PsdText>
                <PsdText {...card.bodyBox} className={`text-tiny xl:whitespace-pre ${ink}`}>
                  <Lines lines={card.lines} />
                </PsdText>
              </PsdBox>
            )
          })}
        </div>

        <div className="mt-[clamp(1rem,3.4vw,65px)] flex justify-center gap-[5px] xl:mt-0">
          <PsdBox
            as="button"
            type="button"
            x={944}
            y={3254 - TOP}
            w={15}
            h={14}
            aria-label="Show journey years 2009 to 2019"
            className={`h-[14px] w-[15px] rounded-full border-2 border-[#2e3c4e] p-0 ${
              slide === 0 ? 'bg-[#2e3c4e]' : 'bg-transparent'
            }`}
            onClick={() => setSlide(0)}
          />
          <PsdBox
            as="button"
            type="button"
            x={960}
            y={3253 - TOP}
            w={16}
            h={16}
            aria-label="Show journey years 2020 to 2025"
            className={`h-4 w-4 rounded-full border-2 border-[#2e3c4e] p-0 ${
              slide === 1 ? 'bg-[#2e3c4e]' : 'bg-transparent'
            }`}
            onClick={() => setSlide(1)}
          />
        </div>
      </div>
    </PsdStage>
  )
}
