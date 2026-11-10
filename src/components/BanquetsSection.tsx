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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85"
                alt="Group Bookings and Accommodations at TELES Westend Hotel Vasco da Gama"
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
                Group Capacity
              </span>
              <h4 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
                10 to 60+
              </h4>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                Guests across Deluxe AC, Executive Rooms & Family Suites.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div>
            <span className="section-label">Group Bookings & Transit Packages</span>
            <h2
              className="section-title"
              style={{ marginBottom: "1.25rem" }}
            >
              Comfortable Group Stays for Corporate, Pilgrims & Families.
            </h2>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--muted)" }}>
              Hosting an upcoming family wedding entourage, organizing a tour group passing through Vasco,
              or accommodating a corporate team for work in Mormugao port? TELES Westend Hotel offers multi-room group
              packages with special discounted tariffs, 24/7 check-in assistance, and quick railway station proximity.
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
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Wedding Party Stays</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Block multiple adjacent AC rooms for visiting relatives and marriage entourages.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Corporate & Port Teams</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Executive rooms with work desks, fiber Wi-Fi, and convenient GST billing.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <Music size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Flexible 24-Hr Cycles</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Flexible check-in accommodating odd-hour train arrivals and flight layovers.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                <HeartHandshake size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>Baggage & Caretaker Care</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
                    Secure luggage hold, CCTV monitoring, and prompt in-room assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="banquets-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                  "Hello TELES Westend Hotel, I am interested in inquiring about group room bookings / transit accommodation."
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
