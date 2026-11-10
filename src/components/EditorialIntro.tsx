import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Premier Luxury Rooms & Suites</span>

        <h2 className="statement-heading">
          Contemporary luxury, executive comfort & serene living <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in the heart of Pragathi Nagar, Mubaraknagar.
          </em>
        </h2>

        <p className="statement-body">
          Located along Kakatiya Girls College Road in Pragathi Nagar, Mubaraknagar,
          S P GRAND Luxury Rooms is Nizamabad's premier destination for corporate professionals,
          wedding guests, visiting families, and leisure travelers. Offering thoughtfully designed
          air-conditioned luxury rooms, high-speed fiber Wi-Fi, 24/7 front desk concierge, and secure on-site parking.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Prime Pragathi Nagar</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Situated in the calm, serene neighborhood of Mubaraknagar near Kakatiya Girls College,
              with quick transit to Nizamabad Junction Railway Station, hospitals, and central retail hubs.
            </p>
          </div>

          <div className="pillar-card">
            <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Executive & Family Suites</h3>
            <p style={{ fontSize: "0.94rem" }}>
              From ergonomic executive workspaces for business guests to expansive multi-bed suites
              for wedding entourages and visiting families, enjoy refined comfort tailored to every stay.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Dining & Concierge Care</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Enjoy seamless room service, doorstep delivery from Nizamabad's top culinary dining spots,
              complimentary morning tea/coffee support, and 24-hour hot water showers.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>4.0 ★</h3>
            <p>120+ Verified Reviews</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Front Desk & Concierge</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Air-Conditioned Comfort</p>
          </div>
          <div className="stat-item">
            <h3>₹1,200+</h3>
            <p>Starting Room Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
