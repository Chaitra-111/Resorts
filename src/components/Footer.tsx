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
                <circle cx="32" cy="16" r="5" stroke="var(--amber)" fill="rgba(165,88,45,0.18)" />
                <path d="M6 50L22 22L36 38L48 20L58 50H6Z" />
                <path d="M12 54C22 51 32 57 42 53C48 51 52 54 56 53" strokeWidth="2" />
              </svg>
              <div>
                <h3 style={{ fontSize: "1.45rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Haritha
                </h3>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Resort Ananthagiri
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "340px", marginBottom: "1.5rem" }}>
              A scenic hilltop forest getaway operated by Telangana Tourism atop Ananthagiri Hills, Vikarabad.
              Featuring panoramic valley view suites, cool mountain breezes, Haritha restaurant, ancient cave temples, and forest trekking.
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
              The Hill Sanctuary
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.95rem" }}>
              <li>
                <a href="#suites" className="footer-link">
                  Hill Suites & Cottages
                </a>
              </li>
              <li>
                <a href="#hotspots" className="footer-link">
                  Panoramic Viewpoints
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-link">
                  Resort Amenities & Lawns
                </a>
              </li>
              <li>
                <a href="#banquets" className="footer-link">
                  Hilltop Lawns (300+)
                </a>
              </li>
              <li>
                <a href="#dining" className="footer-link">
                  Haritha Valley Restaurant
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
              Ananthagiri & Vikarabad
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.92rem", color: "var(--ink)" }}>
              <li>• Sri Anantha Padmanabha Swamy Temple (1.5 km)</li>
              <li>• Ananthagiri Sunset Viewpoint (1 km)</li>
              <li>• Sacred River Musi Origin Point (1.5 km)</li>
              <li>• Kotepally Reservoir & Kayaking (14 km)</li>
              <li>• Vikarabad Reserve Forest Trekking (Direct)</li>
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
            © {new Date().getFullYear()} Haritha Resort Ananthagiri, Vikarabad. Telangana Tourism.
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
