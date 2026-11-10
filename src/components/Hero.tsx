import React, { useState } from "react";
import { ArrowRight, MapPin, Sparkles, Calendar, Users } from "lucide-react";
import { RESORT_CONTACT } from "../data/resortData";

interface HeroProps {
  onCheckAvailability: (checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState("2026-10-25");
  const [checkOut, setCheckOut] = useState("2026-10-27");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(checkIn, checkOut, guests);
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background container */}
      <div className="hero-bg-container">
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=88"
          alt="Coco Aavya Ultra-Luxury Private Pool Villas in Reis Magos North Goa"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="content-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <MapPin size={13} style={{ color: "var(--peach-light)", flexShrink: 0 }} />
            <span>Nerul - Reis Magos Road · Opposite Sinamon Villa, North Goa (Near Candolim & Coco Beach)</span>
          </div>

          <h1 className="hero-title">
            Ultra-Luxury Private Pool Villas in <em>Reis Magos, Goa.</em>
          </h1>

          <p className="hero-desc">
            Discover palatial 3BHK & 4BHK private pool villas overlooking the tranquil waters of the Nerul River.
            Featuring dedicated butler service, gourmet private chef dining, bespoke European interiors,
            and effortless proximity to Candolim Beach and coastal nightlife.
          </p>

          <div className="hero-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#suites" className="btn-luxury" data-cursor="View Rooms">
              <span>Explore Villas & Rates</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent("Hello Coco Aavya, I would like to inquire about luxury villa availability and tariffs.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}
              data-cursor="WhatsApp"
            >
              <Sparkles size={14} style={{ color: "var(--peach-light)" }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Floating Booking Inquiry Bar */}
        <form className="booking-bar" onSubmit={handleSubmit}>
          <div className="booking-field">
            <label className="booking-label">
              <Calendar size={12} />
              Check-In
            </label>
            <input
              type="date"
              className="booking-input"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="booking-field">
            <label className="booking-label">
              <Calendar size={12} />
              Check-Out
            </label>
            <input
              type="date"
              className="booking-input"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="booking-field">
            <label className="booking-label">
              <Users size={12} />
              Guests
            </label>
            <select
              className="booking-input"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            >
              <option value={2}>2 Guests (Deluxe Poolside Master Suite)</option>
              <option value={4}>4 Guests (Presidential Riverview Penthouse)</option>
              <option value={6}>6 Guests (3BHK Luxury Haven Villa)</option>
              <option value={8}>8–10 Guests (4BHK Grand Royal Pool Villa)</option>
              <option value={15}>15+ Guests (Full Estate Buyout & Events)</option>
            </select>
          </div>

          <div className="booking-field">
            <label className="booking-label">
              <MapPin size={12} />
              Destination
            </label>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", padding: "2px 0" }}>
              Reis Magos · Candolim, Goa
            </div>
          </div>

          <button type="submit" className="btn-luxury" data-cursor="Check" style={{ height: "46px" }}>
            <span>Check Tariff</span>
            <ArrowRight size={14} />
          </button>
        </form>
      </div>
    </section>
  );
};
