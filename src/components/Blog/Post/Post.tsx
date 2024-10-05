import { Container } from "@/components/Global/GridContainer"
import Image from "next/image"
import { TagCalendar } from "../TagCalendar"
import { SimilarArticles } from "./SimilarArticles"

export function Post() {
  return (
    <>
      <section className="py-14 md:py-28">
        <Container>
          <div className="text-center">
            <div className="mx-auto w-fit">
              <TagCalendar />
            </div>
            <h2 className="font-nunito text-gray-950 font-semibold mt-8 text-3xl md:text-[40px] md:mt-14 max-w-[904px] mx-auto">
              Medição do soro do neurofilamento e ressonância magnética na
              esclerose múltipla
            </h2>
            <div className="flex items-center mx-auto w-fit gap-6 mt-6 md:mt-12">
              <span className="font-inter text-base font-medium text-gray-900">
                Esclerose Múltipla
              </span>
              <div className="w-2 h-2 bg-gray-700 rounded-[50%]"></div>
              <span className="font-inter text-base font-medium text-gray-900">
                7 minutos de leitura
              </span>
            </div>
          </div>
          <Image
            className="mt-14 h-[30vh] object-cover rounded-lg"
            src="/img/image-blog-post.png"
            width={1216}
            height={352}
            alt="Imagem do post do blog"
          />
          <div className="flex flex-col items-start ml-0 lg:ml-52">
            <h4 className="font-nunito font-semibold text-gray-950 mt-14 lg:mt-24 max-w-[747px]">
              Investigadores analisaram a relação temporal entre os níveis
              séricos de neurofilamentos de cadeia leve e a identificação de
              lesões na ressonância magnética com contraste.
            </h4>
            <div className="space-y-8 mt-6 font-inter text-base leading-6 text-gray-950 opacity-80 w-full max-w-[100%] lg:max-w-[800px]">
              <p>
                Em pacientes com esclerose múltipla (EM), acredita-se que um
                alto nível de neurofilamentos de cadeia leve sérico (sNfL)
                representa tanto a atividade inflamatória aguda que interrompe a
                integridade do axónio quanto a correlação com a atividade na
                ressonância magnética (RM). Para avaliar a relação entre os
                níveis de sNfL e exames de ressonância magnética, os
                investigadores analisaram retrospectivamente o estudo RESTORE,
                que incluiu amostras mensais de ressonância magnética e soro. Os
                investigadores do RESTORE randomizaram pacientes estáveis em
                natalizumab para continuar o natalizumab ou mudar para placebo
                ou outra terapia por 24 semanas, antes de retomar o natalizumab
                nas semanas 28 a 52. Tanto o estudo RESTORE quanto esta análise
                foram financiados pela indústria.
              </p>
              <p>
                De 166 pacientes com amostras de soro para determinação de NfL
                (linha de base mediana de cerca de ~10 pg/mL), 65 tinham lesões
                com realce de gadolínio (Gd+). sNfL elevado foi observado no
                grupo de pacientes com lesão Gd+ e aumentou concordantemente com
                o número de Gd+. O pico de sNfL ocorreu em média 9 semanas após
                a identificação das lesões por RM. Das elevações de sNfL, 80%
                ocorreram após uma lesão Gd+. No entanto, a maioria das lesões
                Gd+ não foi associada ao aumento de sNfL ultrapassando o limite
                do percentil 95 ( 19,6 pg/mL) dos níveis em pacientes sem lesões
                Gd+. O pico de sNfL &gt;19,6 pg/mL teve uma sensibilidade de
                27,9% e uma especificidade de 91,8% para lesões Gd+.
              </p>
            </div>
            <div className="space-y-6 mt-6">
              <h6 className="font-nunito font-bold text-gray-950">
                COMENTÁRIO:
              </h6>
              <p className="font-inter text-base leading-6 text-gray-950 opacity-80 w-full max-w-[100%] lg:max-w-[800px]">
                Embora os níveis de sNfL normalmente aumentassem nas semanas
                seguintes a uma lesão Gd+, nem todos os pacientes com lesões
                tiveram elevações de sNfL significativamente aumentadas. A
                medida de sNfL tem alta especificidade, mas baixa sensibilidade
                para lesões Gd+. Isso sugere que as medições de sNfL podem não
                substituir as varreduras de ressonância magnética, mas podem
                fornecer informações adicionais sobre a atividade da doença.
                Aumentos em sNfL podem estar relacionados à localização e
                duração das lesões Gd+.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <SimilarArticles />
    </>
  )
}
