import Image from "next/image"
import { Button } from "../../GlobalComponents/Button"
import { Container } from "../../GlobalComponents/GridContainer"
import { TextTag } from "../TextTag"

export function Hero() {
  return (
    <main>
      <section className="bg-img h-full pt-28 bg-cover">
        <Container>
          <div className="flex justify-between items-start">
            <div className="mt-4">
              <div className="space-y-3">
                <TextTag className="text-gray-500">DR. MATHEUS WASEM</TextTag>
                <h1 className="text-gray-500 font-nunito font-bold">
                  Médico Neurologista
                </h1>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <span className="block w-[2px] h-24 bg-gray-500 opacity-80"></span>
                <p className="font-inter text-gray-500 text-2xl leading-9 opacity-80 font-normal max-w-[483px]">
                  Especialista em Neurologia no Paraná. Cuido de Você e da sua
                  Esclerose Múltipla
                </p>
              </div>
              <div className="mt-12">
                <Button url="/contato" color="primary" size="base">
                  Agende sua consulta
                </Button>
              </div>
            </div>
            <Image
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