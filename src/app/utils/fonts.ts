import { Inter, Nunito_Sans } from "next/font/google"

const inter_font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
})

const nunito_font = Nunito_Sans({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
})

export const inter = inter_font.variable
export const nunito = nunito_font.variable
