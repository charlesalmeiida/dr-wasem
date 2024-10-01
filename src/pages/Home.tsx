import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import { About } from "@/components/Homepage/About/About"
import { BlogSection } from "@/components/Homepage/BlogSection/BlogSection"
import { BulletsBenefits } from "@/components/Homepage/BulletsBenefits/BulletsBenefits"
import { Faq } from "@/components/Homepage/FAQ/Faq"
import { Hero } from "@/components/Homepage/Hero/Hero"
import { ImageGallery } from "@/components/Homepage/ImageGallery/ImageGallery"
import { Location } from "@/components/Homepage/Location/Location"
import { Reviews } from "@/components/Homepage/ReviewsSection/Reviews"

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <BulletsBenefits />
      <About />
      <ImageGallery />
      <Faq />
      <Reviews />
      <BlogSection />
      <Location />
      <Footer />
    </>
  )
}
