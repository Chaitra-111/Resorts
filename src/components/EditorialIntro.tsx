import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Beachfront Living in Patnem, South Goa</span>

        <h2 className="statement-heading">
          Handcrafted wooden beach cottages, sea-facing verandas & gentle tides <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            just 30 meters from Patnem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Situated near Home Patnem on scenic Patnem Beach, Mia's Beach Resort offers the quintessential South Goa coastal escape.
          Wake up to the gentle rhythm of bay waves in authentic timber cottages, step onto the tranquil sands in under 30 seconds,
          and savor freshly caught seafood, continental breakfasts, and sunset drinks at our beachfront shack & cafe.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>30m to Patnem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Just a 30-second walk directly onto Patnem's sheltered crescent.
              Ideal for safe morning swimming, relaxing beach walks, yoga, and quiet sunbathing away from crowds.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Handcrafted Wooden Cottages</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose frontline sea-facing wooden cottages, deluxe palm grove rooms, or rustic beach huts—all
              fitted with modern attached bathrooms, 24/7 hot showers, and split A/C.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Beach Shack & Cafe Dining</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Dine with your feet in the sand on fresh Goan fish curry, wood-fired pizzas, healthy smoothie bowls,
              and chilled cocktails as the sun sinks into the Arabian Sea.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>30 m</h3>
            <p>Walk to Patnem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>Sea View</h3>
            <p>Wooden Verandas & Porches</p>
          </div>
          <div className="stat-item">
            <h3>3 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>₹1,800+</h3>
            <p>Resort Cottage Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
