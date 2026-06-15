import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import HarzFacts from "@/components/HarzFacts";
import Categories from "@/components/Categories";
import MapShowcase from "@/components/MapShowcase";
import PopularPlaces from "@/components/PopularPlaces";
import AboutRegion from "@/components/AboutRegion";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <HarzFacts />
        <Categories />
        <MapShowcase />
        <PopularPlaces />
        <AboutRegion />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
