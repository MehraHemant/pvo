import Container from './Container.jsx'

export default function Introduction() {
  const stats = [
    {
      value: '2010',
      title: 'Founded In',
      description: 'Year of establishment',
      icon: '/Introduction/Icon 1.png',
      glow: true,
    },
    {
      value: '15+',
      title: 'Years of Service',
      description: 'Impactful Service in Outreach and Political Consulting',
      icon: '/Introduction/Icon 2.png',
    },
    {
      value: '3000+',
      title: 'On-Ground Campaign Days',
      description: 'Extensive track record of grassroots campaigning',
      icon: '/Introduction/Icon 3.png',
    },
  ]

  return (
    <section className="intro-section-y relative w-full overflow-hidden bg-white" id="about">
      <span
        className="pointer-events-none absolute left-0 -top-3 xl:-top-8 z-0 h-12 w-24 md:h-16 md:w-32 xl:h-36 xl:w-60"
        aria-hidden="true"
      >
   <img src='/decor.png' alt='decor' className='h-full w-full object-contain' />
      </span>
      <span
        className="pointer-events-none absolute -right-12 -top-16 z-0 size-28 rounded-full bg-pvo-mint md:-right-8 md:-top-12 md:size-36 xl:-right-5 xl:-top-8 xl:size-48"
        aria-hidden="true"
      ></span>
      <span
        className="pointer-events-none absolute right-12 top-16 z-0 size-9 rounded-full bg-pvo-periwinkle md:right-16 md:top-20 md:size-10 xl:right-20 xl:top-28 xl:size-14"
        aria-hidden="true"
      ></span>
      <span
        className="pointer-events-none absolute right-24 top-12 z-0 size-3.5 rounded-full bg-pvo-sky-dot md:right-28 md:top-14 xl:right-40 xl:top-20 xl:size-5"
        aria-hidden="true"
      ></span>

      <Container className="flex flex-col gap-5 md:gap-7 xl:gap-8">
        <h2 className="text-center text-section-title uppercase text-pvo-slate">INTRODUCTION</h2>

        <div className="prose-strong mx-auto text-center text-section-body text-pvo-text-light">
          <p>
            Founded in 2010, <strong>People Verdict Organization</strong> is a premier Indian outreach and
            political consulting agency with over <strong>15 years</strong> of impactful service. With its
            roots deeply embedded in the ethos of democracy and public engagement, the organization was
            conceptualized with a unique idea&mdash;to introduce concepts that connect leaders directly with
            the people. This philosophy laid the foundation of our flagship brand, <strong>Janaadesh</strong>,
            whose tagline resonates with this mission: &ldquo;Introducing Concepts that Connect.&rdquo;
          </p>
          <p>
            Today, People Verdict Organization stands tall as one of India&rsquo;s most trusted names in
            outreach and grassroots campaigning. With a track record of more than{' '}
            <strong>3000+ on-ground campaign days,</strong> we have solidified our position as the
            &ldquo;<strong>Ground Champion of India.</strong>&rdquo;
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-prose-sm flex-col gap-6 md:max-w-none md:gap-8 xl:gap-10">
          <div className="grid w-full min-w-0 grid-cols-3 items-center gap-1 rounded-photo bg-stat-bar px-2 py-1.5 sm:gap-0 md:mx-auto md:w-11/12 md:rounded-card-md md:px-5 md:py-2 xl:rounded-card xl:px-6 xl:py-3">
            {stats.map((stat) => (
              <span key={stat.value} className="text-center text-stat-display text-pvo-slate">
                {stat.value}
              </span>
            ))}
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 items-center gap-8 px-2 py-1.5 sm:grid-cols-3 sm:gap-4 md:mx-auto md:w-11/12 md:rounded-card-md md:px-5 md:py-2 xl:rounded-card xl:px-6 xl:py-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="relative flex flex-col items-center text-center md:min-h-0"
              >
                {stat.glow ? (
                  <span
                    className="pointer-events-none absolute -bottom-5 left-1/2 -z-10 hidden size-48 -translate-x-1/2 rounded-full bg-intro-glow md:block md:size-64 xl:-bottom-12 xl:size-80"
                    aria-hidden="true"
                  ></span>
                ) : null}
                <span className="text-section-lead text-pvo-navy">{stat.title}</span>
                <span className="mt-1 max-w-xs text-section-sm leading-normal text-pvo-text-light md:min-h-16 xl:min-h-20">
                  {stat.description}
                </span>
                <span className="mt-4 block size-24 shrink-0 xl:size-36">
                  <img src={stat.icon} alt="" className="h-full w-full object-contain" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
