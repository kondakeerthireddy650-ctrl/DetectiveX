/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#EAE0D5',
          300: '#DFD3C3',
          400: '#C8B8A6',
          500: '#AFA08E',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F8F4ED',
          200: '#F2ECE1',
          300: '#E7DEC8',
        },
        beige: {
          100: '#F0E6D8',
          200: '#E4D5C1',
          300: '#D5C1A7',
        },
        burgundy: {
          50: '#FBF0F2',
          100: '#F5DCE2',
          200: '#E9BAC6',
          300: '#D78FA2',
          600: '#861F33',
          700: '#6E1A29',
          800: '#55121E',
          900: '#3D0B14',
        },
        gold: {
          50: '#FDF9EF',
          100: '#F9F1D6',
          200: '#F2DFAB',
          300: '#E8CA7B',
          400: '#DCB34D',
          500: '#C99738',
          600: '#B07F28',
          700: '#8E621C',
        },
        sepia: {
          ink: '#231815',
          dark: '#2C1E18',
          body: '#42332B',
          muted: '#6B5B52',
          faint: '#9E8E84',
          border: '#DDCFC0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 30, 24, 0.06), 0 2px 6px -1px rgba(44, 30, 24, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(44, 30, 24, 0.08), 0 4px 12px -2px rgba(44, 30, 24, 0.05)',
        'soft-xl': '0 20px 40px -6px rgba(44, 30, 24, 0.12), 0 8px 16px -4px rgba(44, 30, 24, 0.06)',
        'dossier': '0 8px 24px -3px rgba(61, 11, 20, 0.12), 0 2px 8px -1px rgba(110, 26, 41, 0.08)',
        'seal': '0 4px 12px rgba(110, 26, 41, 0.35)',
      },
      backgroundImage: {
        'parchment-pattern': "radial-gradient(#C99738 0.5px, transparent 0.5px)",
      }
    },
  },
  plugins: [],
}
