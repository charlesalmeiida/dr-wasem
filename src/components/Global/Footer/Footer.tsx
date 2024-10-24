import Image from "next/image"
import { Container } from "../GridContainer"
import { IconsSocial } from "./IconsSocials"
import { ItemNav } from "../Header/ItemNav"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="pt-14 pb-4 lg:pt-28 lg:pb-20 lg:py-20 bg-blue">
      <Container>
        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 justify-between items-center lg:items-center">
          <div>
            <Image
              src="/svg/logo-footer.svg"
              width={168}
              height={76}
              alt="logo Dr. Matheus Wasem"
            />
          </div>
          <div className="flex items-center gap-14">
            <IconsSocial
              url="https://www.instagram.com/drmatheuswasem/"
              logo="instagram"
              socialName="Instagram"
              height={20}
              width={20}
            />
            <IconsSocial
              url="https://www.youtube.com/drmatheuswasem/"
              logo="youtube"
              socialName="YouTube"
              height={20}
              width={29}
            />
            <IconsSocial
              url="https://www.facebook.com/drmatheuswasem/"
              logo="facebook"
              socialName="Facebook"
              height={24}
              width={12}
            />
          </div>
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row  items-center mt-24">
          <span className="block font-inter text-sm font-sm mt-10 lg:mt-0 text-gray-500 opacity-80">
            © Copyright 2024. Todos os direitos reservados
          </span>
          <nav>
            <ul className="flex items-center gap-14">
              <ItemNav
                link="#sobre"
                className="text-gray-500 hover:text-gray-800"
              >
                Sobre
              </ItemNav>
              <ItemNav
                link="/blog"
                className="text-gray-500 hover:text-gray-800"
              >
                Blog
              </ItemNav>
              <ItemNav
                link="#localizacao"
                className="text-gray-500 hover:text-gray-800"
              >
                Localização
              </ItemNav>
            </ul>
          </nav>
        </div>
      </Container>
      <div className="fixed z-10 right-5 bottom-5 lg:right-10 lg:bottom-10">
        <Link href="https://wa.me/5511999999999">
          <Image
            src="/svg/logo-whatsapp.svg"
            width={68}
            height={40}
            alt="logo WhatsApp"
          />
        </Link>
      </div>
    </footer>
  )
}
