import React from "react";
import { Utensils, Beer, Sun } from "lucide-react";

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
          <span className="section-label">Beach Shack & Oceanfront Dining</span>
          <h2 className="section-title">Sarita Beach Bar & Restaurant</h2>
          <p className="section-desc">
            Dine with your toes in the sand. Relish freshly caught Arabian Sea fish, sizzling tiger prawns,
            authentic Goan curries, and refreshing sea breeze cocktails right by the water's edge.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Catch & Goan Curries */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Sarita Beachfront Seafood & Goan Fish Curry Thali"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Coastal Gastronomy
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Goan Seafood & Curries
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Savor iconic Kingfish rava fry, butter garlic squids, crab masala, and traditional Goan coconut fish curry
              rice prepared with daily catches sourced directly from local Bogmalo fishermen.
            </p>
          </div>

          {/* Card 2: Chilled Beers & Beach Shack Bar */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Beach Shack Bar and Sunset Drinks at Sarita"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Beer size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Full Bar & Refreshments
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Beach Bar & Sunset Drinks
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Unwind with ice-cold Kingfisher beer, classic Feni cocktails, fruit juices, and mocktails as the sun
              dips below the Arabian Sea horizon, accompanied by gentle beach reggae and wave sounds.
            </p>
          </div>

          {/* Card 3: Morning Beach Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Beach Breakfast and Fresh Juices"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Breakfast by the Waves
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Morning Shore Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Start your coastal day with masala omelettes, warm toast, fresh Goan pao bhaji, seasonal fruit platters,
              and steaming South Indian filter coffee served at open-air tables overlooking the morning surf.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
