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
            <span className="section-label">Hillside Forest Accommodations</span>
            <h2 style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.8rem)", color: "var(--ink)" }}>
              Hill Suites & Cottages
            </h2>
          </div>
          <p style={{ maxWidth: "520px", fontSize: "1.05rem" }}>
            Perched on the crest of Ananthagiri Hills, Vikarabad.
            Every suite features sweeping valley views, refreshing mountain breezes, and quiet forest seclusion.
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
                {/* Image & Category Tag */}
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <img
                    src={suite.image}
                    alt={suite.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s var(--ease-luxury)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1.2rem",
                      left: "1.2rem",
                      background: "rgba(20, 14, 10, 0.72)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                      padding: "0.35rem 0.9rem",
                      borderRadius: "9999px",
                      fontSize: "0.72rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {suite.category}
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.2rem",
                      right: "1.2rem",
                      background: "var(--glass-bg)",
                      backdropFilter: "blur(8px)",
                      color: "var(--ink)",
                      padding: "0.45rem 1rem",
                      borderRadius: "12px",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    ₹{suite.pricePerNight.toLocaleString()}{" "}
                    <span style={{ fontSize: "0.72rem", fontWeight: 400, color: "var(--muted)" }}>
                      / night
                    </span>
                  </div>
                </div>

                {/* Content Details */}
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
                      fontSize: "1.65rem",
                      marginBottom: "0.4rem",
                      color: "var(--ink)",
                    }}
                  >
                    {suite.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--amber)",
                      fontWeight: 600,
                      marginBottom: "1rem",
                    }}
                  >
                    {suite.tagline}
                  </p>

                  <p
                    style={{
                      fontSize: "0.94rem",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {suite.description}
                  </p>

                  {/* Room Specs */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1.2rem",
                      padding: "1rem 0",
                      borderTop: "1px solid var(--card-border)",
                      borderBottom: "1px solid var(--card-border)",
                      marginBottom: "1.5rem",
                      fontSize: "0.84rem",
                      color: "var(--ink)",
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                      <Users size={15} style={{ color: "var(--amber)" }} />
                      {suite.capacity}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                      <Maximize2 size={15} style={{ color: "var(--amber)" }} />
                      {suite.sizeSqFt} sq. ft.
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                      <Bed size={15} style={{ color: "var(--amber)" }} />
                      {suite.bedType}
                    </span>
                  </div>

                  {/* Key Features Bullet List */}
                  <ul
                    style={{
                      listStyle: "none",
                      marginBottom: "1.8rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    {suite.features.slice(0, 3).map((feat, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
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
                      href={`https://wa.me/${RESORT_CONTACT.phoneRaw}?text=${encodeURIComponent(
                        `Hi Haritha Resort Ananthagiri, I would like details about ${suite.name} (₹${suite.pricePerNight}/night).`
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
