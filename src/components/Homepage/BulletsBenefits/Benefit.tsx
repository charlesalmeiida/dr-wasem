import Image from "next/image"

interface BenefitBulletProps {
  icon: string
  titleBenefit: string
  textBenefit: string
}

export function BenefitBullet({
  icon,
  titleBenefit,
  textBenefit,
}: BenefitBulletProps) {
  return (
    <div className="flex gap-6">
      <div>
        <Image src={icon} width={34} height={34} alt="Ícone Médico Acessível" />
      </div>
      <div className="max-w-56 space-y-2">
        <span className="text-gray-950 font-nunito text-lg font-bold leading-5">
          {titleBenefit}
        </span>
        <p className="text-gray-900 font-inter text-base opacity-80">
          {textBenefit}
        </p>
      </div>
    </div>
  )
}
