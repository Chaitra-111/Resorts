import React, { useState } from "react";
import { RESORT_HOTSPOTS, type Hotspot } from "../data/resortData";
import { Info, X } from "lucide-react";

export const HotspotExplorer: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(RESORT_HOTSPOTS[0]);

  return (
    <section
      id="hotspots"
      style={{
        padding: "6rem 3.5rem",
        maxWidth: "1300px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span className="section-label">Interactive Sanctuary</span>
        <h2 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.6rem)", marginBottom: "1rem" }}>
          Explore the Architecture & Landscapes
        </h2>
        <p style={{ maxWidth: "680px", margin: "0 auto" }}>
          Touch the pulsing points across the property to discover how our suites, viewing decks,
          and natural hill features harmonize.
        </p>
      </div>

      <div className="hotspot-stage">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=88"
          alt="Hills View Sanctuary Architecture and Pool Deck"
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
              left: `${Math.min(activeSpot.x + 4, 68)}%`,
              top: `${Math.min(activeSpot.y - 10, 60)}%`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--amber)",
                  }}
                >
                  {activeSpot.subtitle}
                </span>
                <h4 style={{ fontSize: "1.25rem", color: "var(--ink)" }}>{activeSpot.title}</h4>
              </div>
              <button
                onClick={() => setActiveSpot(null)}
                style={{ color: "var(--muted)", padding: "2px" }}
              >
                <X size={16} />
              </button>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.55 }}>{activeSpot.description}</p>
          </div>
        )}
      </div>

      {/* Selector pills below stage for quick mobile selection */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1.8rem",
          flexWrap: "wrap",
        }}
      >
        {RESORT_HOTSPOTS.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveSpot(spot)}
            className={`btn-outline ${activeSpot?.id === spot.id ? "active" : ""}`}
            style={{
              fontSize: "0.78rem",
              padding: "0.55rem 1.2rem",
              borderColor: activeSpot?.id === spot.id ? "var(--amber)" : "var(--card-border)",
              background: activeSpot?.id === spot.id ? "var(--amber)" : "transparent",
              color: activeSpot?.id === spot.id ? "#fff" : "var(--ink)",
            }}
          >
            <Info size={13} />
            <span>{spot.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
