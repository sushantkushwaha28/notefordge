import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <HeroHeader />
        <HeroSection />
        <Features />
        <CallToAction />
        <FooterSection />
      </main>
      
    </div>
  );
}
