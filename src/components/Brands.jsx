import Container from './Container'
import { psdLen, PsdBox, PsdStage, PsdText } from './Psd.jsx'

const BRANDS = [
  {
    key: 'janaadesh',
    circle: { x: 393, y: 222 },
    logo: {
      src: '/FINAL JANADESH LOGO DESIGN-01.png',
      alt: 'Janaadesh',
      left: 61,
      top: 131,
      w: 282,
      h: 137
    },
    name: { x: 462, y: 642, w: 233, text: 'Janaadesh' },
    body: {
      x: 228.01,
      y: 695.22,
      text: 'Political campaign planning and execution unit.'
    },
    url: { x: 228.01, y: 737.35, href: 'https://www.janaadesh.co.in', text: 'www.janaadesh.co.in' }
  },
  {
    key: 'vistaar',
    circle: { x: 1137, y: 222 },
    logo: {
      src: '/Vistaar Print-01.png',
      alt: 'Vistaar Media',
      left: 68,
      top: 134,
      w: 265,
      h: 131
    },
    name: { x: 1188, y: 642, w: 302, text: 'Vistaar Media' },
    body: {
      x: 987.95,
      y: 695.22,
      text: 'Creative, BTL, event and experience marketing division.'
    },
    url: { x: 998.28, y: 737.35, href: 'https://www.vistaar.media', text: 'www.vistaar.media' }
  }
]

export default function Brands() {
  return (
    <PsdStage
      h={842}
      id="brands"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24 xl:py-0"
    >
      <Container inset="tight" className="xl:contents">
        <PsdText
          as="h2"
          x={700}
          y={103}
          w={518}
          className="mb-6 text-center font-display text-title uppercase text-[#2E3C4E] xl:whitespace-nowrap xl:leading-[67.3px]"
        >
          Our Brands
        </PsdText>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-10 md:mt-10 md:grid-cols-2 md:gap-16 xl:contents">
          {BRANDS.map((brand) => (
            <article key={brand.key} className="text-center xl:contents">
              <PsdBox
                x={brand.circle.x}
                y={brand.circle.y}
                w={402}
                h={402}
                className="relative mx-auto mb-4 block md:mb-6"
                style={{ width: psdLen(402), height: psdLen(402) }}
              >
                <img
                  src="/psd/brand-circle.png"
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain"
                />
                <img
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  className="absolute object-contain"
                  style={{
                    left: `${(brand.logo.left / 402) * 100}%`,
                    top: `${(brand.logo.top / 402) * 100}%`,
                    width: `${(brand.logo.w / 402) * 100}%`,
                    height: `${(brand.logo.h / 402) * 100}%`
                  }}
                />
              </PsdBox>
              <PsdText
                as="h3"
                x={brand.name.x}
                y={brand.name.y}
                w={brand.name.w}
                className="mb-2 font-display text-brandname uppercase text-[#2E3C4E] xl:whitespace-nowrap xl:leading-[34px]"
              >
                {brand.name.text}
              </PsdText>
              <PsdText
                as="p"
                x={brand.body.x}
                y={brand.body.y}
                w={700.73}
                className="mb-2 text-brandbody text-[#2E3C4E] xl:leading-[21.9px]"
              >
                {brand.body.text}
              </PsdText>
              <PsdText
                as="a"
                href={brand.url.href}
                x={brand.url.x}
                y={brand.url.y}
                w={700.73}
                className="text-brandurl text-[#2E3C4E] xl:leading-[23px]"
              >
                {brand.url.text}
              </PsdText>
            </article>
          ))}
        </div>
      </Container>
    </PsdStage>
  )
}
