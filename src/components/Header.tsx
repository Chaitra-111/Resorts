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
      <a href="#" className="brand-mark" data-cursor={RESORT_CONTACT.shortName}>
        <svg
          className="brand-crest"
          viewBox="0 0 64 64"
          fill="none"
          stroke="var(--amber)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Emblem: Luxury Hotel Crown & Star */}
          <circle cx="32" cy="18" r="6" stroke="var(--amber)" fill="rgba(165,88,45,0.12)" />
          <path d="M12 48L20 24L32 34L44 24L52 48H12Z" />
          <path d="M20 24L32 34L44 24" />
          <path d="M12 48H52" />
        </svg>
        <span className="brand-word">{RESORT_CONTACT.name}</span>
        <span className="brand-sub">{RESORT_CONTACT.subTitle}</span>
      </a>

      {/* Navigation Links */}
      <nav aria-label="Main Navigation">
        <ul className="nav-links">
          <li>
            <a href="#suites" className="nav-link">
              Rooms & Suites
            </a>
          </li>
          <li>
            <a href="#hotspots" className="nav-link">
              Highlights
            </a>
          </li>
          <li>
            <a href="#dining" className="nav-link">
              Chaskah Dining
            </a>
          </li>
          <li>
            <a href="#banquets" className="nav-link">
              Banquets & Events
            </a>
          </li>
          <li>
            <a href="#experiences" className="nav-link">
              Amenities
            </a>
          </li>
          <li>
            <a href="#reviews" className="nav-link">
              Reviews
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
          title="Search hotel facilities"
          data-cursor="Search"
        >
          <Search size={18} />
        </button>

        {/* Direct Call Button */}
        <a
          href={`tel:${RESORT_CONTACT.phoneRaw}`}
          className="btn-icon"
          title="Call Hotel Nikhil Sai front desk directly"
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
          <span>Book Your Stay</span>
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
