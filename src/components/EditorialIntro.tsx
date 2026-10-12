import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">8-Acre Nature Sanctuary</span>

      <h2 className="statement-heading">
        A serene villa sanctuary tucked amidst the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          green estates of Moinabad.
        </em>
      </h2>

      <p className="statement-body">
        Just 15 kilometers from Gachibowli Financial District, Woodland Resorts is an 8-acre
        haven of lush manicured grounds, 51 private luxury villas, and calm open skies. Designed
        for unhurried weekend getaways, grand destination celebrations, and corporate retreats
        far from the city commotion.
      </p>

      {/* Feature Pillars */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.8rem",
          margin: "3rem 0 4.5rem",
          textAlign: "left",
        }}
      >
        <div
          style={{
            padding: "2rem",
            background: "var(--card-bg)",
            borderRadius: "18px",
            border: "1px solid var(--card-border)",
          }}
        >
          <Trees size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Lush 8-Acre Canopy</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Stroll through flowering gardens, manicured emerald lawns, and private villa pathways
            designed to deliver immediate tranquility.
          </p>
        </div>

        <div
          style={{
            padding: "2rem",
            background: "var(--card-bg)",
            borderRadius: "18px",
            border: "1px solid var(--card-border)",
          }}
        >
          <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>20-Minute City Getaway</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Effortless drive from Gachibowli via Chevella Road / ORR Exit 18, putting luxury
            seclusion right at Hyderabad’s doorstep.
          </p>
        </div>

        <div
          style={{
            padding: "2rem",
            background: "var(--card-bg)",
            borderRadius: "18px",
            border: "1px solid var(--card-border)",
          }}
        >
          <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>51 Private Villas</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Individually crafted villas with personal lawn sit-outs, ambient interiors, and total
            privacy for couples, families, and gatherings.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>8 Acres</h3>
          <p>Lush Green Estate</p>
        </div>
        <div className="stat-item">
          <h3>51 Villas</h3>
          <p>Private Living Units</p>
        </div>
        <div className="stat-item">
          <h3>1500+</h3>
          <p>Lawn Capacity</p>
        </div>
        <div className="stat-item">
          <h3>4.8 ★</h3>
          <p>Google Guest Rating</p>
        </div>
      </div>
    </section>
  );
};
