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
          slate: '#384653',
          amber: '#fbb03b',
          'amber-mid': '#fdc53f',
          yellow: '#f5e85a',
          'yellow-pill': '#fbd65b',
          red: '#ee2b34',
          'red-bright': '#fb0007',
          'red-dark': '#c81f27',
          text: '#3c4853',
          'text-light': '#3c4853',
          muted: '#8d98a3',
          surface: '#f8f8f8',
          'surface-alt': '#fafafc',
          parchment: '#f6f0e2',
          border: '#e6e9ee',
          footer: '#569dd5',
          mint: '#cfe6e2',
          bubble: '#93aee4',
          'bubble-sm': '#a9d8e4',
          'photo-border': '#4a5561',
          'case-border': '#5aa4e0',
          dot: '#9aa4ae',
          'team-line': '#c9d4e2',
          'mvv-line': '#cdd6e2',
          'ceo-accent': '#4fc0f5',
          icon: '#5ab4e8'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Roboto', 'sans-serif']
      },
      fontSize: {
        caption: ['clamp(0.7rem, 0.73vw, 0.875rem)', { lineHeight: '1.45' }],
        menu: ['clamp(0.8rem, 0.94vw, 1.125rem)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        copy: ['clamp(0.95rem, 1.35vw, 1.625rem)', { lineHeight: '1.75' }],
        kicker: ['clamp(0.95rem, 1.15vw, 1.375rem)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        lead: ['clamp(1.05rem, 1.25vw, 1.5rem)', { lineHeight: '1.3' }],
        figure: ['clamp(1.15rem, 1.46vw, 1.75rem)', { lineHeight: '1.2' }],
        title: ['clamp(2rem, 4.375vw, 5.25rem)', { lineHeight: '1.15', letterSpacing: '0.01em' }],
        hero: ['clamp(2.1rem, 4.6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        statnum: ['clamp(2.25rem, 4.5vw, 5.375rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }]
      },
      spacing: {
        page: '8.33vw'
      },
      maxWidth: {
        '7xl': '83.34vw'
      },
      borderRadius: {
        pill: '5px',
        photo: '9px',
        card: '14px'
      },
      borderWidth: {
        logo: '10px'
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
