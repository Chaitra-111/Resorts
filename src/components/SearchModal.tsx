import React, { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { RESORT_SUITES, RESORT_AMENITIES } from "../data/resortData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToSection,
}) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  // Search items database
  const items = [
    ...RESORT_SUITES.map((s) => ({
      title: s.name,
      category: "Room / Suite",
      description: s.description,
      target: "suites",
    })),
    ...RESORT_AMENITIES.map((a) => ({
      title: a.title,
      category: "Amenity",
      description: a.description,
      target: "experiences",
    })),
    {
      title: "Baithak & Upper Deck Banquets",
      category: "Events",
      description: "Host up to 600+ guests for weddings, sangeet receptions, and corporate conferences.",
      target: "banquets",
    },
    {
      title: "Chaskah Restaurant & Inswinger Lounge",
      category: "Dining",
      description: "Authentic Hyderabadi Dum Biryanis, tandoori platters, and vibrant sports bar lounge.",
      target: "dining",
    },
    {
      title: "Location & Transit in Nizamabad",
      category: "Location",
      description: "130m from Venu Mall, 1.5 km from Bus Depot, 2 km from Nizamabad Railway Station.",
      target: "location",
    },
    {
      title: "Verified Guest Reviews & Ratings",
      category: "Reviews",
      description: "4.5+ star guest ratings on Google Maps and Justdial.",
      target: "reviews",
    },
  ];

  const filtered = query.trim()
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : items;

  return (
    <div className="drawer-backdrop" onClick={onClose} style={{ alignItems: "flex-start", paddingTop: "10vh" }}>
      <div
        className="card-tilt"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "680px",
          background: "var(--cream)",
          padding: "2rem",
          borderRadius: "24px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid var(--card-border)",
            marginBottom: "1.5rem",
          }}
        >
          <Search size={22} style={{ color: "var(--amber)" }} />
          <input
            type="text"
            placeholder="Search rooms, dining, banquets, location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              fontSize: "1.2rem",
              color: "var(--ink)",
              outline: "none",
              fontFamily: "var(--sans)",
            }}
          />
          <button onClick={onClose} className="btn-icon">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: "380px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "var(--muted)" }}>
              No facilities found matching "{query}"
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onNavigateToSection(item.target);
                  onClose();
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.2rem",
                  background: "var(--card-bg)",
                  borderRadius: "14px",
                  border: "1px solid var(--card-border)",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--amber)";
                  e.currentTarget.style.background = "var(--cream-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.background = "var(--card-bg)";
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.2rem" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--amber)",
                      }}
                    >
                      {item.category}
                    </span>
                    <h5 style={{ fontSize: "1.05rem", color: "var(--ink)", margin: 0 }}>{item.title}</h5>
                  </div>
                  <p style={{ fontSize: "0.84rem", color: "var(--muted)", margin: 0 }}>{item.description}</p>
                </div>
                <ArrowRight size={16} style={{ color: "var(--amber)", flexShrink: 0 }} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
