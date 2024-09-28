import Link from "next/link"
import { ReactNode } from "react"
import { tv } from "tailwind-variants"

interface ButtonProps {
  color: "primary" | "secondary" | "blue"
  size: "sm" | "base"
  url: string
  children: ReactNode
}

const button = tv({
  base: "transition-all leading-[120%] font-inter block w-fit rounded-lg",
  variants: {
    color: {
      primary: "bg-orange hover:bg-orangeLight text-gray-500",
      blue: "bg-blue hover:bg-orangeLight text-gray-500",
      secondary:
        "text-gray-950 bg-transparent border-[1px] hover:text-gray-500 hover:bg-blue border-blue ",
    },
    size: {
      sm: "py-3 px-4",
      base: "py-4 px-8",
    },
  },
})

export function Button({ color, size, children, url }: ButtonProps) {
  if (!url) {
    console.error('The "url" prop is required for the Button component.')
    return null
  }

  return (
    <Link href={url} className={button({ color, size })}>
      {children}
    </Link>
  )
}
