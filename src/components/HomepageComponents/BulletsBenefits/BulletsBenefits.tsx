import { Container } from "../../GlobalComponents/GridContainer"
import { BenefitBullet } from "./Benefit"

export function BulletsBenefits() {
  return (
    <section className="py-20 bg-gray-600">
      <Container>
        <div className="flex justify-between items-start">
          <BenefitBullet
            icon="/svg/icon-help.svg"
            titleBenefit="Médico acessível"
            textBenefit="Todos meus pacientes tem contato total comigo."
          />
          <BenefitBullet
            icon="/svg/icon-estetocopio.svg"
            titleBenefit="Individualidade"
            textBenefit="Cada paciente é tratado de maneira única e tem sua história valorizada."
          />
          <BenefitBullet
            icon="/svg/icon-global-health.svg"
            titleBenefit="Decisão compartilhada"
            textBenefit="Os pacientes sempre serão protagonistas do próprio tratamento, me ajudando a tomar as decisões de seus medicamentos e exames."
          />
          <BenefitBullet
            icon="/svg/icon-hearth.svg"
            titleBenefit="Especialidade"
            textBenefit="Conhecimento técnico profundo em Esclerose Múltipla."
          />
        </div>
      </Container>
    </section>
  )
}
