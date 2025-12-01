import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import FooterNauiterMaster from "@/components/shared/FooterNauiterMaster";
import BackgroundMusic from "@/components/BackgroundMusic";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load components below the fold
const Quotes = lazy(() => import("@/components/Quotes"));
const About = lazy(() => import("@/components/About"));
const Download = lazy(() => import("@/components/Download"));
const Community = lazy(() => import("@/components/Community"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <BackgroundMusic />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Quotes />
        <About />
        <Download />
        <Community />
      </Suspense>
      <FooterNauiterMaster />
      <CookieBanner />
      <ScrollToTop />
    </main>
  );
};

export default Index;
