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
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
                alt="Exclusive Private Villa Estate Buyouts at Coco Aavya North Goa"
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
                Estate Capacity
              </span>
              <h4 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                Up to 25+
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                Guests across Grand 4BHK & 3BHK Private Pool Estates.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Private Villa Buyouts & Celebrations</span>
            <h2
              className="section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Exclusive Estate Buyouts, Anniversaries & Private Soirées.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--muted)" }}>
              Celebrating a milestone birthday, hosting an intimate pre-wedding celebration, or gathering with close
              friends and family in North Goa? Coco Aavya offers exclusive private pool villa buyouts with dedicated
              butler service, personalized private chef dining, and absolute waterfront seclusion.
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
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Private Pool Soirées</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Exclusive poolside sundecks for sunset cocktails, ambient lighting, and celebrations.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Full Estate Buyouts</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Combine adjacent 4BHK and 3BHK luxury villas for multi-generational group privacy.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Chef & Live Barbecue</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Customized multi-course menus, live seafood grills, and curated bar setups.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Concierge & Yacht Charters</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Airport luxury transfers, chauffeur coordination, and private Mandovi yacht sails.
                  </p>
                </div>
              </div>
            </div>

            <div className="banquets-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                  "Hello Coco Aavya, I am interested in inquiring about private villa estate bookings and celebrations."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
                data-cursor="Plan Event"
              >
                <span>Inquire Villa Rates</span>
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
