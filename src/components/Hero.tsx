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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=88"
          alt="Dreams of Palolem Beach Resort Wooden Cottages & Beach Huts in South Goa"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      <div className="content-container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Hero content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <MapPin size={13} style={{ color: "var(--peach-light)", flexShrink: 0 }} />
            <span>Plot No. 103/5-B, Ourem Road, Mohanbagh · Palolem Beach, South Goa</span>
          </div>

          <h1 className="hero-title">
            Wooden Cottages & Beach Huts at <em>Palolem.</em>
          </h1>

          <p className="hero-desc">
            Stay just 100 meters from the serene sands of Palolem Beach in Canacona. Handcrafted wooden cottages,
            authentic beach huts, family quad suites, and multi-cuisine dining surrounded by tropical coconut groves.
          </p>

          <div className="hero-cta-group" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#suites" className="btn-luxury" data-cursor="View Rooms">
              <span>Explore Cottages & Huts</span>
              <ArrowRight size={15} />
            </a>
            <a
              href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent("Hello Dreams of Palolem Beach Resort, I would like to inquire about cottage availability and room tariffs.")}`}
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
              <option value={1}>1 Guest (Standard A/C Garden Room)</option>
              <option value={2}>2 Guests (Deluxe Wooden Cottage)</option>
              <option value={3}>3 Guests (Traditional Beach Hut)</option>
              <option value={4}>4–5 Guests (Family Quad Cottage)</option>
              <option value={10}>10+ Guests (Group Cottage Booking)</option>
            </select>
          </div>

          <div className="booking-field">
            <label className="booking-label">
              <MapPin size={12} />
              Destination
            </label>
            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", padding: "2px 0" }}>
              Palolem Beach, Goa
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
