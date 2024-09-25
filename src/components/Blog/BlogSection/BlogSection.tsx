import { Container } from "@/components/GridContainer"
import { TextTag } from "@/components/TextTag"
import { CardPostDefault } from "../CardsPost/CardPostDefault"
import { CardPostSM } from "../CardsPost/CardPostSM"

export function BlogSection() {
  return (
    <section className="pb-28">
      <Container>
        <div className="flex items-end justify-between max-w-4xl">
          <div className="space-y-6">
            <TextTag className="text-orange">BLOG</TextTag>
            <h2 className="text-gray-950 font-nunito font-semibold">
              Em destaque
            </h2>
          </div>
          <div>
            <h4 className="leading-7 font-nunito text-gray-950 font-semibold">
              Recentes
            </h4>
          </div>
        </div>
        <div className="mt-10 flex gap-[104px]">
          <CardPostDefault />
          <div className="flex flex-col gap-[30px]">
            <CardPostSM />
            <CardPostSM />
            <CardPostSM />
          </div>
        </div>
      </Container>
    </section>
  )
}
