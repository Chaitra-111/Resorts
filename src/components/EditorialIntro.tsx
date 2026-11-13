import React from "react";
import { Waves, Sparkles, Utensils } from "lucide-react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="editorial-section" id="story">
      <div className="content-container">
        <span className="section-label">Poolside Serenity near Rajbagh Beach</span>

        <h2 className="statement-heading">
          Outdoor swimming pool, executive suites & lush coconut gardens <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--amber)" }}>
            moments from pristine Rajbagh Beach, South Goa.
          </em>
        </h2>

        <p className="statement-body">
          Nestled at Rajbag Tarir in Kindlebag, right beside The LaLiT Golf & Spa Resort and just 500 meters from Rajbagh Beach,
          Royal Resort Rajbag offers upscale tranquility in South Goa. Unwind in our sparkling outdoor swimming pool, rejuvenate
          at the spa, savor authentic Goan seafood, and retreat to spacious air-conditioned suites with private balconies.
        </p>

        {/* Feature Pillars */}
        <div className="statement-pillars">
          <div className="pillar-card">
            <Waves size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Outdoor Swimming Pool</h3>
            <p style={{ fontSize: "0.94rem" }}>
              A crystal-clear outdoor swimming pool with surrounding sun loungers and palm gardens—perfect for refreshing
              morning laps or relaxing sunny afternoons.
            </p>
          </div>

          <div className="pillar-card">
            <Sparkles size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Executive & Family Suites</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Choose spacious Executive Pool-View Suites, Deluxe Family Suites, or Super Deluxe Rooms—all complete with
              private balconies, split A/C, and modern amenities.
            </p>
          </div>

          <div className="pillar-card">
            <Utensils size={28} style={{ color: "var(--amber)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Multi-Cuisine Dining & Lounge</h3>
            <p style={{ fontSize: "0.94rem" }}>
              Enjoy authentic Goan seafood curries, sizzling tandoori grills, continental favorites, and evening cocktails
              served poolside and in our open-air restaurant.
            </p>
          </div>
        </div>

        {/* Key Stats Counter */}
        <div className="statement-stats">
          <div className="stat-item">
            <h3>500 m</h3>
            <p>Walk to Rajbagh Beach Sand</p>
          </div>
          <div className="stat-item">
            <h3>Pool & Spa</h3>
            <p>Full Leisure Amenities</p>
          </div>
          <div className="stat-item">
            <h3>3 km</h3>
            <p>To Canacona Railway Station</p>
          </div>
          <div className="stat-item">
            <h3>₹3,400+</h3>
            <p>Resort Room Tariff</p>
          </div>
        </div>
      </div>
    </section>
  );
};
