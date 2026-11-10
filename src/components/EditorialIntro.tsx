import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Boutique Goa Beach & Poolside Stays</span>

        <h2 className="statement-heading">
          Sun-drenched palms, refreshing poolside swims & coastal calm <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in the scenic enclave of Bogmalo, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Nestled on Bogmalo Beach Road directly opposite the iconic Naval Aviation Museum,
          ATHI RESORTS offers travelers a serene tropical haven in South Goa. Unwind in spacious
          air-conditioned pool view and garden rooms, take refreshing dips in our outdoor swimming pool,
          savor local seafood, and enjoy seamless 10-minute connectivity to Goa Dabolim International Airport.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Bogmalo Beach & Coast</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Just 1 km (12-minute walk) from the gentle golden sands of Bogmalo Beach,
              water sports, sunset sea shacks, and panoramic views of the Arabian Sea.
            </p>
          </div>

          <div className="pillar-card">
            <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Outdoor Pool & Gardens</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Spend sunlit afternoons lounging by the open-air swimming pool, encircled by
              lush tropical landscaping, sunbeds, and tranquil palm-shaded courtyards.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Dabolim Airport Corridor</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Only 4 km (under 10 minutes) from Goa Dabolim International Airport (GOI),
              making late arrivals, layovers, and early flight departures completely effortless.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>1 km</h3>
            <p>To Bogmalo Beach</p>
          </div>
          <div className="stat-item">
            <h3>4 km</h3>
            <p>To Dabolim Airport</p>
          </div>
          <div className="stat-item">
            <h3>Pool</h3>
            <p>Outdoor Swimming Deck</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Front Desk & Cabs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
