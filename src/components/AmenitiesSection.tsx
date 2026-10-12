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
  CheckCircle2,
} from "lucide-react";

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Waves":
        return <Waves size={26} />;
      case "Sparkles":
        return <Sparkles size={26} />;
      case "Flame":
        return <Flame size={26} />;
      case "UtensilsCrossed":
        return <UtensilsCrossed size={26} />;
      case "Mountain":
        return <Mountain size={26} />;
      case "Gamepad2":
        return <Gamepad2 size={26} />;
      case "ShieldCheck":
        return <ShieldCheck size={26} />;
      case "Coffee":
        return <Coffee size={26} />;
      default:
        return <Sparkles size={26} />;
    }
  };

  return (
    <section
      id="experiences"
      style={{
        padding: "7rem 3.5rem",
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Resort Amenities & Comfort</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--ink)" }}>
            Curated for Recharging & Reconnecting
          </h2>
          <p style={{ maxWidth: "620px", margin: "0.8rem auto 0" }}>
            Every corner of Hills View is crafted to balance outdoor adventure across Ananthagiri with
            restorative residential peace.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4.5rem",
          }}
        >
          {RESORT_AMENITIES.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "2.2rem",
                background: "var(--card-bg)",
                borderRadius: "20px",
                border: "1px solid var(--card-border)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--amber)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(66, 44, 32, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "rgba(165, 88, 45, 0.1)",
                  color: "var(--amber)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getIcon(item.icon)}
              </div>
              <h3 style={{ fontSize: "1.35rem", color: "var(--ink)" }}>{item.title}</h3>
              <p style={{ fontSize: "0.94rem", lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Helpful Guest Guidance Banner (reflecting Justdial & Google Maps real residential notes) */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(165,88,45,0.08) 0%, rgba(238,208,183,0.2) 100%)",
            border: "1px solid rgba(165,88,45,0.2)",
            borderRadius: "22px",
            padding: "2.5rem 3rem",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "0.5rem",
                color: "var(--amber)",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              <CheckCircle2 size={16} />
              <span>Residential Stay Guidelines & Tips</span>
            </div>
            <h4 style={{ fontSize: "1.45rem", marginBottom: "0.6rem", color: "var(--ink)" }}>
              A Truly Tailored Holiday Experience
            </h4>
            <p style={{ fontSize: "0.95rem", maxWidth: "800px" }}>
              As a dedicated residential getaway, we encourage guests to bring their preferred personal
              toiletries, swim attire for the pool, and specialty foods or snacks if self-catering.
              Our on-site caretaking crew is on standby 24/7 to arrange campfires, barbecue setups, and
              hot beverages.
            </p>
          </div>

          <a
            href="tel:+916302919296"
            className="btn-luxury"
            style={{ whiteSpace: "nowrap" }}
            data-cursor="Call Concierge"
          >
            <span>Ask Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
