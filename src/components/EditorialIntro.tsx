import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Beachfront Living in Palolem, South Goa</span>

        <h2 className="statement-heading">
          Handcrafted wooden beach cottages, sea-facing verandas & ocean waves <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            directly on the sand of Palolem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Situated on Ourem Road in Mohanbagh, Royal Woods Beach Resort offers the quintessential South Goa beach escape.
          Wake up to the sound of rolling waves in authentic timber cottages, step straight from your private porch onto
          the golden sand, and savor freshly caught seafood and chilled cocktails at our beach shack.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Direct Palolem Beachfront</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Zero-meter step onto Palolem's famous golden sands.
              Enjoy safe swimming in sheltered waters, morning dolphin spotting, and relaxed sunbathing.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Handcrafted Wooden Cottages</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose frontline sea-facing wooden cottages, elevated bay-view rooms, or palm grove cottages—all
              fitted with modern attached bathrooms, 24/7 hot showers, and split A/C.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Beach Shack & Sunset Bar</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Dine with your toes in the sand on fresh Goan fish curry, grilled tandoori catch, wood-fired pizzas,
              and tropical cocktails as the sun sets over the Arabian Sea.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>Direct Beachfront on Sand</p>
          </div>
          <div className="stat-item">
            <h3>Sea View</h3>
            <p>Wooden Balconies & Porches</p>
          </div>
          <div className="stat-item">
            <h3>2.5 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>₹2,600+</h3>
            <p>Beach Cottage Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
