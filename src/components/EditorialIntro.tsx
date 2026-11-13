import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Handcrafted Beachfront Living in South Goa</span>

        <h2 className="statement-heading">
          Handcrafted wooden cottages, rustic beach huts & tropical palms <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            just 100 meters from Palolem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Nestled at Plot No. 103/5-B along peaceful Ourem Road in Mohanbagh, Palolem Beach, Dreams of Palolem Beach Resort
          delivers authentic South Goa coastal warmth. Stay in handcrafted wooden cottages, traditional beach huts, or family
          quad cottages with split A/C, attached hot showers, free Wi-Fi, and an on-site multi-cuisine restaurant.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>100m to Palolem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              A peaceful 2-minute walk onto Palolem's sheltered golden crescent and calm turquoise waters.
              Perfect for safe swimming, morning paddleboarding, and evening sunset strolls.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Wooden Cottages & Beach Huts</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose deluxe wooden cottages, traditional thatched beach huts, or family quad suites—all
              fitted with split air-conditioning, attached modern hot-water baths, and private verandas.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>On-Site Restaurant & Bar</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Feast on fresh Goan seafood, authentic tandoori grills, North Indian curries, and refreshing
              sunset drinks served in our breezy open dining pavilion and delivered to your cottage.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>100 m</h3>
            <p>Walk to Palolem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>2 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>Quad</h3>
            <p>Family Cottages Available</p>
          </div>
          <div className="stat-item">
            <h3>₹3,200+</h3>
            <p>Beachside Cottage Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
