"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, FreeMode, Thumbs } from "swiper/modules"
import "swiper/swiper-bundle.css"
import Image from "next/image"
import { Container } from "@/components/GlobalComponents/GridContainer"

const images = [
  {
    src: "/img/image-doctor-01.png",
  },
  {
    src: "/img/image-doctor-02.png",
  },
  {
    src: "/img/image-doctor-03.png",
  },
]

const ImageGallery = () => {
  const [isClient, setIsClient] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="pb-28">
      <Container>
        <div className="">
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
                  src={image.src}
                  alt="Imagem do doutor"
                  width={697}
                  height={421}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper cursor-pointer"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt="Imagem do doutor"
                  width={697}
                  height={421}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default ImageGallery
