import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">The Cradle of Kakatiya Heritage & Nature</span>

      <h2 className="statement-heading">
        A peaceful lakeside haven tucked beside the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          10,000-acre waters of Laknavaram.
        </em>
      </h2>

      <p className="statement-body">
        Constructed in the 13th century by visionary Kakatiya rulers, Laknavaram Lake cradles 13
        enchanting green islands enveloped by the dense deciduous forests of Mulugu. Kakatiya Resorts
        was curated as your ultimate nature sanctuary — where cool water ripples, canopy birdsong,
        welcoming cottages, and swimming pool fun invite you to slow down and unwind.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>13-Island Lake Basin</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Moments away from the iconic 160-meter suspension hanging bridge, speed boating,
            and pristine hill panoramas of Laknavaram.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Pool & Water Fun</h3>
          <p style={{ fontSize: "0.94rem" }}>
            An inviting outdoor swimming pool equipped with water slides and kids splash areas,
            surrounded by lush green coconut palms.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Campfires & Orugallu Feasts</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Savor authentic Telangana country chicken, fresh lake fish fry, and gather around
            warm twilight bonfires under starlit forest skies.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>10,000 Ac</h3>
          <p>Historic Lake Area</p>
        </div>
        <div className="stat-item">
          <h3>13</h3>
          <p>Natural Islands</p>
        </div>
        <div className="stat-item">
          <h3>160m</h3>
          <p>Suspension Bridge</p>
        </div>
        <div className="stat-item">
          <h3>4.2 ★</h3>
          <p>Google Guest Rating</p>
        </div>
      </div>
    </section>
  );
};
