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
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=88"
          alt="The Ranch by MagoStays - 6BR Pool Farmstay Pargi Vikarabad"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <MapPin size={13} style={{ color: "var(--peach-light)" }} />
          <span>MagoStays Luxury Farmstays · Near Pargi, Vikarabad (68 km from Hyderabad)</span>
        </div>

        <h1 className="hero-title">
          Exclusive 6BR Pool Farmstay & <em>Private Forest Estate.</em>
        </h1>

        <p className="hero-desc">
          A secluded 6-bedroom luxury villa with a private swimming pool, smart projector home theater,
          indoor & outdoor kitchens, barbecue bonfire setup, and expansive party lawns.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#suites" className="btn-luxury" data-cursor="View Farmstay">
            <span>Explore The Ranch Estate</span>
            <ArrowRight size={15} />
          </a>
          <a
            href={`https://wa.me/919154855984?text=${encodeURIComponent("Hello MagoStays, I would like to inquire about booking The Ranch 6BR Pool Farmstay.")}`}
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
            <option value={4}>Up to 4 Guests (Forest Master Suite)</option>
            <option value={10}>5-10 Guests (Half-Estate Staycation)</option>
            <option value={20}>15-20 Guests (Full 6BR Private Buyout)</option>
            <option value={30}>25-30 Guests (Grand Family / Reunion Event)</option>
          </select>
        </div>

        <div className="booking-field">
          <label className="booking-label">Destination</label>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--ink)" }}>
            Pargi, Vikarabad (68 km)
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
