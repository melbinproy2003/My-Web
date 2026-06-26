/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f2f0ea',
        'bg-secondary': '#e5e0d6',
        'surface': '#fbfaf6',
        'surface-strong': '#161513',
        'ink': '#181715',
        'ink-soft': '#565149',
        'ink-muted': '#8b8579',
        'accent': '#d7ff4f',
        'accent-ink': '#263100',
        'gold': '#d1a153',
        'green-dot': '#44b96c',
      },
      fontFamily: {
        'sans': ['Inter', 'Segoe UI', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      maxWidth: {
        'content': '1180px',
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
      boxShadow: {
        'card': '0 20px 70px rgba(24, 23, 21, 0.12)',
        'nav': '0 8px 28px rgba(24, 23, 21, 0.08)',
        'card-hover': '0 16px 50px rgba(24, 23, 21, 0.12)',
        'portrait-hover': '0 25px 50px rgba(27, 26, 24, 0.08)',
        'project': '0 14px 50px rgba(24, 23, 21, 0.08)',
      },
      animation: {
        'marquee-left': 'mScrollLeft 36s linear infinite',
        'marquee-right': 'mScrollRight 36s linear infinite',
      },
      keyframes: {
        mScrollLeft: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        mScrollRight: {
          'from': { transform: 'translateX(-50%)' },
          'to': { transform: 'translateX(0)' },
        },
      },
      lineHeight: {
        'tightest': '0.98',
        'tight2': '0.9',
      },
    },
  },
  plugins: [],
}
