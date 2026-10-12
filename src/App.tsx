import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IntroCurtain } from "./components/IntroCurtain";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { EditorialIntro } from "./components/EditorialIntro";
import { HotspotExplorer } from "./components/HotspotExplorer";
import { SuitesShowcase } from "./components/SuitesShowcase";
import { MomentsCarousel } from "./components/MomentsCarousel";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { BanquetsSection } from "./components/BanquetsSection";
import { DiningSection } from "./components/DiningSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { ReservationDrawer } from "./components/ReservationDrawer";
import { SearchModal } from "./components/SearchModal";
import { type Suite, RESORT_SUITES } from "./data/resortData";

export const App: React.FC = () => {
  const [, setIntroFinished] = useState(false);
  const [selectedSuites, setSelectedSuites] = useState<Suite[]>([RESORT_SUITES[0]]);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentMood, setCurrentMood] = useState<"velora" | "mist" | "night">("velora");

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize smooth scrolling with Lenis & GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // Sync atmospheric mood to body attribute
  useEffect(() => {
    document.body.setAttribute("data-mood", currentMood);
  }, [currentMood]);

  const handleCycleMood = () => {
    setCurrentMood((prev) => {
      if (prev === "velora") return "mist";
      if (prev === "mist") return "night";
      return "velora";
    });
  };

  const handleSelectSuite = (suite: Suite) => {
    if (selectedSuites.some((s) => s.id === suite.id)) {
      setSelectedSuites((prev) => prev.filter((s) => s.id !== suite.id));
    } else {
      setSelectedSuites((prev) => [...prev, suite]);
      setIsReservationOpen(true);
    }
  };

  const handleRemoveSuite = (suiteId: string) => {
    setSelectedSuites((prev) => prev.filter((s) => s.id !== suiteId));
  };

  const handleClearAllSuites = () => {
    setSelectedSuites([]);
  };

  const handleCheckAvailability = () => {
    setIsReservationOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="site-wrapper">
      {/* Intro Preloader Curtain */}
      <IntroCurtain onComplete={() => setIntroFinished(true)} />

      {/* Global Navigation Header */}
      <Header
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        selectedSuitesCount={selectedSuites.length}
        currentMood={currentMood}
        onCycleMood={handleCycleMood}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onCheckAvailability={handleCheckAvailability} />
        <EditorialIntro />
        <HotspotExplorer />
        <SuitesShowcase
          onSelectSuite={handleSelectSuite}
          selectedSuiteIds={selectedSuites.map((s) => s.id)}
        />
        <MomentsCarousel />
        <AmenitiesSection />
        <BanquetsSection />
        <DiningSection />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Global Footer */}
      <Footer currentMood={currentMood} onSelectMood={(m) => setCurrentMood(m as any)} />

      {/* Reservation Drawer Tray */}
      <ReservationDrawer
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        selectedSuites={selectedSuites}
        onRemoveSuite={handleRemoveSuite}
        onClearAll={handleClearAllSuites}
      />

      {/* Concierge Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToSection={handleNavigateToSection}
      />
    </div>
  );
};

export default App;
