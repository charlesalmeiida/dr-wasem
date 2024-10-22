import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

interface CardPostSMProps {
  imagePrimary: string
  theme: string
  title: string
  date: string
  slug: string
}

export function CardPostSM({
  imagePrimary,
  theme,
  title,
  date,
  slug,
}: CardPostSMProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="overflow-hidden rounded-lg space-x-3 flex">
        <Image
          src={imagePrimary}
          className="hover:scale-105 transition-all object-cover rounded-lg max-w-[104px] h-[124px] w-full"
          width={104}
          height={124}
          alt="Imagem do post do blog"
        />
        <div className="space-y-4 mb-7">
          <span className="font-inter text-sm uppercase font-medium text-gray-900">
            {theme}
          </span>
          <h6 className="font-nunito text-gray-950 font-bold max-w-80 lg:max-w-[265px] line-clamp-3">
            {title}
          </h6>
        </div>
      </div>
      <TagCalendar date={date} />
    </Link>
  )
}
