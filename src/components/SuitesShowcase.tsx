import React from "react";
import { RESORT_SUITES, RESORT_CONTACT, type Suite } from "../data/resortData";
import { Users, Maximize2, Bed, Check, Calendar, ArrowRight } from "lucide-react";
import gsap from "gsap";

interface SuitesShowcaseProps {
  onSelectSuite: (suite: Suite) => void;
  selectedSuiteIds: string[];
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({
  onSelectSuite,
  selectedSuiteIds,
}) => {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    gsap.to(el, {
      rotateY: (px - 0.5) * 6,
      rotateX: (0.5 - py) * 6,
      transformPerspective: 1000,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="suites"
      className="section-pad"
      style={{
        background: "var(--cream-soft)",
        borderTop: "1px solid var(--card-border)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="left">
            <span className="section-label">Boutique Accommodations</span>
            <h2 className="section-title">Rooms & Executive Suites</h2>
          </div>
          <div className="right">
            <p className="section-desc">
              Thoughtfully tailored for corporate travelers, wedding entourages, and family weekend
              visits. Enjoy central air conditioning, high-speed fiber Wi-Fi, and 24/7 room service.
            </p>
          </div>
        </div>

        {/* Suites Grid (2 x 2 Balanced) */}
        <div className="suites-grid">
          {RESORT_SUITES.map((suite) => {
            const isSelected = selectedSuiteIds.includes(suite.id);

            return (
              <div
                key={suite.id}
                className="card-tilt"
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                data-cursor="Suite Details"
                style={{
                  borderColor: isSelected ? "var(--amber)" : "var(--card-border)",
                }}
              >
                {/* Image Header with Category & Price */}
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "20px 20px 0 0",
                  }}
                >
                  <img
                    src={suite.image}
                    alt={suite.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.85rem",
                      left: "0.85rem",
                      background: "rgba(18, 12, 8, 0.78)",
                      backdropFilter: "blur(8px)",
                      color: "#fff",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {suite.category}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.85rem",
                      right: "0.85rem",
                      background: "var(--amber)",
                      color: "#fff",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
                    }}
                  >
                    ₹{suite.pricePerNight.toLocaleString()}
                    <span style={{ fontSize: "0.7rem", fontWeight: 400, marginLeft: "3px" }}>
                      /night
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div
                  className="suite-card-body"
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.55rem",
                      color: "var(--ink)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {suite.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontStyle: "italic",
                      color: "var(--amber)",
                      marginBottom: "0.9rem",
                    }}
                  >
                    "{suite.tagline}"
                  </p>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--muted)",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {suite.description}
                  </p>

                  {/* Room Meta Specs */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                      padding: "0.85rem 0",
                      borderTop: "1px solid var(--card-border)",
                      borderBottom: "1px solid var(--card-border)",
                      marginBottom: "1.2rem",
                      fontSize: "0.85rem",
                      color: "var(--ink)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Users size={15} style={{ color: "var(--amber)" }} />
                      <span>{suite.capacity}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Maximize2 size={15} style={{ color: "var(--amber)" }} />
                      <span>{suite.sizeSqFt} sq.ft</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        gridColumn: "span 2",
                      }}
                    >
                      <Bed size={15} style={{ color: "var(--amber)" }} />
                      <span>{suite.bedType}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1.8rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    {suite.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          color: "var(--muted)",
                        }}
                      >
                        <Check size={14} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions (pushed to bottom) */}
                  <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
                    <button
                      onClick={() => onSelectSuite(suite)}
                      className="btn-luxury"
                      style={{
                        flex: 1,
                        background: isSelected ? "var(--ink)" : "var(--amber)",
                      }}
                      data-cursor="Select"
                    >
                      <Calendar size={14} />
                      <span>{isSelected ? "Selected" : "Select Suite"}</span>
                    </button>
                    <a
                      href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(
                        `Hi ${RESORT_CONTACT.name}, I would like details about ${suite.name} (₹${suite.pricePerNight}/night).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      title="WhatsApp direct inquiry"
                      data-cursor="Inquire"
                      style={{ padding: "0.72rem 1rem" }}
                    >
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
