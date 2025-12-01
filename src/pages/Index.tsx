import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import FooterNauiterMaster from "@/components/shared/FooterNauiterMaster";
import BackgroundMusic from "@/components/BackgroundMusic";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import SEO from "@/components/SEO";
import FloatingParticles from "@/components/FloatingParticles";

// Lazy load components below the fold
const Quotes = lazy(() => import("@/components/Quotes"));
const Reflections = lazy(() => import("@/components/Reflections"));
const About = lazy(() => import("@/components/About"));
const Manifestos = lazy(() => import("@/components/Manifestos"));
const Download = lazy(() => import("@/components/Download"));
const Community = lazy(() => import("@/components/Community"));

const Index = () => {
  return (
    <>
      <SEO />
      <FloatingParticles />
      <main className="min-h-screen relative" role="main">
        <BackgroundMusic />
        <Hero />
        <Suspense fallback={<LoadingSkeleton />}>
          <Quotes />
          <Reflections />
          <About />
          <Manifestos />
          <Download />
          <Community />
        </Suspense>
        <FooterNauiterMaster />
        <CookieBanner />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
