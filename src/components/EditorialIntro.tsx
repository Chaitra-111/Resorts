import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Direct Beachfront Serenity in South Goa</span>

        <h2 className="statement-heading">
          Seafront balcony cottages, swaying coconut palms & Arabian Sea sunsets <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            directly on Patnem Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Nestled at H.No. 156/A along serene Patnem Beach on the Palolem–Patnem Road in Canacona, Baywatch Beach Resort and Restaurant Patnem
          blends laid-back coastal charm with modern seaside comforts. Step straight from your seafront cottage onto tranquil sands,
          savor fresh coastal gastronomy, and unwind beneath twilight skies at our oceanfront restaurant and bar.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>0m on Patnem Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Direct beach frontage along one of South Goa's calmest, cleanest golden crescents.
              Ideal for safe swimming, kayaking, sunset strolls, and peaceful sea-watching.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Seafront Balcony Cottages</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose from sea-view cottages with private sit-out balconies, deluxe A/C rooms,
              or shaded garden retreats designed for relaxing coastal stays.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Patnem Bar & Kitchen</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Dine right beside the surf with fresh Goan seafood, international favorites,
              sunset happy hour cocktails, and complimentary sunbed lounge service all day.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>To Patnem Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>5 min</h3>
            <p>To Colomb Bay & Palolem</p>
          </div>
          <div className="stat-item">
            <h3>3 km</h3>
            <p>To Canacona Station</p>
          </div>
          <div className="stat-item">
            <h3>₹2,200+</h3>
            <p>Beachside Room Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
