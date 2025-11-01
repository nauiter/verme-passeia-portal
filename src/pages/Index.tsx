import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import About from "@/components/About";
import Download from "@/components/Download";
import Community from "@/components/Community";
import FooterNauiterMaster from "@/components/shared/FooterNauiterMaster";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <main className="min-h-screen">
      <BackgroundMusic />
      <Hero />
      <Quotes />
      <About />
      <Download />
      <Community />
      <FooterNauiterMaster />
    </main>
  );
};

export default Index;
