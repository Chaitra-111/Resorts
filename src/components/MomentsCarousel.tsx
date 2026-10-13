import React, { useRef, useState, useEffect } from "react";
import { RESORT_MOMENTS } from "../data/resortData";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";

export const MomentsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardOffset, setCardOffset] = useState(400);

  const maxIndex = RESORT_MOMENTS.length - 1;

  // Calculate exact slide step including gap based on actual rendered card size
  useEffect(() => {
    const updateOffset = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector(".moment-card") as HTMLElement;
        if (firstCard) {
          const width = firstCard.offsetWidth;
          // Gap is 1.8rem (~28.8px)
          const computedGap = parseFloat(getComputedStyle(containerRef.current.querySelector(".moments-track")!).gap) || 28;
          setCardOffset(width + computedGap);
        }
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section
      id="moments"
      style={{
        padding: "6rem 0",
        maxWidth: "1400px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <div
        className="section-pad"
        style={{
          paddingTop: 0,
          paddingBottom: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <span className="section-label">A Day at Chamundi Resorts & Valley</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
            Moments in Golden Light
          </h2>
          <p style={{ maxWidth: "580px", marginTop: "0.5rem" }}>
            From gentle morning mist rising over the Mallampally canal to afternoon poolside swims and
            evening campfire grills beneath open constellations.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Indicators */}
        <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {RESORT_MOMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: currentIndex === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: currentIndex === i ? "var(--amber)" : "var(--card-border)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="btn-icon"
              style={{ opacity: currentIndex === 0 ? 0.35 : 1 }}
              data-cursor="Previous"
              aria-label="Previous slide"
            >
              <ArrowLeft size={18} />
            </button>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--muted)", minWidth: "45px", textAlign: "center" }}>
              {currentIndex + 1} / {RESORT_MOMENTS.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="btn-icon"
              style={{ opacity: currentIndex === maxIndex ? 0.35 : 1 }}
              data-cursor="Next"
              aria-label="Next slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="section-pad" style={{ paddingTop: 0, paddingBottom: 0 }} ref={containerRef}>
        <div className="moments-container">
          <div
            className="moments-track"
            style={{
              transform: `translateX(-${currentIndex * cardOffset}px)`,
            }}
          >
            {RESORT_MOMENTS.map((moment) => (
              <div key={moment.id} className="moment-card" data-cursor="Expand Moment">
                <img src={moment.image} alt={moment.title} />
                <div className="moment-overlay">
                  <div
                    style={{
                      display: "flex",
                      gap: "0.8rem",
                      alignItems: "center",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--peach-light)",
                      marginBottom: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      <Clock size={12} /> {moment.timeTag}
                    </span>
                    <span>·</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                      <MapPin size={12} /> {moment.location}
                    </span>
                  </div>

                  <h3>{moment.title}</h3>
                  <p>{moment.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
