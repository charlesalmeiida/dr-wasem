import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

interface CardPostMdProps {
  imagePrimary: string
  theme: string
  title: string
  date: string
  slug: string
}

export function CardPostMd({
  imagePrimary,
  theme,
  title,
  date,
  slug,
}: CardPostMdProps) {
  return (
    <div className="max-w-[280px] block">
      <Link href={`/blog/${slug}`} className="space-y-6">
        <div className="overflow-hidden rounded-lg w-fit">
          <Image
            className="hover:scale-105 transition-all max-w-[280px] w-full h-full object-cover"
            src={imagePrimary}
            width={280}
            height={216}
            alt="Imagem do post do blog"
          />
        </div>
        <div className="space-y-4">
          <span className="font-inter block text-base font-medium text-gray-900">
            {theme}
          </span>
          <h6 className="font-nunito text-gray-950 font-bold max-w-[265px]">
            {title}
          </h6>
          <TagCalendar date={date} />
        </div>
      </Link>
    </div>
  )
}
