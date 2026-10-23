import React from "react";
import { RESORT_CONTACT } from "../data/resortData";
import { MapPin, Navigation, Phone, Clock, Compass, Car, Train, Building } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="section-pad"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Prime Central Location</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--ink)" }}>
            Location & Getting Here
          </h2>
          <p style={{ maxWidth: "620px", margin: "0.8rem auto 0" }}>
            Centrally situated on Hyderabad Road in Dwaraka Nagar, Nizamabad — right near Devi Theatre 'X' Road and Venu Mall.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Location Details & Directions */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "24px",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--amber)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                <Compass size={16} />
                <span>Nizamabad City Center</span>
              </div>

              <h3 style={{ fontSize: "1.9rem", color: "var(--ink)", marginBottom: "1rem" }}>
                {RESORT_CONTACT.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                <MapPin size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "4px" }} />
                <span>{RESORT_CONTACT.address}</span>
              </div>

              {/* Transit Breakdown */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1.5rem 0",
                  borderTop: "1px solid var(--card-border)",
                  borderBottom: "1px solid var(--card-border)",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Building size={18} style={{ color: "var(--amber)" }} />
                  <span style={{ fontSize: "0.92rem" }}>
                    <strong>130m from Venu Mall:</strong> Premier shopping, cinema & retail hub (1 min walk).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Train size={18} style={{ color: "var(--amber)" }} />
                  <span style={{ fontSize: "0.92rem" }}>
                    <strong>2.0 km from Railway Station:</strong> Nizamabad Junction (approx. 7 mins drive).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Car size={18} style={{ color: "var(--amber)" }} />
                  <span style={{ fontSize: "0.92rem" }}>
                    <strong>1.5 km from Bus Stand:</strong> Nizamabad Central TSRTC Depot (approx. 5 mins).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Clock size={18} style={{ color: "var(--amber)" }} />
                  <span style={{ fontSize: "0.92rem" }}>
                    <strong>Operating Hours:</strong> 24/7 Front Desk, Concierge & In-Room Dining.
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Phone size={18} style={{ color: "var(--amber)" }} />
                  <span style={{ fontSize: "0.92rem" }}>
                    <strong>Direct Contact:</strong> {RESORT_CONTACT.phone} / {RESORT_CONTACT.phoneAlt}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={RESORT_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
                data-cursor="Navigate"
              >
                <Navigation size={15} />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${RESORT_CONTACT.phoneRaw}`}
                className="btn-outline"
                data-cursor="Call Hotel"
              >
                <Phone size={15} />
                <span>Call Front Desk</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Container */}
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid var(--card-border)",
              boxShadow: "0 14px 40px rgba(66,44,32,0.08)",
              minHeight: "440px",
            }}
          >
            <iframe
              title="Hotel Nikhil Sai International Nizamabad Map"
              src={RESORT_CONTACT.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px", display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
