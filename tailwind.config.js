/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        /* =========================
           CRYONIX IT – CORE COLORS
        ========================= */
        cryonix: {
          blue: '#0E2554',     // Main brand blue
          blueSoft: '#142E66', // UI sections, cards
          blueLight: '#1B3B8A',// Gradients / hover
          white: '#FFFFFF',
          black: '#000000',
        },

        /* =========================
           TEXT COLORS
        ========================= */
        text: {
          primary: '#0E2554',
          inverse: '#FFFFFF',
          dark: '#000000',
          muted: '#1B3B8A',
        },

        /* =========================
           BACKGROUND COLORS
        ========================= */
        bg: {
          primary: '#0E2554',
          soft: '#142E66',
          light: '#F8FAFF',
          dark: '#000000',
          white: '#FFFFFF',
        },

        /* =========================
           BORDER COLORS
        ========================= */
        border: {
          primary: '#0E2554',
          soft: '#1B3B8A',
          dark: '#000000',
          white: '#FFFFFF',
        },
      },

      /* =========================
         GRADIENTS
      ========================= */
      backgroundImage: {
        'cryonix-blue-gradient':
          'linear-gradient(135deg, #0E2554 0%, #1B3B8A 100%)',

        'cryonix-dark-gradient':
          'linear-gradient(135deg, #000000 0%, #0E2554 100%)',

        'cryonix-light-gradient':
          'linear-gradient(135deg, #FFFFFF 0%, #E9EEFF 100%)',
      },

      /* =========================
         TYPOGRAPHY
      ========================= */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },

      /* =========================
         SHADOWS (Premium IT Feel)
      ========================= */
      boxShadow: {
        cryonix: '0 10px 30px rgba(14, 37, 84, 0.35)',
        cryonixSoft: '0 6px 18px rgba(14, 37, 84, 0.2)',
      },

      /* =========================
         BORDER RADIUS
      ========================= */
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
