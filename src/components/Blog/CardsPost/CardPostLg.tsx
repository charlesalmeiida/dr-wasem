import { Container } from "@/components/Global/GridContainer"
import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"

interface CardPostLgProps {
  imagePrimary: string
  theme: string
  title: string
  date: string
  slug: string
}

export function CardPostLg({
  date,
  imagePrimary,
  theme,
  title,
  slug,
}: CardPostLgProps) {
  return (
    <section>
      <Container>
        <Link
          href={`/blog/${slug}`}
          className="flex flex-col md:flex-row justify-center items-center pb-14 lg:pb-28 gap-10"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              className="hover:scale-105 transition-all max-w-[100%] w-full h-full object-cover"
              src={imagePrimary}
              width={488}
              height={304}
              alt="Imagem do post do blog"
            />
          </div>
          <div>
            <span className="font-inter text-base text-gray-900 font-medium">
              {theme}
            </span>
            <h3 className="font-nunito mt-5 max-w-[479px] text-gray-950 font-bold">
              {title}
            </h3>
            <div className="flex items-center mt-10 gap-4">
              <span className="font-inter text-base text-gray-900">
                Dr. Matheus Wasem
              </span>
              <div className="w-2 h-2 bg-gray-700 rounded-[50%]"></div>
              <TagCalendar date={date} />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  )
}
