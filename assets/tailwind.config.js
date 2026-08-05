module.exports = {
  content: ["../index.html"],
  theme: {
    extend: {
      colors: {
        sico: {
          bgBase: '#F8FAFC',
          bgSurface: '#FFFFFF',
          bgSurfaceHover: '#F1F5F9',
          textMain: '#0F172A',
          textMuted: '#475569',
          border: '#E2E8F0',
          accent: '#F59E0B',
          accentGlow: '#D97706',
          accentLight: '#FBBF24',
          blueNeon: '#38BDF8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}
