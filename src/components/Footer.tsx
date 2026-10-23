import React from "react";
import { RESORT_CONTACT, AMBIENT_MOODS } from "../data/resortData";
import { ArrowUp, Phone, MapPin, ExternalLink, Mail } from "lucide-react";

interface FooterProps {
  currentMood: string;
  onSelectMood: (moodKey: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentMood, onSelectMood }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
        padding: "5rem 0 2.5rem",
      }}
    >
      <div className="content-container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 64 64"
                fill="none"
                stroke="var(--amber)"
                strokeWidth="2"
              >
                <circle cx="32" cy="18" r="6" fill="rgba(165,88,45,0.18)" />
                <path d="M14 48L22 24L32 34L42 24L50 48H14Z" />
                <path d="M22 24L32 34L42 24" />
                <path d="M14 48H50" />
              </svg>
              <div>
                <h3 style={{ fontSize: "1.2rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {RESORT_CONTACT.name}
                </h3>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {RESORT_CONTACT.subTitle}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", lineHeight: 1.65, maxWidth: "340px", marginBottom: "1.5rem" }}>
              Nizamabad's landmark hospitality address. Executive suites, Chaskah multi-cuisine restaurant,
              Baithak & Upper Deck grand celebration banquets, and vibrant sports lounges.
            </p>

            {/* Atmosphere Mood Switcher in Footer */}
            <div>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>
                Property Atmosphere:
              </span>
              <div className="mood-bar">
                {AMBIENT_MOODS.map((m) => (
                  <button
                    key={m.key}
                    onClick={() => onSelectMood(m.colorScheme)}
                    className={`mood-btn ${currentMood === m.colorScheme ? "is-active" : ""}`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.2rem",
              }}
            >
              The Hotel
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.92rem" }}>
              <li>
                <a href="#suites" className="footer-link">
                  Rooms & Executive Suites
                </a>
              </li>
              <li>
                <a href="#hotspots" className="footer-link">
                  Signature Spaces
                </a>
              </li>
              <li>
                <a href="#dining" className="footer-link">
                  Chaskah Restaurant
                </a>
              </li>
              <li>
                <a href="#banquets" className="footer-link">
                  Baithak & Upper Deck Banquets
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-link">
                  Inswinger Lounge & Amenities
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Attractions */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.2rem",
              }}
            >
              Nizamabad Landmarks
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem", color: "var(--ink)" }}>
              <li>• Venu Mall & Multiplex (130 meters)</li>
              <li>• Nizamabad Railway Junction (2.0 km)</li>
              <li>• Nizamabad TSRTC Central Bus Stand (1.5 km)</li>
              <li>• Historic Nizamabad Fort (3.5 km)</li>
              <li>• Ashok Sagar Lake & Rock Garden (7 km)</li>
              <li>• Alisagar Deer Park (13 km)</li>
            </ul>
          </div>

          {/* Contact & Booking Column */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.2rem",
              }}
            >
              Direct Concierge
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", fontSize: "0.92rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <Phone size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a href={`tel:${RESORT_CONTACT.phoneRaw}`} style={{ fontWeight: 700, color: "var(--ink)" }}>
                    {RESORT_CONTACT.phone}
                  </a>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Desk: {RESORT_CONTACT.phoneAlt}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <Mail size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <a href={`mailto:${RESORT_CONTACT.email}`} style={{ color: "var(--ink)" }}>
                  {RESORT_CONTACT.email}
                </a>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <span>{RESORT_CONTACT.address}</span>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <ExternalLink size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                <a
                  href={RESORT_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--amber)", textDecoration: "underline", fontWeight: 600 }}
                >
                  Google Maps Official Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--card-border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.84rem",
            color: "var(--muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} {RESORT_CONTACT.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-outline"
            style={{ fontSize: "0.75rem", padding: "0.45rem 1.1rem" }}
            data-cursor="Top"
          >
            <span>Back to Beginning</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
