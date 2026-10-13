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
        {/* Valley & Canal Emblem */}
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
            {/* Sun above valley */}
            <circle cx="32" cy="18" r="6" stroke="var(--amber)" fill="rgba(165,88,45,0.18)" />
            {/* Rolling valley hills */}
            <path d="M8 48L24 26L36 38L48 24L56 48H8Z" />
            {/* Winding canal in the center */}
            <path d="M30 40C26 44 38 48 34 54" strokeWidth="2.2" />
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
            Beside Canal · Mallampally, Warangal
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
            Chamundi Resorts & Valley
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
            "Valley Serenity, Canal Breezes & Rustic Luxury Under Open Skies."
          </span>
        </p>
      </div>
    </div>
  );
};
