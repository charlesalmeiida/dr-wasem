"use client"

import Image from "next/image"
import { Container } from "../../Global/GridContainer"
import { TagAboutTheDoctor } from "./TagAboutTheDoctor"
import { TextTag } from "../TextTag"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export function About() {
  const textAboutRef = useRef(null)
  const imageAboutRef = useRef(null)

  useEffect(() => {
    const textAbout = textAboutRef.current
    const imageAbout = imageAboutRef.current
    const tl = gsap.timeline()

    gsap.registerPlugin(ScrollTrigger)

    tl.fromTo(
      textAbout,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textAbout,
          scrub: true,
          start: "top bottom",
          end: "center center",
        },
      }
    ).fromTo(
      imageAbout,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageAbout,
          scrub: true,
          start: "top bottom",
          end: "center center",
        },
      }
    )
  }, [])

  return (
    <section className="py-14 lg:py-32" id="sobre">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-around">
          <div
            ref={imageAboutRef}
            className="flex opacity-0 flex-col mx-auto lg:mx-0 items-center"
          >
            <Image
              className="max-w-[75%] lg:max-w-[100%]"
              src="/img/image-about.png"
              width={384}
              height={449}
              alt="Foto do Dr. Matheus Wasem na seção de Sobre"
            />
            <div className="flex gap-10 lg:gap-14 mt-6">
              <TagAboutTheDoctor about="CRM/PR 37.001" />
              <TagAboutTheDoctor about="RQE 26.459" />
            </div>
          </div>
          <div ref={textAboutRef} className="mt-10 opacity-0 lg:mt-0 mx-auto lg:mx-0">
            <TextTag className="text-orange text-center lg:text-left block">
              SOBRE
            </TextTag>
            <div className="space-y-4 lg:space-y-6 mt-8">
              <h2 className="text-gray-950 font-nunito font-semibold">
                Dr. Matheus Wasem
              </h2>
              <p className="text-gray-900 font-inter text-base max-w-[454px]">
                Dr. Matheus Wasem é médico neurologista. Nascido no interior do
                Paraná, ele teve 10 anos de sua formação em Curitiba. Se
                aprofundou na Esclerose Múltipla com observership no hospital
                Johns Hopkins e com master in neuroimmunology pela Universidade
                Autónoma de Barcelona, vinculada ao Centro de Tratamento de
                Esclerose Múltipla da Catalunha – CEM-CAT. <br /> <br /> Há anos
                ele atua em suas redes sociais, diariamente, para tirar dúvidas
                de pacientes e familiares com Esclerose Múltipla. <br />
                <br /> O Dr. Matheus é um médico acessível para pacientes e
                seguidores. Realiza consultas médicas online e presencial para
                pacientes que tem Esclerose Múltipla e familiares.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
