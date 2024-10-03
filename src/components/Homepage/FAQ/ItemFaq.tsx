import Image from "next/image"
import { ReactNode } from "react"
import classNames from "classnames"

interface ItemFaqProps {
  question: string
  toggleFaq: () => void
  children: ReactNode
  isActive: boolean
}

export function ItemFaq({
  question,
  toggleFaq,
  children,
  isActive,
}: ItemFaqProps) {
  return (
    <>
      <button
        onClick={toggleFaq}
        className="flex items-center last:rounded-br-lg justify-between border-[0.5px] w-full md:max-w-[685px] last:border-b-[0.5px] border-gray-900 border-opacity-40 p-10"
      >
        <span className="block font-nunito text-base lg:text-lg font-semibold max-w-[85%] text-gray-950  text-left">
          {question}
        </span>
        <Image
          src="/svg/icon-faq.svg"
          width={12}
          height={12}
          alt="Ícone de FAQ"
          className={classNames("transition-transform duration-300", {
            "rotate-90": isActive,
          })}
        />
      </button>

      <div
        className={classNames(
          "overflow-hidden transition-opacity  duration-500 ease-in-out",
          {
            "opacity-100": isActive,
            "opacity-0 pointer-events-none": !isActive,
          }
        )}
      >
        {children}
      </div>
    </>
  )
}
