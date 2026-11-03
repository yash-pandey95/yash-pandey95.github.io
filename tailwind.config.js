/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B12",
        surface: {
          50: "#131a2c",
          100: "#0e1526",
          200: "#0a0f1d",
          card: "rgba(13, 20, 36, 0.72)",
          cardHover: "rgba(18, 28, 50, 0.85)",
        },
        primary: {
          DEFAULT: "#0066FF",
          light: "#38BDF8",
          dark: "#0047AB",
          electric: "#0070F3",
        },
        accent: {
          cyan: "#06B6D4",
          cyanLight: "#22D3EE",
          purple: "#8B5CF6",
          purpleLight: "#A855F7",
        },
        borderGlow: "rgba(56, 189, 248, 0.2)",
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(6, 182, 212, 0.15)',
        'glow-md': '0 0 25px rgba(0, 102, 255, 0.25)',
        'glow-lg': '0 0 35px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
