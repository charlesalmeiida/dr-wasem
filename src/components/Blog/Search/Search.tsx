import { Container } from "@/components/Global/GridContainer"
import Image from "next/image"

export function Search() {
  return (
    <section className="py-28">
      <Container>
        <div className="text-center space-y-6">
          <h1 className="font-nunito font-bold text-orange">Blog</h1>
          <p className="font-inter text-gray-950 text-base">
            Informações, novidades e tratamentos de Esclerose Múltipla
          </p>
          <div className="flex justify-center">
            <input
              className="w-full max-w-[592px] focus:outline-none h-14 pl-6 bg-slate-100 rounded-s-lg"
              type="text"
              placeholder="Busque por tópico ou palavras-chave..."
            />
            <button className="bg-slate-100 pr-6 rounded-e-lg block ">
              <Image
                src="/svg/icon-search.svg"
                width={18}
                height={18}
                alt="Ícone de busca"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
