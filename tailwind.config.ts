import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2667F8',
        'brand-dark': '#1A3EAF',
        ink: '#0A0A0A',
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1.125rem', { lineHeight: '1.75rem' }],
        lg:   ['1.25rem',  { lineHeight: '1.75rem' }],
        xl:   ['1.5rem',   { lineHeight: '2rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2rem',    { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.5rem',  { lineHeight: '1' }],
        '6xl': ['3rem',    { lineHeight: '1' }],
        '7xl': ['3.5rem',  { lineHeight: '1' }],
        '8xl': ['4rem',    { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config
