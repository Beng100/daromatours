/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        // חול / אבן — בסיס נייטרלי חם
        sand: {
          50: '#FBF7F0',
          100: '#F5EBDA',
          200: '#EBDBBE',
          300: '#DEC498',
          400: '#CDA96D'
        },
        // טרקוטה / שקיעה — צבע המותג המרכזי
        ember: {
          50: '#FDF1EA',
          100: '#F9DCC8',
          300: '#E0955C',
          500: '#C4602A',
          600: '#A64C1F',
          700: '#833B18'
        },
        // טיל כהה / לילה מדברי — לרקעים כהים וטקסט
        night: {
          400: '#5C5148',
          600: '#3A322B',
          800: '#241E1A',
          900: '#181310'
        },
        // מדורה / זהב — אקסנט למשיכת תשומת לב
        fire: {
          400: '#E8A23B',
          500: '#D98A1F'
        }
      },
      fontFamily: {
        display: ['"Rubik"', 'system-ui', 'sans-serif'],
        sans: ['"Heebo"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(24, 19, 16, 0.35)',
        card: '0 12px 30px -18px rgba(24, 19, 16, 0.3)'
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem'
      },
      backgroundImage: {
        'dune-gradient': 'linear-gradient(160deg, #241E1A 0%, #3A322B 55%, #A64C1F 130%)',
        'sunset-gradient': 'linear-gradient(120deg, #C4602A 0%, #D98A1F 100%)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both'
      }
    }
  },
  plugins: []
};
