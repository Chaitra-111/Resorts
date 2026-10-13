import React from "react";
import { RESORT_CONTACT, AMBIENT_MOODS } from "../data/resortData";
import { ArrowUp, Phone, MapPin, ExternalLink } from "lucide-react";

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
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
        padding: "6rem 3.5rem 3rem",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        {/* Main Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3.5rem",
            marginBottom: "5rem",
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 64 64"
                fill="none"
                stroke="var(--amber)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 46L24 16L38 34L48 20L58 46H6Z" />
                <path d="M6 52C20 48 34 56 58 52" />
                <circle cx="48" cy="14" r="3.5" stroke="var(--amber)" fill="rgba(165,88,45,0.2)" />
              </svg>
              <div>
                <h3 style={{ fontSize: "1.45rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Chamundi
                </h3>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Resorts & Valley
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "340px", marginBottom: "1.5rem" }}>
              A serene valley & canalside retreat located in Mallampally along Mulugu Road, Warangal.
              Featuring rustic timber chalets, outdoor swimming pool, Chamundi Valley Restaurant, campfire nights, and 400+ guest celebration lawns.
            </p>

            {/* Atmosphere Mood Switcher in Footer */}
            <div>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>
                Set Property Atmosphere:
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
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.5rem",
              }}
            >
              The Valley Sanctuary
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.95rem" }}>
              <li>
                <a href="#suites" className="footer-link">
                  Valley Chalets & Suites
                </a>
              </li>
              <li>
                <a href="#hotspots" className="footer-link">
                  Interactive Grounds & Canal
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-link">
                  Swimming Pool & Deck
                </a>
              </li>
              <li>
                <a href="#banquets" className="footer-link">
                  Celebration Lawns (400+)
                </a>
              </li>
              <li>
                <a href="#dining" className="footer-link">
                  Chamundi Valley Restaurant
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Attractions */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.5rem",
              }}
            >
              Warangal & Heritage
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.92rem", color: "var(--ink)" }}>
              <li>• UNESCO Ramappa Temple, Palampet (~25 km)</li>
              <li>• Laknavaram Lake & Suspension Bridge (~35 km)</li>
              <li>• Warangal Fort & Thousand Pillar (~38 km)</li>
              <li>• Pakhal Lake & Wildlife Sanctuary (~45 km)</li>
              <li>• Medaram Sammakka Sarakka Shrine (~55 km)</li>
            </ul>
          </div>

          {/* Contact & Booking Column */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--amber)",
                marginBottom: "1.5rem",
              }}
            >
              Direct Concierge
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.94rem" }}>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <Phone size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <a href={`tel:${RESORT_CONTACT.phoneRaw}`} style={{ fontWeight: 600 }}>
                    {RESORT_CONTACT.phone}
                  </a>
                  <div style={{ fontSize: "0.8rem", color: "var(--muted)" }}>24/7 Front Desk & Bookings</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                <span>{RESORT_CONTACT.address}</span>
              </div>

              <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                <ExternalLink size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                <a
                  href={RESORT_CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--amber)", textDecoration: "underline" }}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "2.5rem",
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
            © {new Date().getFullYear()} Chamundi Resorts & Valley. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="btn-outline"
            style={{ fontSize: "0.78rem", padding: "0.5rem 1.2rem" }}
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
