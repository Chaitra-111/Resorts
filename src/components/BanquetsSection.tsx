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
                alt="2-BHK Villa, Group Cabana Holidays and Family Gatherings at Sapphire Sand Resort Agonda"
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
                Boutique Property Capacity
              </span>
              <h4 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                12 Cabanas + Villa
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                Luxury Pool-View Cabanas & Exclusive 2-BHK Family Villa.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">2-BHK Villa, Family Holidays & Boutique Buyouts</span>
            <h2
              className="section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Private Poolside Buyouts, 2-BHK Villa Stays & Agonda Group Getaways.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--muted)" }}>
              Traveling as a family, planning a serene wellness retreat, or celebrating with friends in South Goa?
              Sapphire Sand Resort offers an intimate 12-cabana winding pool courtyard plus a 2-BHK villa setup ideal for
              exclusive coastal gatherings steps from northern Agonda Beach.
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
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>2-BHK Coastal Villa</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Accommodates families or 4–6 friends together beside the winding pool courtyard.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>12-Cabana Resort Buyouts</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Reserve multiple thatched cabanas around the freeform pool for quiet private groups.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Cola Lagoon & Cabo Tours</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Coordinated scooter/car rentals, dolphin cruises, and secluded northern cove excursions.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Poolside Group Dining</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Multi-cuisine dinner buffets, fresh Goan fish grills, and cozy evenings around the pool.
                  </p>
                </div>
              </div>
            </div>

            <div className="banquets-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                  "Hello Sapphire Sand Resort Agonda, I am interested in inquiring about the 2-BHK Villa or group cabana bookings."
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
                <span>Call Banquet Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
