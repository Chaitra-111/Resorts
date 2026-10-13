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
            Orugallu Kitchen & Lakeside Feasts
          </h2>
          <p style={{ maxWidth: "640px", margin: "0.8rem auto 0" }}>
            Savor authentic Telangana culinary feasts, fresh lake fish fry, country chicken curries,
            and sizzling live barbecues prepared fresh at our on-site kitchen.
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
                alt="Orugallu Kitchen at Kakatiya Resorts"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Orugallu Kitchen
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Telangana Culinary Specialties
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Traditional Natukodi pulusu (country chicken), Gongura mutton & paneer, fresh Laknavaram
              lake fish fry, and fragrant pot dum biryanis cooked to order.
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
                Twilight Tandoor
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Live Barbecue by the Campfire
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Gather under the starry forest night sky for sizzling paneer tikkas, spicy chicken kebabs,
              and live grill stations set right beside the campfire circle.
            </p>
          </div>

          {/* Card 3: Lakeside Garden Breakfast */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
                alt="Garden Breakfast"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Coffee size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Morning Brews
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Lakeside Garden Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Wake up to steaming filter coffee, crisp ghee dosas, hot idlis, and fresh seasonal fruit
              served in our open-air garden or right onto your cottage veranda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
