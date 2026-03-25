import ParticleCanvas from "@/components/ParticleCanvas";
import SparkCursor from "@/components/SparkCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import StatsBar from "@/components/StatsBar";
import LightningDivider from "@/components/LightningDivider";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import SocialProof from "@/components/SocialProof";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global effects */}
      <ParticleCanvas />
      <SparkCursor />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main className="relative z-10">
        <Hero />
        <Ticker />
        <StatsBar />
        <LightningDivider />
        <Products />
        <LightningDivider />
        <Features />
        <LightningDivider />
        <Architecture />
        <LightningDivider />
        <SocialProof />
        <LightningDivider />
        <Demo />
        <LightningDivider />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
