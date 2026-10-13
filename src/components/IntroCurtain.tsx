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
        {/* Kakatiya Kala Thoranam Arch Emblem */}
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
            {/* Kakatiya Arch / Gateway representation */}
            <path d="M12 54V22H18V54" />
            <path d="M46 54V22H52V54" />
            <path d="M8 22H56" />
            <path d="M10 16H54" />
            <path d="M16 16C20 10 44 10 48 16" />
            <circle cx="32" cy="13" r="3" stroke="var(--amber)" fill="rgba(165,88,45,0.2)" />
            {/* Lake water waves beneath */}
            <path d="M16 48C22 46 26 50 32 48C38 46 42 50 48 48" />
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
            Laknavaram Lake · Bussapur, Telangana
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
            Kakatiya Resorts
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
            "Lakeside Serenity, Heritage Cottages & Nature Under the Open Stars."
          </span>
        </p>
      </div>
    </div>
  );
};
