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
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-20");
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
  const waMessage = `*THE RANCH BY MAGOSTAYS RESERVATION INQUIRY*
----------------------------------------
Guest Name: ${guestName || "Guest"}
Phone: ${guestPhone || "Not provided"}
Check-in: ${checkIn}
Check-out: ${checkOut} (${nights} night${nights > 1 ? "s" : ""})
Guests: ${guestCount}
Farmstay/Villa Selection: ${suiteNames || "Entire 6BR Ranch Pool Buyout Inquiry"}
Estimated Total: ₹${baseTotal.toLocaleString()}
----------------------------------------
Please confirm estate availability and tariff.`;

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
              Concierge Plan
            </span>
            <h3 style={{ fontSize: "1.7rem", color: "var(--ink)", margin: "0.2rem 0" }}>
              Your Stay Selection
            </h3>
          </div>
          <button onClick={onClose} className="btn-icon" data-cursor="Close">
            <X size={20} />
          </button>
        </div>

        {/* Selected Suites List */}
        <div style={{ flex: 1, overflowY: "auto", marginBottom: "1.5rem" }}>
          {selectedSuites.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 1rem", color: "var(--muted)" }}>
              <Sparkles size={36} style={{ color: "var(--amber)", margin: "0 auto 1rem" }} />
              <h4 style={{ fontSize: "1.3rem", color: "var(--ink)", marginBottom: "0.5rem" }}>
                No suites selected yet
              </h4>
              <p style={{ fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                Explore our residential suites and click "Select Suite" to build your custom stay plan.
              </p>
              <a href="#suites" onClick={onClose} className="btn-luxury" style={{ display: "inline-flex" }}>
                <span>Browse Suites</span>
              </a>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--muted)" }}>
                  {selectedSuites.length} Suite{selectedSuites.length > 1 ? "s" : ""} in Plan
                </span>
                <button
                  onClick={onClearAll}
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--amber)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Clear Selection
                </button>
              </div>

              {selectedSuites.map((suite) => (
                <div
                  key={suite.id}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "1rem",
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "16px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={suite.image}
                    alt={suite.name}
                    style={{ width: "70px", height: "70px", borderRadius: "12px", objectFit: "cover" }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--ink)" }}>{suite.name}</h4>
                    <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
                      ₹{suite.pricePerNight.toLocaleString()} / night
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveSuite(suite.id)}
                    style={{ color: "var(--muted)", padding: "0.4rem" }}
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Stay Configurator */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "var(--card-bg)",
              borderRadius: "18px",
              border: "1px solid var(--card-border)",
            }}
          >
            <h4 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--ink)" }}>
              Reservation Details
            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
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
                min="1"
                max="50"
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
              href={`https://wa.me/${RESORT_CONTACT.phoneRaw}?text=${encodeURIComponent(waMessage)}`}
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
              data-cursor="Call Manager"
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
