import React from "react";
import { Utensils, Wine, Flame } from "lucide-react";

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
          <span className="section-label">Gastronomic Experiences & In-Villa Dining</span>
          <h2 className="section-title">Culinary Artistry & Private Chef</h2>
          <p className="section-desc">
            Indulge in bespoke dining crafted exclusively for you — from sunrise poolside breakfasts and live seafood barbecues
            prepared by your private chef to celebrated waterfront fine-dining along the Nerul and Candolim strip.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Private Chef & Bespoke Menus */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Private Chef In-Villa Gourmet Dining at Coco Aavya"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Chef on Call
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Bespoke In-Villa Dining
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Enjoy customized gourmet menus crafted in your villa's modular kitchen. Savor fresh mud crab,
              butter garlic jumbo prawns, authentic Goan fish curry, and continental delicacies served by your butler.
            </p>
          </div>

          {/* Card 2: Poolside Barbecues & Cocktails */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Poolside Barbecue and Sunset Cocktails"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Flame size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Live Grill & Sundowners
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Poolside BBQ & Sundowners
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Host enchanting evening soirées by the illuminated pool deck. Our culinary team sets up live barbecue grills,
              artisanal cocktails, craft mocktails, and soft lounge music under the starlit Goan sky.
            </p>
          </div>

          {/* Card 3: Candolim & Nerul Fine-Dining Trails */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Candolim and Nerul Waterfront Fine Dining"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Wine size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Curated Restaurant Trail
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Nerul & Candolim Dining Trail
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Minutes away from legendary waterfront dining like The Lazy Goose, Bhatti Village, and Candolim’s
              premier beachfront clubs and cocktail bars, with VIP reservation assistance by our concierge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
