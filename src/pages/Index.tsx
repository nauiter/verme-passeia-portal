import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import About from "@/components/About";
import Download from "@/components/Download";
import Community from "@/components/Community";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Quotes />
      <About />
      <Download />
      <Community />
    </main>
  );
};

export default Index;
