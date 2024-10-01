import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      lg: "10px",
    },
    fontFamily: {
      nunito: ["var(--font-nunito)", "sans-serif"],
      inter: ["var(--font-inter)", "sans-serif"],
    },
    backgroundImage: {
      img: "url('/img/bg-hero.png')",
    },
    extend: {
      boxShadow: {
        shadowShape:
          "0px 100px 365px 0px rgba(0, 0, 0, 0.07), 0px 12.522px 45.704px 0px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        blue: "#022451",
        orange: "#F17732",
        orangeLight: "#FF8F50",
        gradientOrange:
          "linear-gradient(90deg, #FF8F50 -0.52%, rgba(241, 119, 50, 0.45) 100%)",
        gradientBlue:
          "linear-gradient(357deg, #022451 1.51%, rgba(5, 81, 183, 0.45) 97.08%)",
        gray: {
          950: "#212529",
          900: "#495057",
          800: "#ADB5BD",
          700: "#DEE2E6",
          600: "#F1F3F5",
          500: "#F8F9FA",
        },
      },
    },
  },
  plugins: [],
}
export default config
