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
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Visual Showcase Collage */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(66, 44, 32, 0.15)",
                height: "520px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85"
                alt="Banquets & Celebrations at Hills View Luxury Resort"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Floating Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-25px",
                right: "25px",
                background: "var(--glass-bg)",
                backdropFilter: "blur(14px)",
                border: "1px solid var(--card-border)",
                padding: "1.5rem 2rem",
                borderRadius: "18px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                maxWidth: "280px",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--amber)",
                  textTransform: "uppercase",
                }}
              >
                Event Capacity
              </span>
              <h4 style={{ fontSize: "1.8rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                Up to 250+
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                Guests across open celebration lawns & poolside pavilion.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Weddings & Grand Gatherings</span>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Celebrate Life's Milestones Under the Open Stars.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.2rem" }}>
              Whether you are planning a picturesque destination sangeet, an intimate wedding ceremony,
              a milestone birthday, or a corporate leadership retreat away from the city, our manicured
              emerald lawns provide the ultimate natural open-air canvas.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Sparkles size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Destination Weddings</h4>
                  <p style={{ fontSize: "0.88rem" }}>Natural hillside backdrop with fairy lighting & stage setups.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Family Reunions</h4>
                  <p style={{ fontSize: "0.88rem" }}>Spacious 2-BHK residential villas to host entire families together.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Sangeet & Parties</h4>
                  <p style={{ fontSize: "0.88rem" }}>Outdoor audio acoustics, DJ spaces, and pool party zones.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Corporate Retreats</h4>
                  <p style={{ fontSize: "0.88rem" }}>Strategy sessions, team bonding, and open-air leadership dinners.</p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`tel:${RESORT_CONTACT.phoneRaw}`}
                className="btn-luxury"
                data-cursor="Call Manager"
              >
                <PhoneCall size={15} />
                <span>Call Banquet Manager</span>
              </a>
              <a
                href={`https://wa.me/916302919296?text=${encodeURIComponent(
                  "Hello, I am interested in booking Hills View Resort lawn/banquet for a celebration event."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                data-cursor="WhatsApp"
              >
                <span>WhatsApp Event Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
