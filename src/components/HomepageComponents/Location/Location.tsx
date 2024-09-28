import { Container } from "@/components/GlobalComponents/GridContainer"
import { TextTag } from "../TextTag"
import { Button } from "@/components/GlobalComponents/Button"
import { Maps } from "./Maps"

export function Location() {
  return (
    <section className="pb-28">
      <Container>
        <div className="text-center">
          <TextTag className="text-orange">LOCALIZAÇÃO</TextTag>
          <h2 className="font-nunito font-semibold text-gray-950">
            Onde nos encontrar
          </h2>
        </div>
        <div className="flex justify-between mt-14 max-w-[933px] items-center mx-auto">
          <div>
            <Maps />
          </div>
          <div className="max-w-[331px] space-y-7">
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
            <Button url="/contato" color="blue" size="base">
              Saiba mais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
