import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Handcrafted Palolem Beachfront Hospitality</span>

        <h2 className="statement-heading">
          Sea-facing wooden bungalows, sunset balconies & candlelit sands <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            right on Palolem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Located at Rosy Wing along Ourem Road in Mohanbagh, Palolem Beach, Next-ta-Sea Resort pairs South Goa's
          iconic wooden beach-hut charm with split A/C comfort and warm oceanfront hospitality. Choose elevated
          first-floor sea-view suites, step-out beachfront bungalows, or kitchenette cabins moments from calm bay waters.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>0m on Palolem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Direct beachfront position on Palolem's sheltered golden crescent.
              Calm turquoise tides perfect for sunrise swims, kayaking, and evening shore walks.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Wooden Bungalows & Mild Cabins</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Pick elevated first-floor panoramic sea-view suites, ground sand-level bungalows,
              or long-stay kitchenette cabins along Ourem's palm-lined shores.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Candlelit Beach Dining</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Enjoy multi-cuisine Indian, Goan seafood & continental favorites served under starlight
              on Palolem sands alongside free resort sun loungers.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>To Palolem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>Oct–May</h3>
            <p>Prime Coastal Season</p>
          </div>
          <div className="stat-item">
            <h3>2 km</h3>
            <p>To Canacona Station</p>
          </div>
          <div className="stat-item">
            <h3>₹3,200+</h3>
            <p>Wooden Bungalow Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
