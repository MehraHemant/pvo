/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        pvo: {
          blue: '#01a0e2',
          'blue-dark': '#0487f1',
          'blue-soft': '#9cc4ea',
          'blue-pale': '#eef4fc',
          navy: '#10365f',
          'navy-deep': '#0e2c55',
          'navy-mid': '#3e5f8f',
          slate: '#3c4a5a',
          'slate-border': '#4a5561',
          amber: '#fbb03b',
          'amber-mid': '#fdc53f',
          yellow: '#f5e85a',
          'yellow-pill': '#fbd65b',
          red: '#ee2b34',
          'red-bright': '#fb0007',
          'red-dark': '#c81f27',
          text: '#37424f',
          'text-light': '#5b6774',
          muted: '#8d98a3',
          surface: '#f8f8f8',
          'surface-alt': '#fafafc',
          parchment: '#f6f0e2',
          border: '#e6e9ee',
          footer: '#569dd5',
          mint: '#cfe6e2',
          periwinkle: '#93aee4',
          'sky-dot': '#a9d8e4',
          'teal-soft': '#a8d0ca',
          'teal-mid': '#7fc4bc',
          'case-border': '#5aa4e0',
          carousel: '#2E3C4E',
          'trait-border': '#c9d4e2',
          'ring-pale': '#f5f8fd',
          'ceo-accent': '#4fc0f5',
          'hover-blue': '#046fca',
          'empanel-icon': '#5ab4e8'
        }
      },
      zIndex: {
        header: '1000'
      },
      fontFamily: {
        sans: ['Roboto', 'Montserrat', 'sans-serif']
      },
      spacing: {
        page: '8.33vw',
        17: '4.25rem',
        13: '3.25rem',
        30: '7.5rem'
      },
      maxWidth: {
        '7xl': '83.34vw',
        site: '1500px',
        'prose-sm': '26rem',
        'prose-md': '34rem',
        'prose-lg': '46rem',
        brand: '56rem',
        hero: '1920px',
        empanel: '31.5625rem'
      },
      width: {
        13: '3.25rem',
        '11/12': '91.666667%'
      },
      height: {
        34: '8.5rem',
        50: '12.5rem',
        bar: '49px',
        input: '41px',
        submit: '47px'
      },
      minHeight: {
        'team-rotator-xs': '114.25rem',
        'team-rotator-sm': '48.5rem',
        'team-rotator-md': '18rem',
        'team-rotator-lg': '21rem',
        'team-card': '28rem',
        message: '105px'
      },
      maxHeight: {
        'team-photo': '14rem'
      },
      size: {
        trait: '53px',
        'intro-icon': '92px',
        'intro-icon-xl': '148px',
        'brand-xl': '248px'
      },
      borderRadius: {
        pill: '5px',
        photo: '9px',
        'card-md': '11px',
        card: '14px'
      },
      borderWidth: {
        logo: '10px',
        12: '12px',
        13: '13px'
      },
      boxShadow: {
        'pvo-xs': '0 1px 4px rgba(22, 40, 66, 0.06)',
        'pvo-sm': '0 2px 10px rgba(22, 40, 66, 0.07)',
        'pvo-md': '0 6px 22px rgba(22, 40, 66, 0.1)',
        'pvo-lg': '0 12px 34px rgba(22, 40, 66, 0.14)',
        'pvo-brand': '8px 10px 18px rgba(22, 40, 66, 0.18)'
      },
      backgroundImage: {
        'stat-bar': 'linear-gradient(90deg, #fbb03b 0%, #fdc53f 34%, #f7dc4a 68%, #f5e85a 100%)',
        'brand-circle': 'linear-gradient(140deg, #cfe8dc 0%, #bfdcea 45%, #a9c6ea 100%)',
        'team-wash': 'linear-gradient(112deg, #ffffff 0%, #ffffff 42%, #eff4fc 100%)',
        'intro-glow': 'linear-gradient(120deg, #c9e6d2 0%, #e2f0e8 55%, rgba(255,255,255,0) 100%)',
        'mvv-pattern': "url('/mvv-pattern.svg')"
      },
      aspectRatio: {
        photo: '1.1 / 1',
        case: '4 / 3'
      }
    }
  },
  plugins: []
}
