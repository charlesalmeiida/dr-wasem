import { CardPostLg } from "@/components/Blog/CardsPost/CardPostLg"
import { CardPostMd } from "@/components/Blog/CardsPost/CardPostMd"
import { Search } from "@/components/Blog/Search/Search"
import { Button } from "@/components/Global/Button"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"

export default function BlogPage() {
  return (
    <>
      <Header />
      <Search />
      <CardPostLg />
      <div className="flex justify-center gap-[84px]">
        <CardPostMd />
        <CardPostMd />
        <CardPostMd />
      </div>
      <div className="mt-20 mx-auto block w-fit pb-28">
        <Button url="/blog" color="secondary" size="sm">
          Carregar mais
        </Button>
      </div>
      <Footer />
    </>
  )
}
