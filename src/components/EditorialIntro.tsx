import React from "react";
import { Trees, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <span className="section-label">Exclusive Forest Farmstay Experience</span>

      <h2 className="statement-heading">
        A private 6BR pool sanctuary nestled along the <br />
        <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
          peaceful woodland edge of Pargi.
        </em>
      </h2>

      <p className="statement-body">
        Tucked into the lush green countryside near Pargi just 68 km from Hyderabad, The Ranch by MagoStays
        is crafted for total seclusion and unforgettable group celebrations. Featuring 6 spacious air-conditioned
        bedrooms, an exclusive outdoor swimming pool, smart projector home theater, self-cooking kitchens, and
        starlit barbecue lawns, it provides the ultimate private farmstay retreat.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Private Pool & Sun Deck</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Enjoy refreshing daytime swims in your exclusive outdoor pool surrounded by wooden decks,
            sun loungers, and forest greenery.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Projector Home Theater</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Gather the entire group in the expansive living hall for movies, gaming, and IPL match
            screenings on the HD smart projector.
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
          <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Barbecue & Bonfire Nights</h3>
          <p style={{ fontSize: "0.94rem" }}>
            Sizzle fresh skewers on the outdoor charcoal grill, share stories by the crackling bonfire,
            and enjoy open-air stargazing.
          </p>
        </div>
      </div>

      {/* Key Stats Counter */}
      <div className="statement-stats">
        <div className="stat-item">
          <h3>68 km</h3>
          <p>From Hyderabad</p>
        </div>
        <div className="stat-item">
          <h3>6 BR</h3>
          <p>AC Master Bedrooms</p>
        </div>
        <div className="stat-item">
          <h3>30 Guests</h3>
          <p>Stay Capacity</p>
        </div>
        <div className="stat-item">
          <h3>4.8 ★</h3>
          <p>Guest Rating (Superhost)</p>
        </div>
      </div>
    </section>
  );
};
