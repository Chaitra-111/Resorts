import React, { useEffect, useState } from "react";
import { Search, Calendar, Phone, Sparkles } from "lucide-react";
import { RESORT_CONTACT } from "../data/resortData";

interface HeaderProps {
  onOpenReservation: () => void;
  onOpenSearch: () => void;
  selectedSuitesCount: number;
  currentMood: string;
  onCycleMood: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReservation,
  onOpenSearch,
  selectedSuitesCount,
  currentMood,
  onCycleMood,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* Brand Crest */}
      <a href="#" className="brand-mark" data-cursor="Haritha Resort">
        <svg
          className="brand-crest"
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
        <span className="brand-word">Haritha</span>
        <span className="brand-sub">Resort Ananthagiri</span>
      </a>

      {/* Navigation Links */}
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li>
            <a href="#suites" className="nav-link">
              Cottages
            </a>
          </li>
          <li>
            <a href="#hotspots" className="nav-link">
              Sanctuary
            </a>
          </li>
          <li>
            <a href="#experiences" className="nav-link">
              Experiences
            </a>
          </li>
          <li>
            <a href="#banquets" className="nav-link">
              Celebrations
            </a>
          </li>
          <li>
            <a href="#dining" className="nav-link">
              Dining
            </a>
          </li>
          <li>
            <a href="#location" className="nav-link">
              Location
            </a>
          </li>
        </ul>
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Atmosphere Mood Switcher Button */}
        <button
          onClick={onCycleMood}
          className="btn-icon"
          title={`Atmosphere: ${currentMood} (Click to switch)`}
          data-cursor="Atmosphere"
        >
          <Sparkles size={18} />
        </button>

        {/* Search Trigger */}
        <button
          onClick={onOpenSearch}
          className="btn-icon"
          title="Search resort details"
          data-cursor="Search"
        >
          <Search size={18} />
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${RESORT_CONTACT.phoneRaw}`}
          className="btn-icon"
          title="Call Resort Manager directly"
          data-cursor="Call"
        >
          <Phone size={18} />
        </a>

        {/* Reservation Tray Drawer Trigger */}
        <button
          onClick={onOpenReservation}
          className="btn-luxury"
          data-cursor="Reserve"
          style={{ position: "relative" }}
        >
          <Calendar size={15} />
          <span>Plan Your Stay</span>
          {selectedSuitesCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                background: "var(--ink)",
                color: "#fff",
                fontSize: "11px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}
            >
              {selectedSuitesCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
