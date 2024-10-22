import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

interface CardPostDefaultProps {
  imagePrimary: string
  theme: string
  title: string
  date: string
  slug: string
}

export function CardPostDefault({
  imagePrimary,
  theme,
  title,
  date,
  slug,
}: CardPostDefaultProps) {
  return (
    <Link href={`/blog/${slug}`} className="w-fit block mx-auto lg:mx-0">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="hover:scale-105 transition-all max-h-[421px] w-full h-full object-cover"
          src={imagePrimary}
          width={697}
          height={421}
          alt="Imagem do post do blog"
        />
      </div>
      <div className="flex justify-between max-w-[698px] mt-8">
        <span className="font-inter uppercase text-base font-medium text-gray-900">
          {theme}
        </span>
        <TagCalendar date={date} />
      </div>
      <h3 className="font-nunito text-gray-950 font-bold leading-10 max-w-[697px] mt-7">
        {title}
      </h3>
    </Link>
  )
}
