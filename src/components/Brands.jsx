import Container from './Container.jsx'

export default function Brands() {
  const brands = [
    {
      key: 'janaadesh',
      logo: '/FINAL JANADESH LOGO DESIGN-01.png',
      alt: 'Janaadesh',
      name: 'JANAADESH',
      description: 'Political campaign planning and execution unit.',
      url: 'https://www.janaadesh.co.in',
      urlText: 'www.janaadesh.co.in'
    },
    {
      key: 'vistaar',
      logo: '/Vistaar Print-01.png',
      alt: 'Vistaar Media',
      name: 'VISTAAR MEDIA',
      description: 'Creative, BTL, event and experience marketing division.',
      url: 'https://www.vistaar.media',
      urlText: 'www.vistaar.media'
    }
  ]

  return (
    <section id="brands" className="section-y relative w-full overflow-hidden bg-white">
      <Container>
        <h2 className="mb-4 text-center text-section-title uppercase text-pvo-slate md:mb-6 xl:mb-7">
          OUR BRANDS
        </h2>
        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-10 md:mt-9 md:grid-cols-2 md:gap-12 xl:mt-10 xl:gap-16">
          {brands.map((brand) => (
            <article key={brand.key} className="text-center">
              <div className="mx-auto mb-4 grid size-36 place-items-center rounded-full bg-brand-circle shadow-pvo-brand md:mb-6 md:size-48 xl:mb-7 xl:size-brand-xl">
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  className="max-h-full p-4 max-w-full object-contain"
                />
              </div>
              <h3 className="mb-2 text-section-lead tracking-wide text-pvo-slate">
                {brand.name}
              </h3>
              <p className="mb-2 text-section-sm leading-relaxed text-pvo-text-light">
                {brand.description}
              </p>
              <a
                href={brand.url}
                className="text-section-sm font-bold text-pvo-slate transition-colors duration-300 hover:text-pvo-blue-dark"
              >
                {brand.urlText}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
