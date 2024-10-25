"use client"

import { Container } from "../../Global/GridContainer"
import { BenefitBullet } from "./Benefit"
import { BulletsInfo } from "./ArrayBullets"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function BulletsBenefits() {
  const benefitBulletRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const benefitBullet = benefitBulletRef.current

    tl.fromTo(
      benefitBullet,
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    )
  }, [])

  return (
    <section className="py-14 lg:py-20 bg-gray-600">
      <Container>
        <div
          ref={benefitBulletRef}
          className="flex flex-wrap justify-center gap-10 lg:gap-0 lg:justify-between items-start"
        >
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
