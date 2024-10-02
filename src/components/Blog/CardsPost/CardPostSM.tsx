import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

export function CardPostSM() {
  return (
    <Link href="/blog/blog-post">
      <div className="overflow-hidden rounded-lg space-x-3 flex">
        <Image
          src="/img/image-post-sm.png"
          className="hover:scale-105 transition-all max-w-[104px] w-full h-full object-cover"
          width={104}
          height={124}
          alt="Imagem do post do blog"
        />
        <div className="space-y-4 mb-7">
          <span className="font-inter text-sm font-medium text-gray-900">
            ESCLEROSE MÚLTIPLA
          </span>
          <h6 className="font-nunito text-gray-950 font-bold max-w-[265px] line-clamp-3">
            Medição do soro do neurofilamento e ressonância magnética na
            esclerose múltipla
          </h6>
        </div>
      </div>
      <TagCalendar />
    </Link>
  )
}
