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
           CLOTHCARE – CORE COLORS
           Teal + White + Navy
        ========================= */
        clothcare: {
          teal: '#0FB9B1',        // Primary brand color
          tealSoft: '#D9F5F3',    // Soft backgrounds
          tealDark: '#0C8F8A',    // Hover / active states
          navy: '#0A2540',        // Admin / headings
          navySoft: '#142E4F',    // Cards / sections
          white: '#FFFFFF',
          black: '#000000',
        },

        /* =========================
           TEXT COLORS
        ========================= */
        text: {
          primary: '#0A2540',     // Main text
          inverse: '#FFFFFF',
          muted: '#64748B',       // Secondary text
          teal: '#0FB9B1',
        },

        /* =========================
           BACKGROUND COLORS
        ========================= */
        bg: {
          primary: '#0FB9B1',     // Buttons / highlights
          soft: '#D9F5F3',        // Page sections
          light: '#F8FAFC',       // App background
          navy: '#0A2540',        // Admin panels
          white: '#FFFFFF',
        },

        /* =========================
           BORDER COLORS
        ========================= */
        border: {
          primary: '#0FB9B1',
          soft: '#B2E7E4',
          navy: '#0A2540',
          light: '#E5E7EB',
        },

        /* =========================
           STATUS COLORS (CRM)
        ========================= */
        status: {
          success: '#22C55E',
          warning: '#F97316',
          danger: '#EF4444',
          info: '#0FB9B1',
        },
      },

      /* =========================
         GRADIENTS
      ========================= */
      backgroundImage: {
        'clothcare-primary-gradient':
          'linear-gradient(135deg, #0FB9B1 0%, #0C8F8A 100%)',

        'clothcare-navy-gradient':
          'linear-gradient(135deg, #0A2540 0%, #142E4F 100%)',

        'clothcare-light-gradient':
          'linear-gradient(135deg, #FFFFFF 0%, #E6FAF8 100%)',
      },

      /* =========================
         TYPOGRAPHY
      ========================= */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },

      /* =========================
         SHADOWS (Premium CRM Feel)
      ========================= */
      boxShadow: {
        clothcare: '0 10px 30px rgba(10, 37, 64, 0.25)',
        clothcareSoft: '0 6px 18px rgba(15, 185, 177, 0.25)',
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
