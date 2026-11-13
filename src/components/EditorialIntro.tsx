import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Beachside Living in Palolem, South Goa</span>

        <h2 className="statement-heading">
          Sea-view balcony rooms, wooden beach cottages & sunset horizons <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            just 50 meters from Palolem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Located on Palolem Street in Mohanbagh, ROYAL CASTLE RESORT Palolem offers comfortable coastal lodging
          just a 1-minute walk from the turquoise crescent of Palolem Beach. Enjoy deluxe sea-view balcony rooms,
          spacious wooden beach cottages, on-site multi-cuisine dining, split A/C, hot showers, and warm hospitality.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>50m to Palolem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Steps away from Palolem's calm, protected golden crescent.
              Ideal for safe morning swimming, paddleboarding, dolphin boat tours, and sunset walks.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Sea-View Balconies & Cottages</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose deluxe upper-floor rooms with panoramic sea views, premium wooden beach cottages, or quiet
              garden rooms—all fitted with modern attached bathrooms and split A/C.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Multi-Cuisine Restaurant & Bar</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Feast on fresh Goan seafood, North Indian tandoori grills, Chinese dishes, and sunset drinks served
              in our open-air dining pavilion and outdoor garden seating.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>50 m</h3>
            <p>Walk to Palolem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>Sea View</h3>
            <p>Private Balcony Rooms</p>
          </div>
          <div className="stat-item">
            <h3>2 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>₹2,600+</h3>
            <p>Resort Room Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
