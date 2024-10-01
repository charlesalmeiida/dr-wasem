"use client"

import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "../TextTag"
import Image from "next/image"
import { ItemFaq } from "./ItemFaq"
import { useState } from "react"
import { faq } from "./ArrayQuestions"

export function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <section className="pb-28">
      <Container>
        <div className="text-center pb-28">
          <TextTag className="text-orange">FAQ</TextTag>
          <h2 className="font-nunito font-semibold text-gray-950">
            Perguntas e respostas
          </h2>
        </div>
        <div className="flex items-center">
          <div>
            <Image
              src="/img/image-faq.png"
              width={592}
              height={649}
              alt="Imagem do Dr. Matheus Wasem na seção de FAQ"
            />
          </div>
          <div>
            {faq.map((item, index) => (
              <ItemFaq
                key={index}
                question={item.question}
                toggleFaq={() => toggleFaq(index)}
                isActive={openFaqIndex === index}
              >
                {openFaqIndex === index && (
                  <p className="border-gray-900 border-opacity-40 border-t-gray-300 border-[0.5px] p-10 max-w-[650px]">
                    {item.answer}
                  </p>
                )}
              </ItemFaq>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
