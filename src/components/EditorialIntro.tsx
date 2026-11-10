import React from "react";
import { Waves, Utensils, Plane } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Beachfront Living & Authentic Goan Hospitality</span>

        <h2 className="statement-heading">
          Direct sand access, panoramic sea view balconies & vibrant seaside dining <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            right on Bogmalo Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Perched directly on the shoreline of Bogmalo Beach (right beside John's Seagull),
          Sarita Guest House Bar & Restaurant offers travelers a tranquil beachfront haven.
          Listen to the rhythm of ocean waves from your private balcony, savor fresh Goan seafood
          at our on-site sea shack restaurant, and reach Goa Dabolim International Airport in just 10 minutes.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>0 Meters to the Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Wake up and walk straight onto the golden sands of Bogmalo Beach. No road crossings,
              no transit hassle — just pure coastal breeze and sunset waters right at your doorstep.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Seafood Bar & Restaurant</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Our popular on-site beachfront restaurant and bar serves authentic Goan fish curry thali,
              prawn balchão, butter garlic calamari, chilled beers, and tropical beach shack cocktails.
            </p>
          </div>

          <div className="pillar-card">
            <Plane size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Airport Transit Hub</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Located just 4 km (under 10 minutes) from Goa Dabolim Airport (GOI), making Sarita the ultimate
              beach retreat for incoming flight arrivals, departing travelers, and weekend holidaymakers.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>To Bogmalo Beach Sand</p>
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
            <h3>₹1,400+</h3>
            <p>Affordable Beach Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
