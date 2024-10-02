import { Container } from "@/components/Global/GridContainer"
import Image from "next/image"
import Link from "next/link"
import { TagCalendar } from "../TagCalendar"
import { SimilarArticles } from "./SimilarArticles"

export function Post() {
  return (
    <>
      <section className="py-28">
        <Container>
          <div className="text-center">
            <div className="mx-auto w-fit">
              <TagCalendar />
            </div>
            <h2 className="font-nunito text-gray-950 font-semibold mt-14 max-w-[904px] mx-auto">
              Medição do soro do neurofilamento e ressonância magnética na
              esclerose múltipla
            </h2>
            <div className="flex items-center mx-auto w-fit gap-6 mt-12">
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
            className="mt-14"
            src="/img/image-blog-post.png"
            width={1216}
            height={352}
            alt="Imagem do post do blog"
          />
          <div className="flex flex-col items-start ml-52">
            <h4 className="font-nunito font-semibold text-gray-950 mt-24 max-w-[747px]">
              Investigadores analisaram a relação temporal entre os níveis
              séricos de neurofilamentos de cadeia leve e a identificação de
              lesões na ressonância magnética com contraste.
            </h4>
            <div className="space-y-8 mt-6 font-inter text-base leading-6 text-gray-950 opacity-80 max-w-[800px]">
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
              <p className="font-inter text-base leading-6 text-gray-950 opacity-80 max-w-[800px]">
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
            <div className="space-y-6 mt-6">
              <h6 className="font-nunito font-bold text-gray-950">CITAÇÕES:</h6>
              <p className="font-inter text-base leading-6 text-gray-950 opacity-80 max-w-[800px]">
                <div className="space-y-6">
                  <i className="block">
                    Fox RJ et al. Temporal relationship between serum
                    neurofilament light chain and radiologic disease activity in
                    patients with multiple sclerosis. Neurology 2024 May 14;
                    102:e209357. (https://doi.org/10.1212/WNL.0000000000209357)
                  </i>
                  <span className="block">
                    Tradução: Automática do Google Chrome com Adaptação de
                    Afonso Freitas Revisão científica: Dr. Matheus Wasem 
                  </span>
                </div>
                <div className="space-y-6 mt-6">
                  <span className="block">Link do artigo original:</span>
                  <Link
                    className="font-inter text-base leading-6 text-blue underline max-w-[800px]"
                    href={
                      "https://www.jwatch.org/na57513/2024/06/18/neurofilament-serum-measurement-and-magnetic-resonance"
                    }
                  >
                    https://www.jwatch.org/na57513/2024/06/18/neurofilament-serum-measurement-and-magnetic-resonance
                  </Link>
                </div>
                <div className="mt-6">
                  <span>Imagem retirada de:</span>
                  <Link
                    className="font-inter text-base leading-6 ml-1 text-blue underline max-w-[800px]"
                    href={"https://www.noticiasensalud.com"}
                  >
                    https://www.noticiasensalud.com
                  </Link>
                </div>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <SimilarArticles />
    </>
  )
}
