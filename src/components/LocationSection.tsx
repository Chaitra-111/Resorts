import React from "react";
import { RESORT_CONTACT } from "../data/resortData";
import { MapPin, Navigation, Phone, Clock, Compass, Car, Train, Building } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section
      id="location"
      className="section-pad"
      style={{
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        <div className="section-header-center">
          <span className="section-label">Prime Central Location</span>
          <h2 className="section-title">Location & Getting Here</h2>
          <p className="section-desc">
            Centrally situated on Hyderabad Road in Dwaraka Nagar, Nizamabad — right near Devi Theatre 'X' Road and Venu Mall.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
        >
          {/* Location Details & Directions */}
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              borderRadius: "20px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
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
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                }}
              >
                <Compass size={16} />
                <span>Nizamabad City Center</span>
              </div>

              <h3 style={{ fontSize: "1.8rem", color: "var(--ink)", marginBottom: "0.8rem" }}>
                {RESORT_CONTACT.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                  fontSize: "0.96rem",
                  lineHeight: 1.6,
                  color: "var(--ink)",
                }}
              >
                <MapPin size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "3px" }} />
                <span>{RESORT_CONTACT.address}</span>
              </div>

              {/* Transit Breakdown */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  padding: "1.2rem 0",
                  borderTop: "1px solid var(--card-border)",
                  borderBottom: "1px solid var(--card-border)",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Building size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--ink)" }}>
                    <strong>130m from Venu Mall:</strong> Shopping, dining & multiplex (1 min walk).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Train size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--ink)" }}>
                    <strong>2.0 km from Railway Station:</strong> Nizamabad Junction (~7 mins).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Car size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--ink)" }}>
                    <strong>1.5 km from Bus Depot:</strong> TSRTC Central Station (~5 mins).
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Clock size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--ink)" }}>
                    <strong>Operating Hours:</strong> 24/7 Front Desk, Concierge & Room Service.
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <Phone size={18} style={{ color: "var(--amber)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.92rem", color: "var(--ink)" }}>
                    <strong>Direct Contacts:</strong> {RESORT_CONTACT.phone} / {RESORT_CONTACT.phoneAlt}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
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
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--card-border)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              minHeight: "480px",
            }}
          >
            <iframe
              title="Hotel Nikhil Sai International Nizamabad Map"
              src={RESORT_CONTACT.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", display: "block" }}
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
