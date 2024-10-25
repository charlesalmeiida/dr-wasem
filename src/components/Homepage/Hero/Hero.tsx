"use client"

import Image from "next/image"
import { Button } from "../../Global/Button"
import { Container } from "../../Global/GridContainer"
import { TextTag } from "../TextTag"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function Hero() {
  const textHeroRef = useRef(null)
  const imageHeroRef = useRef(null)

  useEffect(() => {
    const textHero = textHeroRef.current
    const imageHero = imageHeroRef.current

    const tl = gsap.timeline()

    tl.fromTo(
      textHero,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    ).fromTo(
      imageHero,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      ">-0.5"
    )
  }, [])

  return (
    <main>
      <section className="bg-img h-full pt-14 lg:pt-28 bg-cover">
        <Container>
          <div className="flex flex-col lg:flex-row gap-14 justify-between items-start">
            <div
              ref={textHeroRef}
              className="mt-4 opacity-0 text-center mx-auto lg:text-left lg:mx-0"
            >
              <div className="space-y-3">
                <TextTag className="text-gray-500">DR. MATHEUS WASEM</TextTag>
                <h1 className="text-gray-500 font-nunito font-bold">
                  Médico Neurologista
                </h1>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <span className="block w-[2px] h-24 bg-gray-500 opacity-80"></span>
                <p className="font-inter text-gray-500 text-xl lg:text-2xl leading-9 opacity-80 font-normal max-w-[483px]">
                  Especialista em Neurologia no Paraná. Cuido de Você e da sua
                  Esclerose Múltipla
                </p>
              </div>
              <div className="mt-12 mx-auto w-fit lg:mx-0">
                <Button url="/contato" color="primary" size="base">
                  Agende sua consulta
                </Button>
              </div>
            </div>
            <Image
              ref={imageHeroRef}
              className="mx-auto opacity-0 lg:mx-0 max-w-[75%]"
              src="/img/img-hero.png"
              width={407}
              height={512}
              alt="Foto do Dr. Matheus Wasem"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
