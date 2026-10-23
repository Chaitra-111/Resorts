import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Central Transit & Budget Hospitality</span>

        <h2 className="statement-heading">
          Dependable comfort, spotless rooms & transit convenience <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in the heart of Khaleelwadi, Nizamabad.
          </em>
        </h2>

        <p className="statement-body">
          Strategically located on Jawahar Road beside the Fire Station in Khaleelwadi,
          Citylite Lodge is Nizamabad's trusted address for budget-conscious business travelers,
          pilgrims, and railway transit passengers. Offering clean air-conditioned and non-AC rooms,
          attached bathrooms with 24-hour hot water, high-speed Wi-Fi, and generous group accommodations.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Station-Side Hub</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Located just 600 meters (7 minutes walk) from Nizamabad Railway Station and
              1.2 km from TSRTC Bus Depot, offering hassle-free transit for travelers arriving at any hour.
            </p>
          </div>

          <div className="pillar-card">
            <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Affordable Group Stays</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Multi-bed family rooms and triple sharing layouts suited for wedding entourages,
              pilgrim groups, and corporate teams visiting Nizamabad at pocket-friendly tariffs.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Khaleelwadi Food Trails</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Surrounded by authentic Hyderabadi biryani centers, Andhra meals, and bakeries
              along Jawahar Road, with round-the-clock room delivery assistance from the front desk.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>600m</h3>
            <p>To Railway Junction</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Front Desk & Hot Water</p>
          </div>
          <div className="stat-item">
            <h3>₹900+</h3>
            <p>Budget Starting Tariff</p>
          </div>
          <div className="stat-item">
            <h3>4.2 ★</h3>
            <p>Google Guest Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
