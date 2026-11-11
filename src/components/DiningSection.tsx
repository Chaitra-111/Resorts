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
          <span className="section-label">Beachfront Dining & Sunset Lounge</span>
          <h2 className="section-title">Baywatch Seaside Restaurant & Bar</h2>
          <p className="section-desc">
            Dine right beside the gentle waves of Patnem Beach. From freshly caught Arabian Sea seafood and authentic
            Goan delicacies to multi-cuisine classics, sunset happy hour cocktails, and relaxed sunbed service.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Catch Seafood & Multi-Cuisine */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Seafood Grill and Goan Multi-Cuisine Dining at Patnem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Coastal Gastronomy & Multi-Cuisine
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Patnem Fresh Seafood & Classics
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Choose your catch of the day—tandoori pomfret, butter garlic jumbo prawns, Goan fish curry rice,
              or continental and Indian favorites cooked fresh and served by candlelit oceanfront tables.
            </p>
          </div>

          {/* Card 2: Baywatch Sunset Bar */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Sunset Happy Hours and Cocktails at Baywatch Patnem Beach Bar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sunset Happy Hours & Cocktails
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Baywatch Beachfront Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Toast Patnem's golden sunsets during daily happy hours with signature tropical cocktails, cashew Feni blends,
              chilled beers, and fresh mocktails to chill coastal vibes by the shoreline.
            </p>
          </div>

          {/* Card 3: Morning Sunbed Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Sunbed Breakfast by Patnem Surf"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Breakfast by Patnem Surf
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              All-Day Lounger Dining
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Start your morning with tropical fruit platters, masala omelettes, pancakes, and freshly brewed coffee served
              on your sea-breeze balcony or directly at your reserved beach sunbed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
