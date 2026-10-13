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
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=88"
          alt="Chamundi Resorts and Valley Mallampally Warangal Cottages and Pool"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <MapPin size={13} style={{ color: "var(--peach-light)" }} />
          <span>Beside Canal · Mallampally, Mulugu Road, Warangal</span>
        </div>

        <h1 className="hero-title">
          Valley Serenity & <em>Rustic Luxury Cottages.</em>
        </h1>

        <p className="hero-desc">
          Tucked beside the tranquil canal on the scenic Warangal-Mulugu highway.
          Outdoor swimming pool, green garden chalets, authentic village-style dining, and crackling campfire nights.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#suites" className="btn-luxury" data-cursor="View Cottages">
            <span>Explore The Cottages</span>
            <ArrowRight size={15} />
          </a>
          <a
            href={`https://wa.me/919490088889?text=${encodeURIComponent("Hello Chamundi Resorts & Valley, I would like to inquire about booking a cottage / weekend stay.")}`}
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
            <option value={1}>1 Guest (Solo Traveler)</option>
            <option value={2}>2 Guests (Valley View Timber Chalet)</option>
            <option value={3}>3 Guests (Chamundi Deluxe Suite)</option>
            <option value={6}>4-6 Guests (Canalside Family Villa)</option>
            <option value={10}>8-12 Guests (Royal Valley Grand Estate)</option>
            <option value={25}>25+ Guests (Lawn Celebrations & Day Outing)</option>
          </select>
        </div>

        <div className="booking-field">
          <label className="booking-label">Destination</label>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)" }}>
            Mallampally, Warangal
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
