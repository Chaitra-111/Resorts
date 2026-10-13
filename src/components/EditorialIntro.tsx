import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">Canalside Serenity in Mallampally</span>

      <h2 className="statement-heading">
        A rustic countryside retreat tucked along the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          breezy canal valley of Mallampally.
        </em>
      </h2>

      <p className="statement-body">
        Located along the scenic Warangal-Mulugu highway, Chamundi Resorts & Valley was envisioned
        as a tranquil countryside escape. Featuring soothing canal views, rustic wooden chalets,
        sparkling swimming pool waters, and leafy coconut groves, it serves as the perfect weekend
        pause for families and travelers exploring Warangal, Ramappa Temple, and Laknavaram Lake.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Canalside Greenery</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Wake up to refreshing canal breezes, rustling palms, and morning birdsong
            far removed from urban congestion.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Poolside Leisure</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Enjoy refreshing daytime swims in our outdoor pool, complete with comfortable
            deck loungers and garden walkways.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Campfires & Barbecue</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Gather around crackling evening bonfires with hot tandoor skewers, local Telangana
            feasts, and open-air stargazing.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>38 km</h3>
          <p>From Warangal City</p>
        </div>
        <div className="stat-item">
          <h3>400+</h3>
          <p>Lawn Guest Capacity</p>
        </div>
        <div className="stat-item">
          <h3>100%</h3>
          <p>Canalside Nature</p>
        </div>
        <div className="stat-item">
          <h3>4.0 ★</h3>
          <p>Guest Rating</p>
        </div>
      </div>
    </section>
  );
};
