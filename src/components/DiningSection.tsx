import React from "react";
import { Utensils, Coffee, Truck } from "lucide-react";

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
          <span className="section-label">Local Flavors & Coastal Dining</span>
          <h2 className="section-title">Dining & Bogmalo Food Trails</h2>
          <p className="section-desc">
            Enjoy morning tea in our serene courtyard, and take an effortless 5-minute stroll to
            Bogmalo's renowned beachfront seafood shacks, seaside sunset bars, and village cafes.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Bogmalo Beach Shacks */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Bogmalo Beach Seafood Shacks and Goan Fish Thalis"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                5-Min Walk to Shore
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Bogmalo Beach Seafood Shacks
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Stroll down to legendary seaside shacks like John's Seagull and Joet's. Savor fresh Kingfish rava fry,
              prawn balchão, butter garlic squids, and chilled beverages right beside the waves.
            </p>
          </div>

          {/* Card 2: Morning Chai & Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Chai and Goan Breakfast"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Coffee size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Morning Warmth
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Morning Chai & Local Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Wake up to fresh morning tea or coffee in the courtyard. Nearby village bakeries offer warm Goan poi,
              pao bhaji, and South Indian tiffin spots for a delicious start before catching your flight.
            </p>
          </div>

          {/* Card 3: Food Delivery & Transit Snacks */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="In-Room Dining and Food Delivery"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Truck size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Doorstep Convenience
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Doorstep Delivery & Transit Takeaway
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Relax comfortably in your room. Enjoy convenient Swiggy and Zomato meal deliveries
              assisted 24/7 by the host family, along with packed snacks for early departures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
