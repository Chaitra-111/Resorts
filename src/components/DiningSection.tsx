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
          <span className="section-label">Coastal Gastronomy & Beach Shack Dining</span>
          <h2 className="section-title">Royal Woods Beach Shack & Bar</h2>
          <p className="section-desc">
            Dine with your feet in the warm sand overlooking the turquoise bay.
            From freshly grilled Arabian Sea seafood and traditional Goan fish curries to sizzling tandoori grills, pizzas, and sunset cocktails.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Seafood & Coastal Curries */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Goan Seafood and Coastal Curries at Royal Woods Beach Resort Palolem"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Fresh Catch & Goan Spices
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Palolem Fresh Seafood
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Savor fresh catch tandoori pomfret, kingfish rava fry, garlic butter jumbo prawns, and spicy coconut Goan fish
              curry served with hot steamed rice and local accompaniments.
            </p>
          </div>

          {/* Card 2: Garden Bar & Sunset Drinks */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Sunset Cocktails and Chilled Drinks at Royal Woods Beach Shack"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sunset Cocktails & Beach Lounge
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Royal Woods Beach Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Relax right by the tide with chilled beers, handcrafted tropical mojitos, local cashew Feni concoctions,
              and refreshing fruit juices as twilight blankets the Palolem crescent.
            </p>
          </div>

          {/* Card 3: Morning Breakfast on the Sand */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Breakfast and Coffee at Royal Woods Beach Resort"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Oceanfront Breakfast & Cottage Service
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Palolem Shore Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Begin your coastal morning with banana pancakes, masala eggs, muesli bowls, fresh fruit platters,
              and rich South Indian filter coffee or tea served directly overlooking the sea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
