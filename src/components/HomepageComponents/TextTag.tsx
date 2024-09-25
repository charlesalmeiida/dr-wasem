import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TextTagProps {
  children: ReactNode
  className: string
}

export function TextTag({ children, className }: TextTagProps) {
  return (
    <span className={twMerge("font-inter text-base font-medium", className)}>
      {children}
    </span>
  )
}
