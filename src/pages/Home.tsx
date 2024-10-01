import { Footer } from "@/components/GlobalComponents/Footer/Footer"
import { Header } from "@/components/GlobalComponents/Header/Header"
import { About } from "@/components/HomepageComponents/About/About"
import { BlogSection } from "@/components/HomepageComponents/BlogSection/BlogSection"
import { BulletsBenefits } from "@/components/HomepageComponents/BulletsBenefits/BulletsBenefits"
import { Faq } from "@/components/HomepageComponents/FAQ/Faq"
import { Hero } from "@/components/HomepageComponents/Hero/Hero"
import { ImageGallery } from "@/components/HomepageComponents/ImageGallery/ImageGallery"
import { Location } from "@/components/HomepageComponents/Location/Location"
import { Reviews } from "@/components/HomepageComponents/ReviewsSection/Reviews"

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
