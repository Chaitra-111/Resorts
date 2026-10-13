import React from "react";
import { Utensils, Flame, Coffee } from "lucide-react";

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
            Haritha Valley Restaurant & Hilltop Dining
          </h2>
          <p style={{ maxWidth: "640px", margin: "0.8rem auto 0" }}>
            Savor piping hot South Indian breakfasts, traditional Telangana curries, and flavorful biryanis
            accompanied by sweeping views of Ananthagiri's mist-covered forest hills.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Card 1: Regional & Multi-Cuisine Feasts */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Haritha Valley View Restaurant"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Haritha Hill Dining
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Telangana Regional Curries & Biryani
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Authentic Natukodi pulusu (country chicken), Gongura mutton, fragrant bagara rice, spicy egg roasts,
              and steaming hot dum biryanis freshly prepared on-site.
            </p>
          </div>

          {/* Card 2: Live Barbecue & Campfire */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Live Barbecue by the Bonfire"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Flame size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Campfire Grills
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Bonfires in the Chilly Hill Air
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Gather under crisp starry night skies for sizzling kebabs, tandoor snacks, and hot spiced chai
              right beside the evening bonfire circle.
            </p>
          </div>

          {/* Card 3: Lakeside Garden Breakfast */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
                alt="Misty Morning Breakfast"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Coffee size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Misty Morning Brews
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Hilltop South Indian Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Wake up to steaming filter coffee, crisp ghee dosas, soft idlis with sambar, and hot puris
              served overlooking early morning valley fog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
