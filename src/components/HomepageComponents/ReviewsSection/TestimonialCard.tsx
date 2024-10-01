import Image from "next/image"

export function TestimonialCard() {
  return (
    <div className="bg-gray-500 rounded-lg pt-4 h-64 w-fit px-4 border-2 border-gray-700">
      <div>
        <div className="flex items-center justify-between gap-[59px]">
          <div className="flex items-center gap-2">
            <Image
              src="/img/icon-testimonial-01.png"
              width={27}
              height={27}
              alt="Imagem do perfil do cliente"
            />
            <span className="font-nunito text-base font-semibold text-gray-950">
              Kamilla Morais
            </span>
          </div>
          <Image
            src="/svg/icon-google.svg"
            width={27}
            height={27}
            alt="Ícone do Google"
          />
        </div>
        <Image
          src="/svg/stars.svg"
          className="mt-2 ml-2"
          width={132}
          height={19}
          alt="Imagem de estrelas"
        />
        <p className="max-w-[240px] mt-6 font-inter text-base leading-6 text-gray-950 opacity-80 ml-2">
          Dr. Matheus é um excelente profissional especialista em esclerose
          múltipla, competente, didático e bem humorado. Recomendo de olhos
          fechados.
        </p>
      </div>
    </div>
  )
}
