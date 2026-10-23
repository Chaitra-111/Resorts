import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">The Standard of Nizamabad Hospitality</span>

      <h2 className="statement-heading">
        Premier boutique luxury & grand banquets at the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          heart of Telangana's commercial hub.
        </em>
      </h2>

      <p className="statement-body">
        Strategically positioned along the Hyderabad Road corridor near Devi Theatre 'X' Road,
        Hotel Nikhil Sai International has established itself as Nizamabad’s landmark address for
        distinguished corporate travelers, wedding celebrations, and family staycations. Offering
        over 60 contemporary rooms and suites, celebrated fine dining at Chaskah, and flexible
        banquet spaces designed to elevate every occasion.
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
          <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Prime City Center</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Located right on Hyderabad Road in Dwaraka Nagar, merely 130 meters from Venu Mall,
            1.5 km from the main bus stand, and 2 km from Nizamabad Railway Station.
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
          <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Grand Celebrations</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Host unforgettable destination weddings, receptions, and business summits across our
            Baithak Banquet Hall, Executive Boardroom, and scenic Upper Deck rooftop venue.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Iconic Dining & Lounges</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Experience gourmet Hyderabadi Dum Biryanis and tandoor flavors at Chaskah Restaurant,
            paired with evening relaxation at Inswinger sports bar and Outswinger lounge.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>60+</h3>
          <p>Rooms & Suites</p>
        </div>
        <div className="stat-item">
          <h3>600+</h3>
          <p>Banquet Capacity</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Concierge & Dining</p>
        </div>
        <div className="stat-item">
          <h3>4.5 ★</h3>
          <p>Guest Rating</p>
        </div>
      </div>
    </section>
  );
};
