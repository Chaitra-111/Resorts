import React from "react";
import { Building2, Compass, Heart } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Boutique Goa Beach & Balcony Stays</span>

        <h2 className="statement-heading">
          Gentle sea breezes, private balconies & tranquil coastal living <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            in the scenic enclave of Bogmalo, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Situated on Bogmalo Beach Road near the celebrated Naval Aviation Museum,
          Sea View Resort provides a peaceful and economical coastal refuge for travelers.
          Relax in air-conditioned rooms featuring private sit-out balconies, stroll through our
          peaceful garden, savor fresh Goan seafood at nearby beach shacks, and enjoy seamless
          10-minute transit to Goa Dabolim International Airport.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Compass size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Bogmalo Beach & Coast</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Just 1 km (12-minute walk) from the gentle golden sands of Bogmalo Beach,
              water sports, sunset sea shacks, and panoramic views of the Arabian Sea.
            </p>
          </div>

          <div className="pillar-card">
            <Building2 size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Private Balcony Comfort</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Every morning begins with fresh sea air and palm-lined views from your private sit-out
              balcony, complete with comfortable seating and quiet surroundings.
            </p>
          </div>

          <div className="pillar-card">
            <Heart size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Dabolim Airport Corridor</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Only 4 km (under 10 minutes) from Goa Dabolim International Airport (GOI),
              making late arrivals, layovers, and early flight departures completely effortless.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>1 km</h3>
            <p>To Bogmalo Beach</p>
          </div>
          <div className="stat-item">
            <h3>4 km</h3>
            <p>To Dabolim Airport</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Balcony & AC Rooms</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Front Desk & Cabs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
