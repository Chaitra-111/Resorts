import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Unspoilt Beachfront Bliss in South Goa</span>

        <h2 className="statement-heading">
          Private jacuzzi beach bungalows, warm ocean breeze & crimson sunsets <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            right on Agonda Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Nestled at Plot No. 118/1 near St. Anne's Church along Agonda Beach Road, The Tito's Orange Sky Agonda Beach Resort
          blends bohemian coastal charm with indulgent beachfront comforts. Wake up steps from tranquil golden sands,
          unwind inside your private terrace jacuzzi, and dine beneath starlit skies at our seafront bar and restaurant.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>0m on Agonda Beach</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Direct beach frontage along one of Asia's serene, uncrowded golden beaches.
              Ideal for safe swimming, sunset walks, and peaceful sea-watching.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Private Jacuzzi Bungalows</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Our signature wooden beach bungalows come equipped with private outdoor jacuzzis,
              cushioned sun decks, and unobstructed views of the Arabian Sea twilight.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Orange Sky Bar & Kitchen</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Feast right on the sands with freshly caught seafood, authentic Goan curries,
              handcrafted cocktails, and complimentary sunbed service all day long.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>0 m</h3>
            <p>To Agonda Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>Private</h3>
            <p>Jacuzzi Beach Cottages</p>
          </div>
          <div className="stat-item">
            <h3>8 km</h3>
            <p>To Palolem & Cola Lagoon</p>
          </div>
          <div className="stat-item">
            <h3>₹4,200+</h3>
            <p>Beachfront Cottage Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
