import React, { useEffect, useState } from "react";

interface IntroCurtainProps {
  onComplete: () => void;
}

export const IntroCurtain: React.FC<IntroCurtainProps> = ({ onComplete }) => {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLifted(true);
      setTimeout(onComplete, 900);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`intro-curtain ${lifted ? "lifted" : ""}`}
      onClick={() => {
        setLifted(true);
        setTimeout(onComplete, 800);
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* Luxury Ranch & Pool Villa Emblem */}
        <div style={{ marginBottom: "1.8rem" }}>
          <svg
            width="58"
            height="58"
            viewBox="0 0 64 64"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Ranch Villa Gable Roof */}
            <path d="M8 32L32 14L56 32" />
            <path d="M14 28V50H50V28" />
            {/* Arched entrance doorway */}
            <path d="M26 50V38C26 35 38 35 38 38V50" />
            {/* Pool water ripple below */}
            <path d="M10 56C20 53 28 59 38 56C44 54 50 58 54 56" strokeWidth="2" />
            {/* Star accent */}
            <circle cx="32" cy="24" r="3" stroke="var(--amber)" fill="rgba(165,88,45,0.25)" />
          </svg>
        </div>

        <span className="rise-mask" style={{ marginBottom: "0.5rem" }}>
          <span
            className="rise"
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--amber)",
              fontWeight: 600,
              "--d": "0.15s",
            } as React.CSSProperties}
          >
            MagoStays Luxury Farmstays · Pargi, Vikarabad
          </span>
        </span>

        <h2 className="rise-mask" style={{ margin: "0.8rem 0 1.2rem" }}>
          <span
            className="rise"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.2,
              "--d": "0.35s",
            } as React.CSSProperties}
          >
            The Ranch by MagoStays
          </span>
        </h2>

        <p className="rise-mask">
          <span
            className="rise"
            style={{
              fontSize: "1.05rem",
              fontStyle: "italic",
              fontFamily: "var(--serif)",
              color: "var(--muted)",
              "--d": "0.55s",
            } as React.CSSProperties}
          >
            "Exclusive 6BR Pool Farmstay & Forest Seclusion Just 68 km from Hyderabad."
          </span>
        </p>
      </div>
    </div>
  );
};
