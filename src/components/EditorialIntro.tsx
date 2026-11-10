import React from "react";
import { Waves, Sparkles, Compass } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Exclusive North Goa Villa Living</span>

        <h2 className="statement-heading">
          Private infinity pools, panoramic river horizons & bespoke butler care <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in picturesque Reis Magos, North Goa.
          </em>
        </h2>

        <p className="statement-body">
          Set along the scenic Nerul-Reis Magos coastal corridor, Coco Aavya - Luxury Villas redefines bespoke vacationing in North Goa.
          Surrounded by the serene backwaters of the Nerul River and lush tropical hillsides, our signature 3BHK and 4BHK private pool estates
          provide uncompromised privacy, designer European aesthetics, dedicated butler service, and effortless access to Candolim Beach.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Private Infinity Pools</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Every villa features an exclusive private swimming pool, sun deck with loungers,
              ambient mood illumination, and tranquil tropical palm backdrops.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Butler & Private Chef</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Experience high-end hospitality with dedicated villa attendants, daily gourmet breakfasts,
              customized poolside barbecue dinners, and handcrafted cocktail service.
            </p>
          </div>

          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Candolim Coastal Hub</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Only 5 minutes to Coco Beach, 8 minutes to Candolim Beach sands and Fort Aguada,
              and 15 minutes to Panaji’s Mandovi riverfront casino and dining scene.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>Private</h3>
            <p>Pools in Every Villa</p>
          </div>
          <div className="stat-item">
            <h3>4,800</h3>
            <p>Sq.Ft. Grand Estates</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Butler & Concierge</p>
          </div>
          <div className="stat-item">
            <h3>8 Mins</h3>
            <p>To Candolim Beach</p>
          </div>
        </div>
      </div>
    </section>
  );
};
