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
          <span className="section-label">Kitchen & Culinary Freedom</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
            Indoor & Outdoor Kitchens with Live BBQ
          </h2>
          <p style={{ maxWidth: "640px", margin: "0.8rem auto 0" }}>
            Enjoy complete self-cooking freedom in our fully equipped kitchens, coordinate with the caretaker
            for village-style meals, or fire up the live outdoor barbecue for poolside feasting.
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
                alt="Fully Equipped Ranch Kitchen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Full Kitchen Setup
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Self-Cooking Freedom & Dining Hall
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Spacious indoor kitchen with double-door refrigerator, gas burner, cookware, and cutlery
              allowing your group to cook customized meals or coordinate with our resident caretaker.
            </p>
          </div>

          {/* Card 2: Live Barbecue & Campfire */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                alt="Poolside Barbecue by the Bonfire"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Flame size={18} />
              <span style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Poolside Grills
              </span>
            </div>
            <h3 style={{ fontSize: "1.55rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Live Charcoal BBQ & Evening Bonfire
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Gather under open starry night skies for sizzling paneer and chicken skewers on the outdoor grill,
              paired with drinks and music beside the crackling bonfire pit.
            </p>
          </div>

          {/* Card 3: Lakeside Garden Breakfast */}
          <div className="card-tilt" style={{ padding: "2.5rem" }}>
            <div style={{ position: "relative", height: "200px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
                alt="Outdoor Terrace Breakfast"
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
              Sunlit Lawn & Terrace Breakfast
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65 }}>
              Wake up to hot brewed filter coffee, fresh morning tea, and warm breakfasts served on the private
              lawn or rooftop terrace with pristine rural forest views.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
