import SketchNav from "./components/navigation";
import SketchHero from "./components/hero";
import AboutSection from "./components/about";
import ArtGallery from "./components/gallery";
import TeachingSection from "./components/teaching";
import CodeSection from "./components/coding";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import Carousel3D from "./components/carousel";
export default function Home() {
  return (
    <>
      <SketchNav />
      <SketchHero />
      <AboutSection />
      <ArtGallery />
      <Carousel3D />
      <TeachingSection />
      <CodeSection />
      <ContactSection />
      <Footer />
    </>
  );
}
