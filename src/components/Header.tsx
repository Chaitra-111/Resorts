import React, { useEffect, useState } from "react";
import { Search, Calendar, Phone, Sparkles, Menu, X, ArrowRight } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="content-container">
        <div className="header-inner">
          {/* Brand Mark */}
          <a href="#" className="brand-mark" title={RESORT_CONTACT.name} onClick={closeMobileMenu}>
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
              <span className="brand-word">CITYLITE</span>
              <span className="brand-sub">Lodge & Transit Stays</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a href="#suites" className="nav-link">
                  Rooms & Rates
                </a>
              </li>
              <li>
                <a href="#dining" className="nav-link">
                  Food & Dining
                </a>
              </li>
              <li>
                <a href="#banquets" className="nav-link">
                  Group Bookings
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
            {/* Desktop Atmosphere Mood Switcher Button */}
            <button
              onClick={onCycleMood}
              className="btn-icon btn-desktop-only"
              title={`Atmosphere: ${currentMood} (Click to switch)`}
              data-cursor="Atmosphere"
            >
              <Sparkles size={17} />
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-icon btn-desktop-only"
              title="Search hotel facilities"
              data-cursor="Search"
            >
              <Search size={17} />
            </button>

            {/* Direct Call Button (Visible on both Mobile & Desktop) */}
            <a
              href={`tel:${RESORT_CONTACT.phoneRaw}`}
              className="btn-icon header-call-btn"
              title="Call Front Desk directly"
              data-cursor="Call"
            >
              <Phone size={16} />
            </a>

            {/* Book Stay Trigger Button */}
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenReservation();
              }}
              className="btn-luxury header-book-btn"
              data-cursor="Reserve"
            >
              <Calendar size={14} />
              <span>Book Stay</span>
              {selectedSuitesCount > 0 && (
                <span className="cart-badge">
                  {selectedSuitesCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              title="Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Panel */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <div className="content-container">
            <nav className="mobile-nav-menu">
              <a href="#suites" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Rooms & Rates</span>
                <ArrowRight size={16} />
              </a>
              <a href="#hotspots" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Explore Spaces & Transit</span>
                <ArrowRight size={16} />
              </a>
              <a href="#dining" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Food & Dining Trails</span>
                <ArrowRight size={16} />
              </a>
              <a href="#banquets" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Group & Transit Stays</span>
                <ArrowRight size={16} />
              </a>
              <a href="#experiences" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Lodge Amenities</span>
                <ArrowRight size={16} />
              </a>
              <a href="#location" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Location & Getting Here</span>
                <ArrowRight size={16} />
              </a>
              <a href="#reviews" onClick={closeMobileMenu} className="mobile-nav-item">
                <span>Guest Reviews & Ratings</span>
                <ArrowRight size={16} />
              </a>
            </nav>

            {/* Quick Actions in Mobile Menu */}
            <div className="mobile-menu-actions">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenSearch();
                }}
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Search size={15} />
                <span>Search Hotel Directory</span>
              </button>

              <button
                onClick={onCycleMood}
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Sparkles size={15} />
                <span>Atmosphere: {currentMood}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
