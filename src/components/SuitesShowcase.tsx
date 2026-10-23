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
  // 3D Pointer Tilt with Specular Sheen (matching velora-code)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);

    gsap.to(el, {
      rotateY: (px - 0.5) * 8,
      rotateX: (0.5 - py) * 8,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
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
      <div style={{ maxWidth: "1350px", margin: "0 auto" }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <span className="section-label">Boutique Accommodations</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
              Rooms & Executive Suites
            </h2>
          </div>
          <p style={{ maxWidth: "520px", fontSize: "1.05rem" }}>
            Thoughtfully tailored for corporate travelers, wedding entourages, and family weekend
            visits. Enjoy central air conditioning, high-speed fiber Wi-Fi, and 24/7 room service.
          </p>
        </div>

        {/* Suites Grid with 3D Tilt */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "2.5rem",
          }}
        >
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
                  display: "flex",
                  flexDirection: "column",
                  borderColor: isSelected ? "var(--amber)" : "var(--card-border)",
                }}
              >
                {/* Image Gallery Header with Badge */}
                <div
                  style={{
                    position: "relative",
                    height: "270px",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  <img
                    src={suite.image}
                    alt={suite.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="suite-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "rgba(23, 20, 18, 0.75)",
                      backdropFilter: "blur(8px)",
                      color: "#fff",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {suite.category}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      background: "var(--amber)",
                      color: "#fff",
                      padding: "0.4rem 0.95rem",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    ₹{suite.pricePerNight.toLocaleString()}
                    <span style={{ fontSize: "0.72rem", fontWeight: 400, marginLeft: "3px" }}>
                      /night
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.7rem",
                      color: "var(--ink)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {suite.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.92rem",
                      fontStyle: "italic",
                      color: "var(--amber)",
                      marginBottom: "1.2rem",
                    }}
                  >
                    "{suite.tagline}"
                  </p>

                  <p
                    style={{
                      fontSize: "0.94rem",
                      lineHeight: 1.6,
                      color: "var(--ink)",
                      marginBottom: "1.5rem",
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
                      padding: "1rem 0",
                      borderTop: "1px solid var(--card-border)",
                      borderBottom: "1px solid var(--card-border)",
                      marginBottom: "1.5rem",
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
                      gap: "0.55rem",
                      marginBottom: "2rem",
                      fontSize: "0.86rem",
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
                        <Check size={14} style={{ color: "var(--amber)", flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: "0.8rem", marginTop: "auto" }}>
                    <button
                      onClick={() => onSelectSuite(suite)}
                      className={`btn-luxury`}
                      style={{
                        flex: 1,
                        background: isSelected ? "var(--ink)" : "var(--amber)",
                      }}
                      data-cursor="Select"
                    >
                      <Calendar size={14} />
                      <span>{isSelected ? "Selected in Plan" : "Select Suite"}</span>
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
                      style={{ padding: "0.82rem 1.1rem" }}
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
