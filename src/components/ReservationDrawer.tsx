import React, { useState } from "react";
import { type Suite, RESORT_CONTACT } from "../data/resortData";
import { X, Trash2, Phone, Send, Sparkles } from "lucide-react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSuites: Suite[];
  onRemoveSuite: (suiteId: string) => void;
  onClearAll: () => void;
}

export const ReservationDrawer: React.FC<ReservationDrawerProps> = ({
  isOpen,
  onClose,
  selectedSuites,
  onRemoveSuite,
  onClearAll,
}) => {
  const [checkIn, setCheckIn] = useState("2026-10-25");
  const [checkOut, setCheckOut] = useState("2026-10-27");
  const [guestCount, setGuestCount] = useState(2);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  if (!isOpen) return null;

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const nights = Math.max(Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)), 1);

  // Total price
  const baseTotal = selectedSuites.reduce((sum, s) => sum + s.pricePerNight * nights, 0);

  // WhatsApp Dispatch Message
  const suiteNames = selectedSuites.map((s) => s.name).join(", ");
  const waMessage = `*CITYLITE LODGE NIZAMABAD STAY INQUIRY*
----------------------------------------
Guest Name: ${guestName || "Guest"}
Phone: ${guestPhone || "Not provided"}
Check-in: ${checkIn}
Check-out: ${checkOut} (${nights} night${nights > 1 ? "s" : ""})
Guests: ${guestCount}
Rooms/Suites Selected: ${suiteNames || "General Stay Inquiry"}
Estimated Tariff: ₹${baseTotal.toLocaleString()}
----------------------------------------
Please confirm room availability and booking tariff.`;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid var(--card-border)",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--amber)",
              }}
            >
              Concierge Desk
            </span>
            <h3 style={{ fontSize: "1.5rem", color: "var(--ink)", margin: "0.2rem 0" }}>
              Your Stay Plan
            </h3>
          </div>
          <button onClick={onClose} className="btn-icon" data-cursor="Close">
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: "auto", paddingRight: "0.5rem" }}>
          {/* Selected Suites List */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h4 style={{ fontSize: "1rem", color: "var(--ink)" }}>
                Selected Accommodations ({selectedSuites.length})
              </h4>
              {selectedSuites.length > 0 && (
                <button
                  onClick={onClearAll}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--muted)",
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Clear all
                </button>
              )}
            </div>

            {selectedSuites.length === 0 ? (
              <div
                style={{
                  padding: "2rem",
                  background: "var(--card-bg)",
                  borderRadius: "14px",
                  textAlign: "center",
                  border: "1px dashed var(--card-border)",
                }}
              >
                <Sparkles size={24} style={{ color: "var(--amber)", marginBottom: "0.5rem" }} />
                <p style={{ fontSize: "0.92rem", color: "var(--muted)" }}>
                  No suites selected yet. Browse our rooms and click "Select Suite".
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {selectedSuites.map((suite) => (
                  <div
                    key={suite.id}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1rem",
                      background: "var(--card-bg)",
                      borderRadius: "14px",
                      border: "1px solid var(--card-border)",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={suite.image}
                      alt={suite.name}
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h5 style={{ fontSize: "0.98rem", color: "var(--ink)" }}>{suite.name}</h5>
                      <span style={{ fontSize: "0.82rem", color: "var(--amber)", fontWeight: 700 }}>
                        ₹{suite.pricePerNight.toLocaleString()} / night
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveSuite(suite.id)}
                      className="btn-icon"
                      style={{ padding: "8px" }}
                      title="Remove"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Booking Inputs */}
          <div
            style={{
              background: "var(--card-bg)",
              borderRadius: "16px",
              padding: "1.5rem",
              border: "1px solid var(--card-border)",
              marginBottom: "2rem",
            }}
          >
            <h4 style={{ fontSize: "0.95rem", marginBottom: "1rem", color: "var(--ink)" }}>
              Reservation Details
            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1rem" }}>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                  Check-In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.2rem",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "transparent",
                    color: "var(--ink)",
                    fontFamily: "var(--sans)",
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                  Check-Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    marginTop: "0.2rem",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "transparent",
                    color: "var(--ink)",
                    fontFamily: "var(--sans)",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                Total Guests
              </label>
              <input
                type="number"
                min={1}
                max={50}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--card-border)",
                  background: "transparent",
                  color: "var(--ink)",
                  fontFamily: "var(--sans)",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--card-border)",
                  background: "transparent",
                  color: "var(--ink)",
                  fontFamily: "var(--sans)",
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--muted)" }}>
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginTop: "0.2rem",
                  borderRadius: "8px",
                  border: "1px solid var(--card-border)",
                  background: "transparent",
                  color: "var(--ink)",
                  fontFamily: "var(--sans)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Drawer Footer & Price Summary */}
        <div style={{ borderTop: "1px solid var(--card-border)", paddingTop: "1.5rem" }}>
          {selectedSuites.length > 0 && (
            <div style={{ marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.9rem" }}>
                <span>Duration:</span>
                <span>{nights} Night{nights > 1 ? "s" : ""}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.35rem", fontWeight: 700, color: "var(--ink)" }}>
                <span>Estimated Tariff:</span>
                <span style={{ color: "var(--amber)" }}>₹{baseTotal.toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <a
              href={`https://wa.me/${RESORT_CONTACT.phoneRaw.replace("+", "")}?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury"
              style={{ width: "100%", justifyContent: "center" }}
              data-cursor="Send WhatsApp"
            >
              <Send size={15} />
              <span>Send Reservation to WhatsApp</span>
            </a>

            <a
              href={`tel:${RESORT_CONTACT.phoneRaw}`}
              className="btn-outline"
              style={{ width: "100%", justifyContent: "center" }}
              data-cursor="Call Hotel"
            >
              <Phone size={15} />
              <span>Direct Call: {RESORT_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
