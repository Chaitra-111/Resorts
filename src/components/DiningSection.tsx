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
          <span className="section-label">On-Site Dining & Garden Lounge</span>
          <h2 className="section-title">Dreams of Palolem Multi-Cuisine Restaurant & Bar</h2>
          <p className="section-desc">
            Savor delicious coastal dining just steps from the shore. From freshly caught Arabian Sea fish and Goan curries
            to authentic North Indian tandoori grills, Chinese wok favorites, and chilled drinks.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Seafood & Goan Specialties */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Goan Seafood and Tandoori Grills at Dreams of Palolem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Fresh Catch & Curries
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Goan Seafood & Tandoor
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Choose your fresh catch—kingfish rava fry, tandoori pomfret, butter garlic prawns, or traditional Goan fish curry
              rice cooked with authentic local spices.
            </p>
          </div>

          {/* Card 2: Dreams Garden Bar & Sunset Drinks */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Chilled Beers and Cocktails at Dreams of Palolem Bar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sunset Drinks & Cocktails
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Dreams Garden Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Unwind beneath tropical palms with ice-cold beers, handcrafted cocktails, Goan cashew Feni mixes, and fresh
              fruit juices after a sun-soaked afternoon at the beach.
            </p>
          </div>

          {/* Card 3: Morning Breakfast on the Veranda */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Breakfast and Room Service at Dreams of Palolem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Morning Breeze & Room Service
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Veranda Breakfast Service
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Start your Palolem day with freshly brewed coffee, masala omelettes, warm parathas, pancakes, or tropical
              fruit bowls served on your private cottage veranda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
