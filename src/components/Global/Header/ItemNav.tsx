import Link from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ItemNavProps {
  children: ReactNode
  className: string
  link: string
}

export function ItemNav({ children, className, link }: ItemNavProps) {
  return (
    <li className={twMerge("font-inter font-medium text-base", className)}>
      <Link href={link}>{children}</Link>
    </li>
  )
}
