import { About } from "@/components/About/About"
import { BlogSection } from "@/components/Blog/BlogSection/BlogSection"
import { BulletsBenefits } from "@/components/BulletsBenefits/BulletsBenefits"
import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Hero } from "@/components/Hero/Hero"

export function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <BulletsBenefits />
      <About />
      <BlogSection />
      <Footer />
    </>
  )
}
