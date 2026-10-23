import React, { useState } from "react";
import { RESORT_HOTSPOTS, type Hotspot } from "../data/resortData";

export const HotspotExplorer: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<Hotspot>(RESORT_HOTSPOTS[0]);

  return (
    <section
      id="hotspots"
      className="section-pad"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div className="section-header-center">
          <span className="section-label">Interactive Property Showcase</span>
          <h2 className="section-title">Explore Signature Spaces & Venues</h2>
          <p className="section-desc">
            Touch the pulsing points across the property to discover how our suites, Chaskah dining restaurant,
            and grand celebration banquet halls come together.
          </p>
        </div>

        {/* Visual Stage with Pulsing Hotspots */}
        <div className="hotspot-stage">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=88"
            alt="Hotel Nikhil Sai International Nizamabad Venues and Architecture"
          />

          {/* Hotspot Pins */}
          {RESORT_HOTSPOTS.map((spot) => {
            const isSelected = activeSpot?.id === spot.id;
            return (
              <div
                key={spot.id}
                className={`hotspot-pin ${isSelected ? "is-selected" : ""}`}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onClick={() => setActiveSpot(spot)}
                data-cursor="Inspect"
                title={spot.title}
              >
                <div className="hotspot-radar" />
                <div className="hotspot-center" />
              </div>
            );
          })}

          {/* Desktop-only floating popover card (hidden on mobile to prevent clipping) */}
          {activeSpot && (
            <div
              className="hotspot-card desktop-hotspot-card"
              style={{
                left: `${Math.min(activeSpot.x + 3, 62)}%`,
                top: `${Math.min(activeSpot.y - 6, 52)}%`,
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--amber)",
                    display: "block",
                    marginBottom: "0.2rem",
                  }}
                >
                  {activeSpot.subtitle}
                </span>
                <h4 style={{ fontSize: "1.15rem", color: "var(--ink)", marginBottom: "0.5rem" }}>
                  {activeSpot.title}
                </h4>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.55, color: "var(--muted)" }}>
                  {activeSpot.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Dedicated Mobile & Tablet Venue Detail Card (Prevents any clipping on image) */}
        {activeSpot && (
          <div className="mobile-hotspot-card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--amber)",
                  background: "var(--amber-soft)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "9999px",
                }}
              >
                {activeSpot.subtitle}
              </span>
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "var(--ink)", marginBottom: "0.6rem" }}>
              {activeSpot.title}
            </h3>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "var(--muted)", margin: 0 }}>
              {activeSpot.description}
            </p>
          </div>
        )}

        {/* Selector pills below stage for quick venue switching */}
        <div className="hotspot-pills-bar">
          {RESORT_HOTSPOTS.map((spot) => {
            const isSelected = activeSpot?.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot)}
                className={`btn-outline ${isSelected ? "is-active" : ""}`}
                style={{
                  padding: "0.55rem 1.25rem",
                  fontSize: "0.82rem",
                  background: isSelected ? "var(--amber)" : "var(--card-bg)",
                  color: isSelected ? "#fff" : "var(--ink)",
                  borderColor: isSelected ? "var(--amber)" : "var(--card-border)",
                  boxShadow: isSelected ? "0 4px 14px rgba(165,88,45,0.25)" : "none",
                }}
              >
                {spot.title}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
