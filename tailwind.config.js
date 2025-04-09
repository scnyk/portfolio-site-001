module.exports = {
  theme: {
    extend: {
      fontSize: {
        'xxl': '5rem', // Example: 80px
        'giant': '10rem', // Example: 160px
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Geist Sans
        mono: ['var(--font-geist-mono)', 'monospace'], // Geist Mono
        playfair: ['var(--font-playfair)', 'serif'], // Playfair Display
      },
      colors: {
        'blue': {
          900: '#1a2747', // The dark blue background color for second page section
        },
        'red': {
          500: '#ee4e34', // The red accent color for the active tab indicator - second page
        },
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans all files in the `app` directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components
  ],
};