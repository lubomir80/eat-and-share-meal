/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            'orange': "linear-gradient(90deg, #f9572a, #ff8a05)",
            'lightOrange': "linear-gradient(90deg, #fd4715, #f9b241)",
            'meal': "linear-gradient(90deg, #2c1e19, #25200f)",
            'disable': "linear-gradient(0deg, #9b9a9c, #9b9a9c)"
         },
         colors: {
            "text": "#ddd6cb"
         },
         screens: {
            'phone': "640px",
            'tablet': '768px',
            'laptop': '1024px',
            'desktop': '1280px',
            'desktop-md': '1536px',
         },
         fontSize: {
            'h1': ['2.5rem', {
               lineHeight: '2rem',
               letterSpacing: '0.15rem',
               fontWeight: '500',
            }],
            'h2': ['2rem', {
               lineHeight: '2.25rem',
               letterSpacing: '0.15rem',
               fontWeight: '700',
            }],
         },
         animation: {
            'slide': 'slide 0.5s ease-out',
            'slideLeft': 'slideLeft 1s ease-out forwards',
            'slideRight': 'slideRight 1s ease-out forwards',
            'slideBottom': 'slideBottom 1s ease-out forwards',
            'flash': 'flash 1s ease-in-out infinite alternate',
            'loading': 'loading 0.3s ease-in-out'

         },
         keyframes: {
            slide: {
               '0%': { transform: 'scale(1.1) translateX(-1rem) rotate(-5deg)' },
               '100%': { transform: 'scale(1) translateX(0rem) rotate(0deg)' },
            },
            slideLeft: {
               '0%': { opacity: "0", transform: "translateX(-1rem)" },
               '100%': { opacity: "1", transform: "translateX(0rem)" }
            },
            slideRight: {
               '0%': { opacity: "0", transform: "translateX(1rem)" },
               '100%': { opacity: "1", transform: "translateX(0rem)" }
            },
            slideBottom: {
               '0%': { opacity: "0", transform: "translateY(1rem)" },
               '100%': { opacity: "1", transform: "translateY(0rem)" }
            },
            flash: {
               '0%': { opacity: "0" },
               '50%': { opacity: "1" },
               '100%': { opacity: "0" }
            },
            loading: {
               '0%': { color: '#e9e9e9' },
               '50%': { color: '#b89b84' },
               '100%': { color: '#e9e9e9' },
            }
         },
         gridTemplateColumns: {
            "meal": "repeat(auto-fill, minmax(20rem, 1fr))"
         }


      },
   },
   plugins: [],
};
