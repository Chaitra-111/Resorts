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
          <span className="section-label">Poolside Dining & In-Cabana Service</span>
          <h2 className="section-title">Sapphire Sand Multi-Cuisine Restaurant</h2>
          <p className="section-desc">
            Savor fresh coastal flavors right beside our winding swimming pool in Dhavalkhazan. From authentic Goan seafood
            curries and North Indian specialties to morning breakfast platters and convenient cabana room service.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Multi-Cuisine Kitchen & Goan Seafood */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Fresh Goan Seafood and Multi-Cuisine Dining at Sapphire Sand Resort Agonda"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Goan, Indian & Continental
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Fresh Agonda Coastal Kitchen
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Enjoy sizzling tandoori seafood, authentic Goan prawn curry, homestyle thalis, and fresh wok dishes cooked to
              order beside the palm-shaded pool courtyard.
            </p>
          </div>

          {/* Card 2: Poolside Refreshments & Evening Lounge */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Poolside Evenings and Refreshments at Sapphire Sand Resort"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Poolside Deck & Chillout
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Sapphire Poolside Lounge
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              After watching twilight paint Agonda Beach just 300m away, return to our lantern-lit winding pool for
              refreshing tropical coolers, evening bites, and laid-back music.
            </p>
          </div>

          {/* Card 3: Cabana Porch & Breakfast Service */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Breakfast and Cabana Room Service at Sapphire Sand Agonda"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Sun size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                In-Cabana & Pool Breakfast
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Cabana Room Service
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Start unhurried mornings with tea brewed via your electric kettle, fresh omelettes, parathas, or smoothie
              bowls delivered right to your shaded veranda or poolside lounger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
