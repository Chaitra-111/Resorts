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
                alt="The Ranch by MagoStays Private Celebrations and Lawn Events"
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
                Up to 50+
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                Guests across private poolside deck, open lawns & terrace.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Private Gatherings & Offsites</span>
            <h2
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                color: "var(--ink)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Private Celebrations, Reunions & Farmstay Offsites.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2.2rem" }}>
              Whether you are organizing an intimate birthday pool party, family anniversary, college reunion,
              or an executive leadership retreat from Hyderabad, The Ranch offers an entirely private estate
              where your group has complete freedom over music, schedule, barbecue, and relaxation.
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
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Poolside Parties</h4>
                  <p style={{ fontSize: "0.88rem" }}>Exclusive pool deck for daytime swims, music, and sunset hangouts.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Family Reunions</h4>
                  <p style={{ fontSize: "0.88rem" }}>6 spacious AC bedrooms accommodating up to 30 guests comfortably.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Barbecue & Bonfire</h4>
                  <p style={{ fontSize: "0.88rem" }}>Live charcoal grill with skewers and evening bonfire pit under the stars.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}>Projector Theater</h4>
                  <p style={{ fontSize: "0.88rem" }}>Smart HD projector and surround audio in the hall for group screenings.</p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`tel:${RESORT_CONTACT.phoneRaw}`}
                className="btn-luxury"
                data-cursor="Call Host"
              >
                <PhoneCall size={15} />
                <span>Call Farmstay Host</span>
              </a>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw}?text=${encodeURIComponent(
                  "Hello MagoStays, I am interested in booking The Ranch 6BR Pool Farmstay for a private celebration / group stay."
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
