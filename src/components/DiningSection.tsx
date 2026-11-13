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
          <span className="section-label">Poolside Dining & Refreshing Cocktails</span>
          <h2 className="section-title">Royal Multi-Cuisine Restaurant & Lounge Bar</h2>
          <p className="section-desc">
            Dine right beside our sparkling outdoor swimming pool or in our spacious indoor dining pavilion.
            Serving authentic Goan seafood curries, sizzling tandoori grills, continental breakfast classics, and tropical drinks.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Catch & Goan Coastal Cuisine */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Goan Coastal Seafood and Tandoori Delicacies at Royal Resort Rajbag"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Authentic Coastal & Tandoor
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Rajbagh Seafood & Curries
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Savor spicy Goan fish curry rice, butter garlic lobster, crispy rava fried kingfish, and tandoori platters
              prepared with fresh local ingredients by our culinary team.
            </p>
          </div>

          {/* Card 2: Poolside Bar & Lounge */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Poolside Drinks and Night Club Lounge at Royal Resort"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Poolside Lounge & Night Club
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Poolside Bar & Evening Lounge
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Relax by the poolside sun deck with handcrafted tropical cocktails, chilled beers, and evening music in our
              vibrant on-site night club and lounge space.
            </p>
          </div>

          {/* Card 3: Morning Breakfast & Room Service */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Breakfast and Suite Room Service at Royal Resort Rajbag"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Poolside Breakfast & Room Dining
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Suite Balcony Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Wake up to delicious breakfast spreads—fresh fruit platters, South Indian dosas, eggs to order, and hot brewed
              coffee served beside the pool or directly on your private suite balcony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
