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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="content-container">
        <div className="header-inner">
          {/* Brand Mark: Crest + Stifled Elegant Text */}
          <a href="#" className="brand-mark" title={RESORT_CONTACT.name}>
            <svg
              className="brand-crest"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="32" cy="18" r="6" fill="rgba(165,88,45,0.18)" />
              <path d="M14 48L22 24L32 34L42 24L50 48H14Z" />
              <path d="M22 24L32 34L42 24" />
              <path d="M14 48H50" />
            </svg>
            <div className="brand-text">
              <span className="brand-word">NIKHIL SAI</span>
              <span className="brand-sub">Boutique Hotel & Banquets</span>
            </div>
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
              <Sparkles size={17} />
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-icon"
              title="Search hotel facilities"
              data-cursor="Search"
            >
              <Search size={17} />
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${RESORT_CONTACT.phoneRaw}`}
              className="btn-icon"
              title="Call Front Desk directly"
              data-cursor="Call"
            >
              <Phone size={17} />
            </a>

            {/* Reservation Tray Drawer Trigger */}
            <button
              onClick={onOpenReservation}
              className="btn-luxury"
              data-cursor="Reserve"
              style={{ position: "relative" }}
            >
              <Calendar size={14} />
              <span>Book Stay</span>
              {selectedSuitesCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-4px",
                    background: "var(--ink)",
                    color: "#fff",
                    fontSize: "10px",
                    width: "18px",
                    height: "18px",
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
        </div>
      </div>
    </header>
  );
};
