import React from "react";
import { Compass, Heart, Plane } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Village Serenity & Genuine Goan Hospitality</span>

        <h2 className="statement-heading">
          Spotless rooms, tranquil palm groves & prompt airport transit <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in picturesque Bogmalo, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Situated at House No. 94 along Bogmalo Road (just 50 meters from Bogmalo Church),
          Noel Guest House offers travelers a quiet, restful retreat nestled in green village surroundings.
          Take a gentle 5-minute stroll down to Bogmalo Beach, enjoy attentive personal hospitality from Cajetan Rodrigues and family,
          and reach Goa Dabolim International Airport in just 5 to 7 minutes.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>5-Min Beach Walk</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Just ~400 meters from the golden sands of Bogmalo Beach. Enjoy safe bay swimming,
              watersports, and evening sunsets at seaside shacks without beachfront noise.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Warm Family Hosting</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Hosted with genuine care by Cajetan Rodrigues and family. Enjoy spotless rooms,
              dependable scooter rentals, and honest local dining suggestions.
            </p>
          </div>

          <div className="pillar-card">
            <Plane size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Airport Transit Hub</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Located just 4 km (5 to 7 minutes drive) from Goa Dabolim Airport (GOI), with flexible
              24/7 check-in assistance accommodating odd-hour flight arrivals and departures.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>400m</h3>
            <p>To Bogmalo Beach</p>
          </div>
          <div className="stat-item">
            <h3>4 km</h3>
            <p>To Dabolim Airport</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Front Desk & Hot Water</p>
          </div>
          <div className="stat-item">
            <h3>₹1,100+</h3>
            <p>Budget Starting Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
