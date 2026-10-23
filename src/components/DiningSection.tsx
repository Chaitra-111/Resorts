import React from "react";
import { Utensils, Flame, Wine } from "lucide-react";

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
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Culinary Flavors & Feasts</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
            Chaskah Restaurant & Sports Lounges
          </h2>
          <p style={{ maxWidth: "640px", margin: "0.8rem auto 0" }}>
            From authentic royal Hyderabadi dum biryanis to vibrant cricket-themed lounge evenings,
            savor culinary excellence crafted fresh by seasoned master chefs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Card 1: Chaskah Multi-Cuisine Restaurant */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Chaskah Multi-Cuisine Restaurant at Hotel Nikhil Sai"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Fine Dining Landmark
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Chaskah Restaurant
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              The crown of Nizamabad dining: fragrant Hyderabadi Mutton and Chicken Dum Biryanis,
              aromatic paneer butter masala, crispy tandoori rotis, and delectable Chinese wok specialties.
            </p>
          </div>

          {/* Card 2: Inswinger Sports Bar & Lounge */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
                alt="Inswinger Sports Bar and Lounge"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Flame size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Vibrant Sports Bar
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Inswinger Sports Lounge
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Catch live cricket and sporting tournaments on high-definition big screens while enjoying
              chilled beverages, handcrafted cocktails, and sizzling tandoori kebab platters.
            </p>
          </div>

          {/* Card 3: Outswinger Terrace & 24/7 Room Service */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Outswinger Lounge and 24/7 Room Service"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Terrace & Room Service
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Outswinger Lounge & In-Room
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Unwind in the open breeze at Outswinger terrace, or enjoy gourmet comfort food
              and piping hot filter coffee delivered directly to your suite at any hour of the day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
