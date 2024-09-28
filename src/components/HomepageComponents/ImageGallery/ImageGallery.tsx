"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper"
import { Navigation, FreeMode, Thumbs } from "swiper/modules"
import "swiper/swiper-bundle.css"
import Image from "next/image"
import { Container } from "@/components/GlobalComponents/GridContainer"
import { images } from "@/components/HomepageComponents/ImageGallery/images"

export const ImageGallery = () => {
  const [isClient, setIsClient] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="pb-28">
      <Container>
        <h2 className="text-gray-950 font-nunito font-semibold mx-auto block w-fit mb-20">
          Galeria de fotos
        </h2>
        <div className="space-y-8">
          <div>
            <Swiper
              navigation={false}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              pagination={{ type: "fraction" }}
              modules={[Navigation, Thumbs, FreeMode]}
              className="mySwiper2"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    className="max-w-[500px] mx-auto"
                    src={image.src}
                    alt="Imagem do doutor"
                    width={697}
                    height={421}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="max-w-[500px] mx-auto">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={32}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper cursor-pointer"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    className="max-w-[150px]"
                    src={image.src}
                    alt="Imagem do doutor"
                    width={697}
                    height={421}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  )
}
