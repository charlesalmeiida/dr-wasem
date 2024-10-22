"use client"

import Hamburger from "hamburger-react"
import { useState } from "react"
import { ItemNav } from "./ItemNav"
import { Button } from "../Button"

export function MenuMobile() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="md:mr-6 lg:hidden block">
        <Hamburger
          rounded
          easing="ease-in"
          color="#212529"
          size={30}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div
        className={`absolute shadow-shadowShape bg-blue lg:hidden top-20 right-0 h-fit w-full z-10 py-14 flex flex-col gap-6 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="text-center space-y-10">
            <ItemNav link="#sobre" className="text-gray-500">
              Sobre
            </ItemNav>
            <ItemNav link="/blog" className="text-gray-500">
              Blog
            </ItemNav>
            <ItemNav link="#localizacao" className="text-gray-500">
              Localização
            </ItemNav>
          </ul>
        </nav>
        <div className="mx-auto md:hidden w-fit mt-4">
          <Button color="primary" size="sm" url="/contato">
            Agende sua consulta
          </Button>
        </div>
      </div>
    </>
  )
}
