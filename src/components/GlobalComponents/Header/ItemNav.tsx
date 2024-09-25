import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ItemNavProps {
  children: ReactNode
  className: string
}

export function ItemNav({ children, className }: ItemNavProps) {
  return (
    <li className={twMerge("font-inter font-medium text-base", className)}>
      <Link href="/">{children}</Link>
    </li>
  )
}
