import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

export function CardPostMd() {
  return (
    <div className="max-w-[280px] block">
      <Link href="/blog/blog-post" className="space-y-6">
        <div className="overflow-hidden rounded-lg w-fit">
          <Image
            className="hover:scale-105 transition-all max-w-[280px] w-full h-full object-cover"
            src="/img/image-post-default.png"
            width={280}
            height={216}
            alt="Imagem do post do blog"
          />
        </div>
        <div className="space-y-4">
          <span className="font-inter block text-base font-medium text-gray-900">
            ESCLEROSE MÚLTIPLA
          </span>
          <h6 className="font-nunito text-gray-950 font-bold max-w-[265px]">
            Foco no sistema de recompensa como solução para a fadiga relacionada
            à esclerose múltipla?
          </h6>
          <TagCalendar />
        </div>
      </Link>
    </div>
  )
}
