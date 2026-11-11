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
          <span className="section-label">Candlelit Beachfront Dining & Lounge</span>
          <h2 className="section-title">Next-ta-Sea Beach Restaurant & Shack Bar</h2>
          <p className="section-desc">
            Dine right beside Palolem's calm golden bay. From freshly caught Arabian Sea seafood and authentic Goan fish curries
            to continental breakfasts, sunset cocktails, and lantern-lit tables directly on the sand.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Catch Seafood & Candlelit Sand Tables */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Seafood Grill and Candlelit Beach Dining at Palolem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Candlelit Shore Dining
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Palolem Catch & Multi-Cuisine
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Savor fresh catch tandoori snapper, butter garlic king prawns, Goan prawn masala,
              and global kitchen classics prepared to order at lantern-lit tables beside the surf.
            </p>
          </div>

          {/* Card 2: Next-ta-Sea Sunset Shack Bar */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Sunset Drinks and Cocktails at Next-ta-Sea Beach Bar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sundowners & Beach Shack Bar
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Mohanbagh Twilight Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Unwind at sunset along Ourem beach with chilled beers, handcrafted coastal cocktails, spiced Feni infusions,
              and fresh tropical fruit mocktails while watching boats glide across Palolem Bay.
            </p>
          </div>

          {/* Card 3: Balcony & Sunbed Morning Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Sea-View Balcony Breakfast at Palolem Beach"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Balcony & Lounger Service
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Sunbed & Room Dining
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Wake up after morning yoga to smoothie bowls, warm croissants, omelettes, and freshly brewed coffee served
              on your sea-facing wooden porch or directly to your shaded beach sunbed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
