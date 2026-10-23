import React, { useEffect, useState } from "react";
import { RESORT_CONTACT } from "../data/resortData";

interface IntroCurtainProps {
  onComplete: () => void;
}

export const IntroCurtain: React.FC<IntroCurtainProps> = ({ onComplete }) => {
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLifted(true);
      setTimeout(onComplete, 600);
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`intro-curtain ${lifted ? "lifted" : ""}`}
      onClick={() => {
        setLifted(true);
        setTimeout(onComplete, 300);
      }}
      title="Click to skip"
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* Luxury Hotel Crest Emblem */}
        <div style={{ marginBottom: "1.5rem" }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 64 64"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="32" cy="18" r="6" fill="rgba(165,88,45,0.18)" />
            <path d="M14 48L22 24L32 34L42 24L50 48H14Z" />
            <path d="M22 24L32 34L42 24" />
            <path d="M14 48H50" />
          </svg>
        </div>

        <span className="rise-mask" style={{ marginBottom: "0.4rem" }}>
          <span
            className="rise"
            style={{
              fontSize: "0.76rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--amber)",
              fontWeight: 700,
              "--d": "0.1s",
            } as React.CSSProperties}
          >
            Nizamabad · Telangana
          </span>
        </span>

        <h2 className="rise-mask" style={{ margin: "0.6rem 0 1rem" }}>
          <span
            className="rise"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 600,
              color: "var(--ink)",
              lineHeight: 1.2,
              "--d": "0.2s",
            } as React.CSSProperties}
          >
            {RESORT_CONTACT.name}
          </span>
        </h2>

        <p className="rise-mask">
          <span
            className="rise"
            style={{
              fontSize: "1rem",
              fontStyle: "italic",
              fontFamily: "var(--serif)",
              color: "var(--muted)",
              "--d": "0.35s",
            } as React.CSSProperties}
          >
            "Affordable comfort and central transit convenience in Nizamabad."
          </span>
        </p>
      </div>
    </div>
  );
};
