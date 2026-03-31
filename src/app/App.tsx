import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { FeaturedCase } from "./components/FeaturedCase";
import { Problem } from "./components/Problem";
import { CorePositioning } from "./components/CorePositioning";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowWeWork } from "./components/HowWeWork";
import { Differentiation } from "./components/Differentiation";
import { Values } from "./components/Values";
import { TargetMarket } from "./components/TargetMarket";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <SocialProof />
        <FeaturedCase />
        <Problem />
        <CorePositioning />
        <About />
        <Services />
        <HowWeWork />
        <Differentiation />
        <Values />
        <TargetMarket />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
