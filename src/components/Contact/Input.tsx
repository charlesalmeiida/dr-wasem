import { ReactNode } from "react"

interface InputProps {
  children: ReactNode
  type: string
  id: string
  placeholder: string
}

export function Input({ children, type, id, placeholder }: InputProps) {
  return (
    <div className="flex flex-col space-y-4">
      <label
        htmlFor={id}
        className="font-nunito font-bold text-lg text-gray-950"
      >
        {children}
      </label>
      <input
        type={type}
        name={type}
        id={id}
        placeholder={placeholder}
        className="border-x h-14 rounded-lg border-gray-700 bg-gray-600 focus:outline-none focus:border-2  focus:border-blue pl-6 py-4 max-w-[488px]"
      />
    </div>
  )
}
