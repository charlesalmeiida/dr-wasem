import { Container } from "@/components/Global/GridContainer"
import { CardPostMd } from "../CardsPost/CardPostMd"
import { Button } from "@/components/Global/Button"

export function SimilarArticles() {
  return (
    <section className="pb-28">
      <Container>
        <div className="text-center">
          <h3 className="font-nunito font-bold text-gray-950">
            Artigos semelhantes
          </h3>
        </div>
        <div className="flex justify-center gap-[84px] mt-16">
          <CardPostMd />
          <CardPostMd />
          <CardPostMd />
        </div>
        <div className="mx-auto w-fit mt-20">
          <Button url="/" color="secondary" size="sm">
            Carregar mais
          </Button>
        </div>
      </Container>
    </section>
  )
}