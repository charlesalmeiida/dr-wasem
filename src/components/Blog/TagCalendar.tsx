import Image from "next/image"

export function TagCalendar() {
  return (
    <div className="flex gap-2">
      <Image
        src="/svg/icon-calendar.svg"
        width={16}
        height={18}
        alt="Ícone de calendário"
      />
      <span className="font-inter text-base font-medium text-gray-900">
        12 fevereiro, 2024
      </span>
    </div>
  )
}
