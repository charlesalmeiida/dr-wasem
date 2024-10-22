"use client"

import { useEffect, useState } from "react"
import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "../TextTag"
import { TestimonialCard } from "./TestimonialCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { arrayReviews } from "./ArrayReviews"

export function Reviews() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="py-14 bg-blue" id="dep">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="space-y-6 shrink-0 text-center lg:text-left mb-10">
            <TextTag className="text-gray-500">REVIEW</TextTag>
            <h2 className="font-nunito font-semibold text-gray-500">
              O que dizem os pacientes
            </h2>
          </div>
          <div className="custom-pagination justify-center flex lg:justify-end"></div>
        </div>
        <div className="mt-14">
          <Swiper
            slidesPerView={4}
            spaceBetween={32}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.4,
              },
              1024: {
                slidesPerView: 3.1,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
          >
            {arrayReviews.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={item.name}
                  testimonial={item.testimonial}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 24px;
              height: 2px;
              background-color: #ced4da;
              margin-right: 8px;
              opacity: 0.5;
              border-radius: 0;
              transition: all 0.3s ease; /* Transição suave para todas as propriedades */
            }
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #f8f9fa;
              opacity: 1;
              width: 28px; /* Aumentar a largura do bullet ativo */
            }
          `}</style>
        </div>
      </Container>
    </section>
  )
}
