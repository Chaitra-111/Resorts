import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">The Art of Peaceful Stays</span>

      <h2 className="statement-heading">
        A private residential retreat tucked in the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          green lungs of Telangana.
        </em>
      </h2>

      <p className="statement-body">
        Just 75 kilometers from the bustling tech corridors of Hyderabad lies Vikarabad's
        celebrated Ananthagiri Hills. Hills View Luxury Holidays Residential Resort was curated as
        an antidote to urban rush — a sanctuary where towering teak canopies, cool hilltop breezes,
        and spacious residential suites invite you to unwind completely.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Forest Oxygen Belt</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Surrounded by historic medicinal flora and dense teak trees, offering refreshing
            microclimates significantly cooler than Hyderabad city year-round.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Effortless Getaway</h3>
          <p style={{ fontSize: "0.94rem" }}>
            A smooth 90-minute scenic drive from Financial District / Gachibowli through rural
            countryside roads, making it the perfect weekend escape.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Residential Privacy</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Large family-first residential suites and private villas designed with home-like
            warmth, private balconies, and dedicated event grounds.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>680m</h3>
          <p>Hill Elevation</p>
        </div>
        <div className="stat-item">
          <h3>90m</h3>
          <p>From Hyderabad</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Residential Care</p>
        </div>
        <div className="stat-item">
          <h3>5.0 ★</h3>
          <p>Guest Rating</p>
        </div>
      </div>
    </section>
  );
};
