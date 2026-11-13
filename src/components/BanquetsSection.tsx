import React from "react";
import { Sparkles, Users, Music, HeartHandshake, PhoneCall } from "lucide-react";
import { RESORT_CONTACT } from "../data/resortData";

export const BanquetsSection: React.FC = () => {
  return (
    <section
      id="banquets"
      className="section-pad"
      style={{
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Visual Showcase Collage */}
          <div style={{ position: "relative" }}>
            <div
              className="banquet-visual-wrap"
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(0, 0, 0, 0.1)",
                height: "500px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85"
                alt="Beachfront Group Stays and Wooden Cottages at Mia's Beach Resort Patnem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Floating Badge */}
            <div
              className="banquet-floating-badge"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "20px",
                background: "var(--glass-bg)",
                backdropFilter: "blur(14px)",
                border: "1px solid var(--card-border)",
                padding: "1.25rem 1.8rem",
                borderRadius: "18px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                maxWidth: "260px",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--amber)",
                  textTransform: "uppercase",
                }}
              >
                Patnem Beach Living
              </span>
              <h4 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                Wooden Cottages
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                Sea-Facing Verandas, Palm Grove Huts & Beach Shack.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Family Vacations, Group Getaways & Beach Escapes</span>
            <h2
              className="section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Beachfront Cottages, Sea-Facing Verandas & Patnem Holidays.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--muted)" }}>
              Planning a South Goa beach holiday with friends, a yoga getaway, or a peaceful family retreat?
              Mia's Beach Resort offers multi-cottage bookings, private sea-facing verandas, and on-site beach shack dining
              just 30 meters from the sand in Patnem.
            </p>

            <div
              className="banquet-specs-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Sparkles size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>30m Beach Access</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Step directly from your private wooden porch onto the peaceful sands of Patnem Beach.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Group Cottage Blocks</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Reserve clusters of handcrafted wooden beach cottages and palm grove rooms together.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Colomb Bay & Yoga</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Close to scenic coastal walking paths, Colomb Bay viewpoints, and Patnem yoga studios.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Shack Group Dining</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Feast together with candlelit sand tables, fresh seafood platters, and wood-fired pizzas.
                  </p>
                </div>
              </div>
            </div>

            <div className="banquets-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                  "Hello Mia's Beach Resort Patnem, I am interested in inquiring about group cottage bookings and rates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
                data-cursor="Plan Event"
              >
                <span>Inquire Group Rates</span>
                <Sparkles size={15} />
              </a>

              <a
                href={`tel:${RESORT_CONTACT.phoneRaw}`}
                className="btn-outline"
                data-cursor="Call Sales"
              >
                <PhoneCall size={15} />
                <span>Call Front Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
