import React from "react";
import { RESORT_AMENITIES } from "../data/resortData";
import {
  Waves,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Mountain,
  Gamepad2,
  ShieldCheck,
  Coffee,
} from "lucide-react";

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Waves":
        return <Waves size={24} />;
      case "Sparkles":
        return <Sparkles size={24} />;
      case "Flame":
        return <Flame size={24} />;
      case "UtensilsCrossed":
        return <UtensilsCrossed size={24} />;
      case "Mountain":
        return <Mountain size={24} />;
      case "Gamepad2":
        return <Gamepad2 size={24} />;
      case "ShieldCheck":
        return <ShieldCheck size={24} />;
      case "Coffee":
        return <Coffee size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  return (
    <section
      id="experiences"
      className="section-pad"
      style={{
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div className="section-header-center">
          <span className="section-label">Hotel Amenities & Comfort</span>
          <h2 className="section-title">Designed for Business & Celebratory Leisure</h2>
          <p className="section-desc">
            Every facility at Hotel Nikhil Sai International is designed to deliver effortless comfort,
            premier connectivity, and refined regional hospitality.
          </p>
        </div>

        {/* Grid of 8 Amenities (4x2 symmetrical) */}
        <div className="amenities-grid">
          {RESORT_AMENITIES.map((item, idx) => (
            <div
              key={idx}
              className="amenity-card-item"
              style={{
                padding: "2rem",
                background: "var(--card-bg)",
                borderRadius: "18px",
                border: "1px solid var(--card-border)",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--amber)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.02)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "var(--amber-soft)",
                  color: "var(--amber)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {getIcon(item.icon)}
              </div>
              <h3 style={{ fontSize: "1.18rem", color: "var(--ink)", marginTop: "0.2rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
