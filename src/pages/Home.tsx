import { Footer } from "@/components/GlobalComponents/Footer/Footer"
import { Header } from "@/components/GlobalComponents/Header/Header"
import { About } from "@/components/HomepageComponents/About/About"
import { BlogSection } from "@/components/HomepageComponents/BlogSection/BlogSection"
import { BulletsBenefits } from "@/components/HomepageComponents/BulletsBenefits/BulletsBenefits"
import { Hero } from "@/components/HomepageComponents/Hero/Hero"
import ImageGallery from "@/components/HomepageComponents/ImageGallery/ImageGallery"

export function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <BulletsBenefits />
      <About />
      <ImageGallery />
      <BlogSection />
      <Footer />
    </>
  )
}
