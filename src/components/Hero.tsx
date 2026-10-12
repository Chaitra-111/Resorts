import React, { useState } from "react";
import { ArrowRight, MapPin, Sparkles, Calendar, Users } from "lucide-react";

interface HeroProps {
  onCheckAvailability: (checkIn: string, checkOut: string, guests: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-20");
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(checkIn, checkOut, guests);
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background container with parallax */}
      <div className="hero-bg-container">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=88"
          alt="Hills View Luxury Residential Resort in Ananthagiri Hills Vikarabad"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <MapPin size={13} style={{ color: "var(--peach-light)" }} />
          <span>Ananthagiri Hills · Mudallagadda, Vikarabad</span>
        </div>

        <h1 className="hero-title">
          Where Misty Ridges Meet <em>Residential Elegance.</em>
        </h1>

        <p className="hero-desc">
          Escape the city pulse into the crisp, forest-scented heights of Ananthagiri.
          Expansive private balcony suites, azure pool waters, and lush celebration lawns.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#suites" className="btn-luxury" data-cursor="View Suites">
            <span>Explore The Suites</span>
            <ArrowRight size={15} />
          </a>
          <a
            href={`https://wa.me/916302919296?text=${encodeURIComponent("Hello Hills View Resort, I would like to inquire about booking a stay.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
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
            <Calendar size={12} style={{ display: "inline", marginRight: "4px" }} />
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
            <Calendar size={12} style={{ display: "inline", marginRight: "4px" }} />
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
            <Users size={12} style={{ display: "inline", marginRight: "4px" }} />
            Guests
          </label>
          <select
            className="booking-input"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            <option value={1}>1 Guest (Solo)</option>
            <option value={2}>2 Guests (Couple)</option>
            <option value={4}>4 Guests (Family Suite)</option>
            <option value={6}>6+ Guests (Full Villa / Group)</option>
            <option value={15}>15+ Guests (Celebration / Banquet)</option>
          </select>
        </div>

        <div className="booking-field">
          <label className="booking-label">Resort Destination</label>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)" }}>
            Ananthagiri Hills, TS
          </div>
        </div>

        <button type="submit" className="btn-luxury" data-cursor="Check">
          <span>Check Dates</span>
          <ArrowRight size={15} />
        </button>
      </form>
    </section>
  );
};
