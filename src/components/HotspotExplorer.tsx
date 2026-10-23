import React, { useState } from "react";
import { RESORT_HOTSPOTS, type Hotspot } from "../data/resortData";
import { X } from "lucide-react";

export const HotspotExplorer: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(RESORT_HOTSPOTS[0]);

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

        <div className="hotspot-stage">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=88"
            alt="Hotel Nikhil Sai International Nizamabad Venues and Architecture"
          />

          {/* Hotspot Pins */}
          {RESORT_HOTSPOTS.map((spot) => (
            <div
              key={spot.id}
              className="hotspot-pin"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={() => setActiveSpot(activeSpot?.id === spot.id ? null : spot)}
              data-cursor="Inspect"
            >
              <div className="hotspot-radar" />
              <div className="hotspot-center" />
            </div>
          ))}

          {/* Active Hotspot Popover Card */}
          {activeSpot && (
            <div
              className="hotspot-card"
              style={{
                left: `${Math.min(activeSpot.x + 3, 65)}%`,
                top: `${Math.min(activeSpot.y - 8, 55)}%`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.4rem",
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
                    }}
                  >
                    {activeSpot.subtitle}
                  </span>
                  <h4 style={{ fontSize: "1.2rem", color: "var(--ink)", marginTop: "0.2rem" }}>
                    {activeSpot.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveSpot(null)}
                  style={{ color: "var(--muted)", padding: "2px", cursor: "pointer" }}
                >
                  <X size={16} />
                </button>
              </div>
              <p style={{ fontSize: "0.86rem", lineHeight: 1.55, color: "var(--muted)" }}>
                {activeSpot.description}
              </p>
            </div>
          )}
        </div>

        {/* Selector pills below stage for quick selection */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            marginTop: "1.8rem",
            flexWrap: "wrap",
          }}
        >
          {RESORT_HOTSPOTS.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveSpot(spot)}
              className={`btn-outline ${activeSpot?.id === spot.id ? "is-active" : ""}`}
              style={{
                padding: "0.55rem 1.3rem",
                fontSize: "0.82rem",
                background: activeSpot?.id === spot.id ? "var(--amber)" : "var(--card-bg)",
                color: activeSpot?.id === spot.id ? "#fff" : "var(--ink)",
                borderColor: activeSpot?.id === spot.id ? "var(--amber)" : "var(--card-border)",
              }}
            >
              {spot.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
