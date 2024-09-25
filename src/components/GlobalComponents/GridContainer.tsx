import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-[1248px] w-full mx-auto px-4">{children}</div>
}
