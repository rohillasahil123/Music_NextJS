import { Cards } from "@/components/Cards";
import FeatureCources from "@/components/FeatureCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { WhyChooseYou } from "@/components/WhyChooseYou";

export default function Home() {
  return (
    <main className="min-h-screen bg-/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeatureCources/>
      <WhyChooseYou/>
      <Cards/>
      <Footer/>
    </main>
  );
}
