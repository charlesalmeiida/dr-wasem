import Image from "next/image"
import { Container } from "../GridContainer"
import { IconsSocial } from "./IconsSocials"
import { ItemNav } from "../Header/ItemNav"

export function Footer() {
  return (
    <footer className="py-20 bg-blue">
      <Container>
        <div className="flex justify-between items-end">
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
        <div className="flex justify-between items-center mt-24">
          <span className="block font-inter text-sm font-sm text-gray-500 opacity-80">
            © Copyright 2024. Todos os direitos reservados
          </span>
          <nav>
            <ul className="flex items-center gap-14">
              <ItemNav className="text-gray-500 hover:text-gray-800">
                Sobre
              </ItemNav>
              <ItemNav className="text-gray-500 hover:text-gray-800">
                Blog
              </ItemNav>
              <ItemNav className="text-gray-500 hover:text-gray-800">
                Localização
              </ItemNav>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
