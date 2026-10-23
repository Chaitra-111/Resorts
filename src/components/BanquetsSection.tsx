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
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
                alt="Banquets & Celebrations at Hotel Nikhil Sai International Nizamabad"
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
                Event Capacity
              </span>
              <h4 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                50 to 600+
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                Guests across Baithak Banquet Hall & Upper Deck Rooftop.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Weddings, Receptions & Banquets</span>
            <h2
              className="section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Celebrate Grand Milestones with Unmatched Splendor.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--muted)" }}>
              Whether you are hosting a traditional wedding reception, a lively Sangeet, a high-profile
              corporate summit, or an intimate birthday gathering, Hotel Nikhil Sai International offers
              versatile indoor banquet halls and romantic open-air rooftop settings complete with gourmet catering.
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
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Baithak Banquet</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Indoor AC hall for 250–300 guests with crystal lighting & stage.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Upper Deck Terrace</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Rooftop open-air celebration venue accommodating up to 600 guests.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Executive Boardroom</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    HD projector, conferencing microphones & business seating.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Chaskah Catering</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Customized live counters, Hyderabadi Dum Biryani & multi-cuisine spreads.
                  </p>
                </div>
              </div>
            </div>

            <div className="banquets-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                  "Hello Hotel Nikhil Sai International, I am interested in booking your banquet hall / Upper Deck for an event."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
                data-cursor="Plan Event"
              >
                <span>Plan Your Event</span>
                <Sparkles size={15} />
              </a>

              <a
                href={`tel:${RESORT_CONTACT.phoneRaw}`}
                className="btn-outline"
                data-cursor="Call Sales"
              >
                <PhoneCall size={15} />
                <span>Call Banquet Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
