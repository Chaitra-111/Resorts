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
            Loved by Travelers & Families
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
            <span>4.8 / 5.0 Rated on Google Reviews & Guest Feedback</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
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
                boxShadow: "0 8px 24px rgba(66,44,32,0.04)",
              }}
            >
              <div style={{ display: "flex", gap: "3px", marginBottom: "1.2rem", color: "var(--amber)" }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--amber)" stroke="none" />
                ))}
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.65, fontStyle: "italic", flex: 1, marginBottom: "1.5rem" }}>
                "{rev.comment}"
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--card-border)",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1.1rem", color: "var(--ink)", marginBottom: "0.15rem" }}>
                    {rev.author}
                  </h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{rev.location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.78rem", color: "var(--amber)", fontWeight: 600 }}>
                  <ShieldCheck size={14} />
                  <span>Verified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href={RESORT_CONTACT.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "0.82rem" }}
            data-cursor="Open Google Maps"
          >
            <span>Read Verified Reviews on Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
