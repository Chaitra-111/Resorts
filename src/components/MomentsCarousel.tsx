import React, { useRef, useState, useEffect } from "react";
import { RESORT_MOMENTS } from "../data/resortData";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";

export const MomentsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardOffset, setCardOffset] = useState(400);

  const maxIndex = RESORT_MOMENTS.length - 1;

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
      className="section-pad"
      style={{
        background: "var(--cream)",
        overflow: "hidden",
      }}
    >
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="left">
            <span className="section-label">A Day at Citylite Lodge</span>
            <h2 className="section-title">Comfortable Transit & City Moments</h2>
            <p className="section-desc">
              From seamless morning train arrivals to restful air-conditioned rooms,
              hot showers, and authentic Khaleelwadi food trails.
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: "flex", gap: "0.8rem", alignSelf: "flex-end" }}>
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
      </div>

      {/* Sliding Carousel Track */}
      <div
        ref={containerRef}
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          overflow: "visible",
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
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(18, 12, 8, 0.85) 100%)",
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
                  background: "rgba(255,255,255,0.22)",
                  backdropFilter: "blur(8px)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
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
                <h4 style={{ fontSize: "1.3rem", marginBottom: "0.35rem", color: "#fff" }}>
                  {moment.title}
                </h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.9, lineHeight: 1.5, color: "#fff" }}>
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
