/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         fontFamily: {
            inter: "var(--font-openSans)",
         },
         colors: {
            "brand-tan": "#FFEED5",
            "brand-blue": "#0E25F2",
            "brand-blue-dark": "#1025c3",
            "brand-blue-light": "#d7e9ff",
          },
      },
   },
   plugins: [],
};
