import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">Telangana's Premier Hill Station Escape</span>

      <h2 className="statement-heading">
        A misty forest hill retreat perched atop the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          panoramic mountain crest of Ananthagiri Hills.
        </em>
      </h2>

      <p className="statement-body">
        At 700 meters above sea level and enveloped by dense medicinal teak forests, Haritha Resort Ananthagiri
        offers crisp mountain breezes, sunrise valley views, and direct access to ancient cave temples and forest trekking routes.
        Located just 75 km from Hyderabad, it is the premier weekend destination for families, trekkers, and peace seekers.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Misty Hilltop Climate</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Wake up to rolling morning fog, pure oxygen-rich air, and chirping mountain birds
            at 700m elevation far above the city heat.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Ancient Sacred Shrine</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Just 1.5 km from the historic Sri Anantha Padmanabha Swamy Temple in natural rock caves,
            revered as the sacred origin of River Musi.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Kotepally Boating & Treks</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Enjoy kayaking and pedal boating at Kotepally Reservoir (14 km), or hike along forest trails
            winding through medicinal plant reserves.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>75 km</h3>
          <p>From Hyderabad</p>
        </div>
        <div className="stat-item">
          <h3>700 m</h3>
          <p>Hill Elevation</p>
        </div>
        <div className="stat-item">
          <h3>1.5 km</h3>
          <p>To Ancient Temple</p>
        </div>
        <div className="stat-item">
          <h3>3.6 ★</h3>
          <p>Google Rating (3,500+)</p>
        </div>
      </div>
    </section>
  );
};
