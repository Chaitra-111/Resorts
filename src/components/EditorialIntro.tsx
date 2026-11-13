import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Direct Beachfront Living on Patnem Beach</span>

        <h2 className="statement-heading">
          Sea-facing wooden huts, A/C bungalows & toe-in-the-sand dining <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            directly on the sands of Patnem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Located right at the Patnem Beach Entrance in Canacona, Casa Fiesta Sea Facing Resort pairs South Goa's
          unspoiled coastal charm with comfortable beachfront living. Step straight from your wooden hut or A/C bungalow
          onto the warm golden sand, lounge beneath shaded umbrellas, and enjoy famous Mexican and Goan seafood dining right by the surf.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>0m on Patnem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Direct beach frontage on Patnem's sheltered, family-friendly crescent.
              Ideal for safe morning swimming, sunset shoreline walks, and relaxing on beach loungers.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Sea-Facing Huts & Bungalows</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose rustic wooden beach huts with ocean-view balconies, split A/C bungalows, or family suites—all
              fitted with modern attached baths, hot water, and private verandas.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Mexican & Seafood Beach Shack</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Toe-in-the-sand dining famous for fresh seafood grills, sizzling fajitas, Goan curries, and sunset
              cocktails served right to your reserved beachfront sunbed.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>Directly on Patnem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>5 min</h3>
            <p>Walk to Colomb Bay & Palolem</p>
          </div>
          <div className="stat-item">
            <h3>3 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>₹2,600+</h3>
            <p>Beach Hut & Bungalow Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
