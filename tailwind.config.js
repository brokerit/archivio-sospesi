/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: v('bg'), surface: v('surface'), sunk: v('sunk'), line: v('line'),
        fg: v('fg'), muted: v('muted'), accent: v('accent'),
        wait: v('wait'), ok: v('ok'), danger: v('danger'),
      },
    },
  },
  plugins: [],
}
