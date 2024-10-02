import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "@/components/Homepage/TextTag"
import { CardPostDefault } from "../../Blog/CardsPost/CardPostDefault"
import { CardPostSM } from "../../Blog/CardsPost/CardPostSM"
import { Button } from "@/components/Global/Button"

export function BlogSection() {
  return (
    <section className="py-28">
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
        <div className="mx-auto mt-20 block w-fit">
          <Button url="/blog" color="secondary" size="sm">
            Mais publicações
          </Button>
        </div>
      </Container>
    </section>
  )
}
