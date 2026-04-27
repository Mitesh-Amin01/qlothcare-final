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
           CLOTHCARE – IMAGE COLORS
           Orange + Dark Navy + Soft Gray
        ========================= */
        clothcare: {
          primary: '#E46F33',     // CTA buttons, highlights
          primaryDark: '#CC5F2B', // Hover state
          dark: '#3C4249',        // Secondary dark
          darker: '#0B0D10',      // Main deep background
          midnight: '#0B0D10',    // Premium deep black
          gray: '#778582',        // Muted text/icons
          graySoft: '#D1D3CF',    // Cards, borders
          white: '#FFFFFF',
          black: '#000000',
        },

        /* =========================
           TEXT COLORS
        ========================= */
        text: {
          primary: '#FFFFFF',     // Hero text
          dark: '#2F343A',        // Normal sections
          muted: '#778582',
          accent: '#E46F33',
        },

        /* =========================
           BACKGROUND COLORS
        ========================= */
        bg: {
          hero: '#3C4249',
          dark: '#2F343A',
          soft: '#D1D3CF',
          white: '#FFFFFF',
          accent: '#E46F33',
        },

        /* =========================
           BORDER COLORS
        ========================= */
        border: {
          soft: '#D1D3CF',
          dark: '#3C4249',
          accent: '#E46F33',
        },

        /* =========================
           STATUS COLORS
        ========================= */
        status: {
          success: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
          info: '#E46F33',
        },
      },

      /* =========================
         GRADIENTS (Hero Exact Feel)
      ========================= */
      backgroundImage: {
        'clothcare-hero-gradient':
          'linear-gradient(135deg, #2F343A 0%, #3C4249 100%)',

        'clothcare-accent-gradient':
          'linear-gradient(135deg, #E46F33 0%, #CC5F2B 100%)',
      },

      /* =========================
         TYPOGRAPHY
      ========================= */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },

      /* =========================
         SHADOWS
      ========================= */
      boxShadow: {
        clothcare: '0 12px 30px rgba(0,0,0,0.35)',
        clothcareSoft: '0 8px 20px rgba(228,111,51,0.35)',
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
