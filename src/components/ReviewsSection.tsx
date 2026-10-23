import React from "react";
import { RESORT_REVIEWS, RESORT_CONTACT } from "../data/resortData";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="section-pad"
      style={{
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Guest Impressions</span>
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", color: "var(--ink)" }}>
            Loved by Travelers, Families & Event Hosts
          </h2>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(165,88,45,0.1)",
              padding: "0.45rem 1.2rem",
              borderRadius: "9999px",
              marginTop: "1rem",
              color: "var(--amber)",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            <div style={{ display: "flex", gap: "2px", color: "var(--amber)" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="var(--amber)" stroke="none" />
              ))}
            </div>
            <span>Verified 4.5+ ★ on Google Reviews & Justdial</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2.2rem",
            marginBottom: "3.5rem",
          }}
        >
          {RESORT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "20px",
                padding: "2.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.2rem", color: "var(--amber)" }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--amber)" stroke="none" />
                  ))}
                </div>
                <p style={{ fontSize: "0.96rem", lineHeight: 1.65, color: "var(--ink)", marginBottom: "1.5rem" }}>
                  "{rev.comment}"
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--card-border)",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1rem", color: "var(--ink)", fontWeight: 700 }}>{rev.author}</h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{rev.location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--amber)", fontSize: "0.75rem", fontWeight: 600 }}>
                  <ShieldCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Google Maps & Justdial Reviews */}
        <div style={{ textAlign: "center" }}>
          <a
            href={RESORT_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            data-cursor="Reviews"
          >
            <span>View More Reviews on Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
