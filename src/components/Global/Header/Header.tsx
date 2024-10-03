import Image from "next/image"
import { ItemNav } from "./ItemNav"
import { Button } from "../Button"
import Link from "next/link"
import { Container } from "../GridContainer"
import { MenuMobile } from "./MenuMobile"

export function Header() {
  return (
    <header className="py-5 shadow-shadowShape sticky top-0 bg-white z-10">
      <Container>
        <div className="flex justify-between w-full">
          <div className="flex flex-1 justify-between items-center max-w-3xl">
            <Link href="/">
              <Image
                src="/svg/logo.svg"
                width={218}
                height={40}
                alt="logo Dr. Matheus Wasem"
              />
            </Link>
            <nav>
              <ul className="hidden lg:flex gap-14">
                <ItemNav className="hover:text-gray-800 text-gray-950">
                  Sobre
                </ItemNav>
                <ItemNav className="hover:text-gray-800 text-gray-950">
                  Blog
                </ItemNav>
                <ItemNav className="hover:text-gray-800 text-gray-950">
                  Localização
                </ItemNav>
              </ul>
            </nav>
          </div>
          <MenuMobile />
          <div className="hidden md:block">
            <Button url="/contato" color="secondary" size="sm">
              Entre em contato
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
