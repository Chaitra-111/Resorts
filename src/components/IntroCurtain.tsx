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
        {/* Hill Station & Mountain Mist Emblem */}
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
            {/* Sunrise over mountains */}
            <circle cx="32" cy="16" r="5" stroke="var(--amber)" fill="rgba(165,88,45,0.18)" />
            {/* Ananthagiri Mountain Peaks */}
            <path d="M6 50L22 22L36 38L48 20L58 50H6Z" />
            {/* Forest mist / waves */}
            <path d="M12 54C22 51 32 57 42 53C48 51 52 54 56 53" strokeWidth="2" />
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
            Telangana Tourism · Ananthagiri Hills, Vikarabad
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
            Haritha Resort Ananthagiri
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
            "Misty Valley Heights, Sacred Hills & Pine Breezes Just 75 km from Hyderabad."
          </span>
        </p>
      </div>
    </div>
  );
};
