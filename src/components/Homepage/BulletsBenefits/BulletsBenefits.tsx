import { Container } from "../../Global/GridContainer"
import { BenefitBullet } from "./Benefit"
import { BulletsInfo } from "./ArrayBullets"

export function BulletsBenefits() {
  return (
    <section className="py-14 lg:py-20 bg-gray-600">
      <Container>
        <div className="flex flex-wrap justify-center gap-10 lg:gap-0 lg:justify-between items-start">
          {BulletsInfo.map((item, index) => (
            <BenefitBullet
              key={index}
              icon={item.icon}
              titleBenefit={item.titleBenefit}
              textBenefit={item.textBenefit}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
