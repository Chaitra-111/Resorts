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
      category: "Sanctuary",
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
      title: "Poolside Lawns & Private Celebrations",
      category: "Events",
      description: "Host intimate celebrations, birthdays, sundowners, and team retreats for up to 50 guests.",
      target: "banquets",
    },
    {
      title: "Dual Kitchens, BBQ & Bonfire Gathering",
      category: "Dining",
      description: "Fully equipped indoor & outdoor kitchen for self-cooking, live charcoal barbecue grill, and star-lit bonfire pit.",
      target: "dining",
    },
    {
      title: "Drive from Hyderabad & Airport",
      category: "Location",
      description: "68 km from Hyderabad / Gachibowli (~1 hr 20 mins via Chevella Hwy); 65 km from Rajiv Gandhi Intl Airport (ORR Exit 7).",
      target: "location",
    },
    {
      title: "Superhost Verified Reviews & Ratings",
      category: "Reviews",
      description: "4.8-star guest feedback across Airbnb Superhost portfolio and Google Reviews.",
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
    : items.slice(0, 4);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingBottom: "1.2rem",
            borderBottom: "1px solid var(--card-border)",
            marginBottom: "1.5rem",
          }}
        >
          <Search size={22} style={{ color: "var(--amber)" }} />
          <input
            type="text"
            placeholder="Search 6BR villa, private pool, BBQ, home theater, route…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              fontSize: "1.2rem",
              fontFamily: "var(--sans)",
              color: "var(--ink)",
              outline: "none",
            }}
          />
          <button onClick={onClose} className="btn-icon">
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            {query.trim() ? `Search Results (${filtered.length})` : "Suggested Highlights"}
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", maxHeight: "380px", overflowY: "auto" }}>
            {filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onNavigateToSection(item.target);
                  onClose();
                }}
                style={{
                  padding: "1rem 1.25rem",
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--amber)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        color: "var(--amber)",
                      }}
                    >
                      {item.category}
                    </span>
                    <span style={{ color: "var(--card-border)" }}>·</span>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", maxWidth: "480px" }}>
                    {item.description}
                  </p>
                </div>
                <ArrowRight size={16} style={{ color: "var(--amber)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
