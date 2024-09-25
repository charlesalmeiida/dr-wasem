import Image from "next/image"
import Link from "next/link"

interface IconsSocialProps {
  url: string
  logo: string
  socialName: string
  height?: number
  width?: number
}

export function IconsSocial({
  url,
  logo,
  socialName,
  height,
  width,
}: IconsSocialProps) {
  return (
    <Link className="block" href={url} target="_blank">
      <Image
        src={`/svg/icon-${logo}.svg`}
        width={width}
        height={height}
        alt={`Logo do ${socialName}`}
      />
    </Link>
  )
}
