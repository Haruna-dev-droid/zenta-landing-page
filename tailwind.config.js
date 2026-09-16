/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Exact tokens pulled from the Figma file
        cream: '#f2f6f5',   // page background
        mint: '#d5ffec',    // soft gradient stop
        green: '#00ea80',   // primary brand accent
        brightgreen: '#03ea82',
        forest: '#004238',  // deep brand green (text / dark buttons)
        ink: '#141515',     // near-black nav text
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-2deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '34%': { borderRadius: '65% 35% 40% 60% / 55% 65% 35% 45%' },
          '66%': { borderRadius: '35% 65% 55% 45% / 40% 55% 45% 60%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wobble: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-6px) rotate(-3deg)' },
          '75%': { transform: 'translateY(4px) rotate(3deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,234,128,0.55)' },
          '50%': { boxShadow: '0 0 0 22px rgba(0,234,128,0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        blobMorph: 'blobMorph 10s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        wobble: 'wobble 5s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-out infinite',
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
