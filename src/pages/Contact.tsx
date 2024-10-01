import { FormSection } from "@/components/ContactComponents/FormSection"
import { Footer } from "@/components/GlobalComponents/Footer/Footer"
import { Container } from "@/components/GlobalComponents/GridContainer"
import { Header } from "@/components/GlobalComponents/Header/Header"

export default function Contact() {
  return (
    <>
      <Header />
      <section className="pt-20 pb-28">
        <Container>
          <h2 className="font-nunito font-semibold text-gray-950 max-w-[488px]">
            Entre em contato com o Dr. Matheus Wasem 👋
          </h2>
          <FormSection />
        </Container>
      </section>
      <Footer />
    </>
  )
}
