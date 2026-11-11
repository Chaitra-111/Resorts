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
          <h2 className="section-title">The Tito's Orange Sky Kitchen & Bar</h2>
          <p className="section-desc">
            Feast right on the golden sands of Agonda Beach. From freshly grilled Arabian Sea catch and authentic
            Goan fish curries to sunset beach bar cocktails and relaxed sunbed service.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Fresh Catch Seafood Grill */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Seafood Grill and Goan Fish Curry at Agonda"
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
              Fresh Agonda Seafood Grill
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Choose your fresh catch of the day—tandoori red snapper, butter garlic jumbo prawns, crispy kingfish rava fry,
              or fiery Goan prawn curry—cooked to perfection and served by candlelit oceanfront tables.
            </p>
          </div>

          {/* Card 2: Tito's Sunset Bar */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Sunset Cocktails at The Tito's Orange Sky Beach Bar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sundowners & Cocktails
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Orange Sky Beach Bar
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Toast Agonda's famous tangerine sunsets with signature Tito's cocktails, local Feni infusions, chilled beers,
              and tropical fruit mocktails while relaxing to chill acoustic music by the shoreline.
            </p>
          </div>

          {/* Card 3: Morning Sunbed Breakfast */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Sunbed Breakfast by Agonda Waves"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Sunbed & Sand Service
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              All-Day Sunbed Dining
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Begin the day with acai smoothie bowls, eggs benedict, pancakes, and freshly brewed coffee served
              directly to your shaded wooden cottage veranda or reserved beach lounger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
