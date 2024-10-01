import { FormSection } from "@/components/Contact/FormSection"
import { Footer } from "@/components/Global/Footer/Footer"
import { Container } from "@/components/Global/GridContainer"
import { Header } from "@/components/Global/Header/Header"

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
