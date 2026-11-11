import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Boutique Poolside Sanctuary near Agonda Beach</span>

        <h2 className="statement-heading">
          Freeform winding pool, thatched cabanas & coastal serenity <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            1-minute walk from Agonda Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Located at Building No. 312 along serene Beach Road in Dhavalkhazan, Agonda, Sapphire Sand Resort is a quiet
          12-cabana boutique hideaway featuring a winding freeform swimming pool and an exclusive 2-BHK family villa.
          Enjoy modern in-room comforts—split A/C, flat-screen TV, electric kettle, and inverter power backup—just 300m from the sand.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Winding Freeform Pool</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Our signature meandering outdoor pool wraps past tropical gardens and shaded sunbeds—a tranquil alternative
              before or after ocean swims 300m away at Agonda Beach.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>12 Cabanas & 2-BHK Villa</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose thatched pool-view King cabanas or our spacious 2-BHK coastal villa—all complete with A/C,
              flat-screen TV, electric kettle, hot water & reliable power backup.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Multi-Cuisine Poolside Kitchen</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Feast at our on-site multi-cuisine restaurant or order effortless room service straight to your cabana porch
              after exploring Cola Lagoon and Northern Agonda.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>300 m</h3>
            <p>1-Min Walk to Agonda Beach</p>
          </div>
          <div className="stat-item">
            <h3>12 Cabanas</h3>
            <p>Plus Exclusive 2-BHK Villa</p>
          </div>
          <div className="stat-item">
            <h3>4 km</h3>
            <p>To Cola Emerald Lagoon</p>
          </div>
          <div className="stat-item">
            <h3>₹3,500+</h3>
            <p>Boutique Cabana Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
