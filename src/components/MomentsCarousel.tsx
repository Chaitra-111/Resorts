import React, { useRef, useState } from "react";
import { RESORT_MOMENTS } from "../data/resortData";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";

export const MomentsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = RESORT_MOMENTS.length - 1;

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
        padding: "7rem 0",
        maxWidth: "1400px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0 3.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <span className="section-label">A Day at Hills View</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
            Moments in Golden Light
          </h2>
          <p style={{ maxWidth: "580px", marginTop: "0.5rem" }}>
            From the crisp dawn mist rolling over the ridges to the warmth of evening campfires
            beneath open constellations.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="btn-icon"
            style={{ opacity: currentIndex === 0 ? 0.35 : 1 }}
            data-cursor="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--muted)" }}>
            {currentIndex + 1} / {RESORT_MOMENTS.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="btn-icon"
            style={{ opacity: currentIndex === maxIndex ? 0.35 : 1 }}
            data-cursor="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div style={{ padding: "0 3.5rem" }}>
        <div className="moments-container">
          <div
            ref={trackRef}
            className="moments-track"
            style={{
              transform: `translateX(-${currentIndex * 400}px)`,
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
