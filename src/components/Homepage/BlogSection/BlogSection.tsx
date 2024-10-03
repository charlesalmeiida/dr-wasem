import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "@/components/Homepage/TextTag"
import { CardPostDefault } from "../../Blog/CardsPost/CardPostDefault"
import { CardPostSM } from "../../Blog/CardsPost/CardPostSM"
import { Button } from "@/components/Global/Button"

export function BlogSection() {
  return (
    <section className="py-14 lg:py-28">
      <Container>
        <div className="flex items-end justify-between max-w-4xl">
          <div className="space-y-6">
            <TextTag className="text-orange">BLOG</TextTag>
            <h2 className="text-gray-950 font-nunito font-semibold">
              Em destaque
            </h2>
          </div>
          <div className="hidden lg:block">
            <h4 className="leading-7 font-nunito text-gray-950 font-semibold">
              Recentes
            </h4>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row lg:gap-[104px] gap-14">
          <CardPostDefault />
          <div className="flex flex-col mx-auto lg:mx-0 gap-[30px]">
            <h4 className="leading-7 lg:hidden font-nunito text-gray-950 font-semibold">
              Recentes
            </h4>
            <CardPostSM />
            <CardPostSM />
            <CardPostSM />
          </div>
        </div>
        <div className="mx-auto mt-14 lg:mt-20 block w-fit">
          <Button url="/blog" color="secondary" size="sm">
            Mais publicações
          </Button>
        </div>
      </Container>
    </section>
  )
}
