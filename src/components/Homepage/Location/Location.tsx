import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "../TextTag"
import { Button } from "@/components/Global/Button"
import { Maps } from "./Maps"

export function Location() {
  return (
    <section className="pb-14 lg:pb-28" id="localizacao">
      <Container>
        <div className="text-center">
          <TextTag className="text-orange">LOCALIZAÇÃO</TextTag>
          <h2 className="font-nunito font-semibold text-gray-950">
            Onde nos encontrar
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-14 max-w-[933px] items-start mx-auto">
          <div className="mx-auto lg:mx-0 w-full h-full">
            <Maps />
          </div>
          <div className="max-w-[331px] mt-10 text-center lg:text-left mx-auto space-y-7">
            <h4 className="font-nunito font-semibold text-gray-950">
              INC Instituto de Neurologia e Cardiologia de Curitiba
            </h4>
            <p className="text-base font-inter text-gray-950">
              Rua Jeremias Maciel Perretto, 300 - Campo Comprido, Curitiba - PR,
              81210-310
            </p>
            <span className="block font-nunito font-bold text-lg text-orange">
              Telefone: (41) 98748-2906
            </span>
            <div className="mx-auto lg:mx-0 w-fit">
              <Button url="/contato" color="blue" size="base">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
