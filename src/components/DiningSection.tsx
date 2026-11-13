import React from "react";
import { Utensils, Wine, Sun } from "lucide-react";

export const DiningSection: React.FC = () => {
  return (
    <section
      id="dining"
      className="section-pad"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div className="section-header-center">
          <span className="section-label">Beachfront Dining & Sunset Cocktails</span>
          <h2 className="section-title">Casa Fiesta Beach Shack Restaurant & Bar</h2>
          <p className="section-desc">
            Experience authentic toe-in-the-sand dining right on the edge of Patnem Beach.
            Renowned for fresh Arabian Sea catch, sizzling Mexican specialties, traditional Goan curries, and sunset cocktails.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Seafood & Sizzling Mexican */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Seafood Grill and Sizzling Mexican Dishes at Casa Fiesta Patnem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Seafood Grill & Mexican Fare
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Patnem Catch & Sizzlers
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Savor fresh catch tandoori snapper, butter garlic tiger prawns, Goan prawn masala, sizzling chicken fajitas,
              tacos, and loaded nachos prepared to order at beachfront tables.
            </p>
          </div>

          {/* Card 2: Sunset Beachfront Bar & Cocktails */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Sunset Cocktails on the Beach at Casa Fiesta Beach Bar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sunset Drinks & Happy Hours
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Casa Fiesta Beach Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Toast Patnem's golden sunsets with classic margaritas, chilled beers, mojitos, Goan cashew Feni mixes,
              and fresh tropical fruit smoothies served right to your reserved beach lounger.
            </p>
          </div>

          {/* Card 3: Morning Sunbed & Balcony Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Oceanfront Breakfast at Casa Fiesta Patnem Beach"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Oceanfront Breakfast & Loungers
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Breakfast by the Waves
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Start your day with fluffy pancakes, eggs to order, muesli fruit bowls, and freshly brewed coffee served
              at our shaded beachfront shack tables or on your private hut veranda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
