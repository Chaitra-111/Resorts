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
        {/* Luxury Hill Crest Emblem */}
        <div style={{ marginBottom: "1.8rem" }}>
          <svg
            width="54"
            height="54"
            viewBox="0 0 64 64"
            fill="none"
            stroke="var(--amber)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Majestic Mountain Ridges and Sun */}
            <circle cx="32" cy="18" r="7" stroke="var(--amber)" fill="rgba(165,88,45,0.12)" />
            <path d="M8 52L26 26L36 38L46 24L58 52H8Z" />
            <path d="M26 26L34 38" />
            <path d="M46 24L40 38" />
            <path d="M14 52C22 50 42 50 50 52" />
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
            Ananthagiri Hills · Vikarabad
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
            Hills View Residential Resort
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
            "Where the hills whisper peace, and time slows down."
          </span>
        </p>
      </div>
    </div>
  );
};
