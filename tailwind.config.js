/** @type {import('tailwindcss').Config} */
module.exports = {
  // Blog-Erweiterung 02.02.2026: Pfade für Blog und Templates hinzugefügt
  content: [
    "./*.html",
    "./blog/**/*.html",
    "./templates/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#1E3A5F',
          teal: '#3A9EAF',
          tealDark: '#2C7A87',
        },
        dark: {
          bg: '#050505',
          'bg-alt': '#111111',
          surface: '#0F0F0F',
          'surface-hover': '#1A1A1A',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      borderRadius: {
        'container': '32px',
        'card': '32px',
        'button': '16px',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'aurora-pulse': 'aurora-pulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    }
  },
  // Blog-Erweiterung 02.02.2026: Typography Plugin für Artikel-Content
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
