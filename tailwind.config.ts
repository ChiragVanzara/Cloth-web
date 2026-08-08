import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#090A0B',
          charcoal: '#121416',
          graphite: '#1B1F22',
          hero: '#102F34',
          card: '#15181B',
          'card-hover': '#1E2226',
        },
        tone: {
          teal: '#123A3F',
          navy: '#182A3A',
          rust: '#682C21',
        },
        accent: {
          orange: '#C65A28',
          gold: '#C59A3A',
          'teal-glow': '#1ECAD3',
        },
        neutral: {
          offwhite: '#F2F2EE',
          gray: '#A8AAA6',
          muted: '#686C72',
          dim: '#3F444A',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'Space Grotesk', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'Manrope', 'sans-serif'],
        display: ['var(--font-display)', 'Syne', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'DM Serif Display', 'serif'],
      },
      maxWidth: {
        'site': '1440px',
        'site-wide': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      lineHeight: {
        'hero': '0.88',
        'display': '0.95',
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'widest-nav': '0.08em',
        'widest-meta': '0.14em',
      },
    },
  },
  plugins: [],
};

export default config;
