// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TopBookCategories from "./top-book-categories";
import BackToSchoolBooks from "./project_section";
import OtherBookOffers from "./other-book-offers";
import CarouselFeatures from "./carousel-features";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TopBookCategories />
      <BackToSchoolBooks />
      <OtherBookOffers />
      <CarouselFeatures />
      <Faq /> */}
      <Footer />
    </>
  );
}
