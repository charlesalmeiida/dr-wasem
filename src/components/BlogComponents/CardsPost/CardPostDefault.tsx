import Image from "next/image"
import Link from "next/link"

export function CardPostDefault() {
  return (
    <Link href={"/blog/blog-post"} className="w-fit block">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="hover:scale-105 transition-all w-full h-full object-cover"
          src="/img/image-post-default.png"
          width={697}
          height={421}
          alt="Imagem do post do blog"
        />
      </div>
      <div className="flex justify-between max-w-[698px] mt-8">
        <span className="font-inter text-base font-medium text-gray-900">
          ESCLEROSE MÚLTIPLA
        </span>
        <div className="flex gap-2">
          <Image
            src="/svg/icon-calendar.svg"
            width={16}
            height={18}
            alt="Ícone de calendário"
          />
          <span className="font-inter text-base font-medium text-gray-900 opacity-80">
            12 fevereiro, 2024
          </span>
        </div>
      </div>
      <h3 className="font-nunito text-gray-950 font-bold leading-10 max-w-[697px] mt-7">
        Medição do soro do neurofilamento e ressonância magnética na esclerose
        múltipla
      </h3>
    </Link>
  )
}
