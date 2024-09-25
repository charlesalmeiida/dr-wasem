import Image from "next/image"

interface TagAboutTheDoctorProps {
  about: string
}

export function TagAboutTheDoctor({ about }: TagAboutTheDoctorProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/svg/icon-check.svg"
        width={16}
        height={11}
        alt="Ícone de check"
      />
      <span className="text-gray-950 font-inter text-base font-medium">
        {about}
      </span>
    </div>
  )
}
