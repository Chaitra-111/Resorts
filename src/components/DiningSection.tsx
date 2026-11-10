import React from "react";
import { Utensils, Coffee, Truck } from "lucide-react";

export const DiningSection: React.FC = () => {
  return (
    <section
      id="dining"
      className="section-pad"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div className="section-header-center">
          <span className="section-label">Culinary Flavors & City Dining</span>
          <h2 className="section-title">Dining & Vasco Food Trails</h2>
          <p className="section-desc">
            Savor authentic coastal flavors — from legendary Goan fish thali joints and bakeries
            along F.L. Gomes Road to prompt doorstep delivery right to your room.
          </p>
        </div>

        <div className="dining-grid">
          {/* Card 1: Vasco Food Strip */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Vasco da Gama Local Goan Dining and Seafood Thalis"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Utensils size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Steps From Hotel
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              F.L. Gomes Road Food Hub
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Steps from the hotel, indulge in famous Goan fish curry rice, prawn rava fry,
              North & South Indian meals, and evening street food treats.
            </p>
          </div>

          {/* Card 2: Morning Tiffin & Chai */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                alt="Morning Chai and Goan Pao Breakfast"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Coffee size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Early Morning Breakfast
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Goan Pao, Bhaji & Chai
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Kickstart your mornings with authentic Goan pao bhaji, piping hot idlis, puri sagu,
              and aromatic filter coffee from neighborhood cafes near the station.
            </p>
          </div>

          {/* Card 3: Room Delivery Assistance */}
          <div className="card-tilt" style={{ padding: "2.2rem" }}>
            <div style={{ position: "relative", height: "210px", borderRadius: "14px", overflow: "hidden", marginBottom: "1.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="In-Room Dining and Food Delivery"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--amber)", marginBottom: "0.5rem" }}>
              <Truck size={18} />
              <span style={{ fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                In-Room Convenience
              </span>
            </div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.8rem", color: "var(--ink)" }}>
              Doorstep Food Delivery
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: 1.65, color: "var(--muted)" }}>
              Relax comfortably in your room. Enjoy convenient Swiggy and Zomato food delivery
              assisted 24/7 by our front desk staff, along with hot tea and packaged drinking water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
