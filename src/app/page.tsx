import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import MapShowcase from "@/components/MapShowcase";
import PopularPlaces from "@/components/PopularPlaces";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <MapShowcase />
        <PopularPlaces />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
