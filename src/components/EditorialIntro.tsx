import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Central Vasco Transit & City Hospitality</span>

        <h2 className="statement-heading">
          Dependable comfort, spotless rooms & prime transit convenience <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in the heart of Vasco da Gama, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Strategically located in Mendes Mansion on F.L. Gomes Road (above YES Bank),
          TELES Westend Hotel is Vasco da Gama's trusted address for railway passengers, flight transit travelers,
          corporate professionals, and visiting families. Enjoy clean air-conditioned and standard rooms,
          attached bathrooms with 24-hour hot water, high-speed Wi-Fi, and 24/7 caretaking support.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Station-Side Hub</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Located just 400 meters (4 minutes walk) from Vasco da Gama Railway Station and
              close to the Kadamba Bus Stand, offering effortless arrivals and departures at any hour.
            </p>
          </div>

          <div className="pillar-card">
            <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Airport & Beach Access</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Only 5 km (12 minutes drive) from Goa Dabolim Airport (GOI) and 1.5 km from Baina Beach,
              making flight connections and evening coastal strolls completely stress-free.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Vasco Food Trails</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Surrounded by authentic Goan fish thali restaurants, Irani cafes, bakeries, and markets
              along F.L. Gomes Road, with round-the-clock room delivery assistance.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>400m</h3>
            <p>To Vasco Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>5 km</h3>
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
