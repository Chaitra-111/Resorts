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
          <span className="section-label">A Day at Hotel Nikhil Sai</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
            Moments in Golden Hospitality
          </h2>
          <p style={{ maxWidth: "580px", marginTop: "0.5rem" }}>
            From morning breakfast spreads at Chaskah to starlit wedding celebrations on the Upper Deck
            and lively evenings at Inswinger sports lounge.
          </p>
        </div>

        {/* Navigation Controls */}
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="btn-icon"
            style={{
              opacity: currentIndex === 0 ? 0.35 : 1,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
            data-cursor="Prev"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="btn-icon"
            style={{
              opacity: currentIndex === maxIndex ? 0.35 : 1,
              cursor: currentIndex === maxIndex ? "not-allowed" : "pointer",
            }}
            data-cursor="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Sliding Carousel Track */}
      <div
        ref={containerRef}
        style={{
          paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
          position: "relative",
        }}
      >
        <div
          className="moments-track"
          style={{
            transform: `translateX(-${currentIndex * cardOffset}px)`,
          }}
        >
          {RESORT_MOMENTS.map((moment) => (
            <div key={moment.id} className="moment-card" data-cursor="Expand">
              <img
                src={moment.image}
                alt={moment.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15, 12, 11, 0.85) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "1.2rem",
                  left: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                <Clock size={12} />
                <span>{moment.timeTag}</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.75rem",
                    color: "var(--peach-light)",
                    marginBottom: "0.3rem",
                  }}
                >
                  <MapPin size={12} />
                  <span>{moment.location}</span>
                </div>
                <h4 style={{ fontSize: "1.35rem", marginBottom: "0.4rem", color: "#fff" }}>
                  {moment.title}
                </h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.88, lineHeight: 1.5 }}>
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
