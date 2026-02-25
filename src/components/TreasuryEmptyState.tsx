import React from "react";

interface TreasuryEmptyStateProps {
  onCreateStream: () => void;
}

const TreasuryEmptyState: React.FC<TreasuryEmptyStateProps> = ({ onCreateStream }) => {
  return (
    <div style={containerStyle}>
      <div style={iconContainerStyle}>
        <div style={iconBorderStyle}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11.5C5 11.5 6 9.5 8 9.5C10 9.5 11 11.5 13 11.5C15 11.5 16 9.5 18 9.5C20 9.5 21 11.5 23 11.5"
              stroke="#00D4AA"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M3 15.5C5 15.5 6 13.5 8 13.5C10 13.5 11 15.5 13 15.5C15 15.5 16 13.5 18 13.5C20 13.5 21 15.5 23 15.5"
              stroke="#00D4AA"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M3 19.5C5 19.5 6 17.5 8 17.5C10 17.5 11 19.5 13 19.5C15 19.5 16 17.5 18 17.5C20 17.5 21 19.5 23 19.5"
              stroke="#00D4AA"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      <h2 style={headlineStyle}>No streams yet</h2>
      <p style={descriptionStyle}>
        Create your first stream to start sending USDC to recipients over time.
        <br />
        Real-time treasury streaming makes payments continuous and predictable.
      </p>

      <button style={ctaButtonStyle} onClick={onCreateStream} aria-label="Create stream">
        <span style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}>+</span>
        Create stream
      </button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "4rem 2rem",
  background: "transparent",
  color: "#FFFFFF",
};

const iconContainerStyle: React.CSSProperties = {
  marginBottom: "1.5rem",
};

const iconBorderStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  borderRadius: "16px",
  border: "2px solid #00D4AA",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 212, 170, 0.05)",
};

const headlineStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#E2E8F0",
  margin: "0 0 1rem 0",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#94A3B8",
  lineHeight: "1.5",
  margin: "0 0 2rem 0",
  maxWidth: "480px",
};

const ctaButtonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem 1.5rem",
  background: "#0066FF", // Using a blue-teal solid background
  color: "#FFFFFF",
  border: "none",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  transition: "all 0.2s ease",
  boxShadow: "0 0 20px rgba(0, 102, 255, 0.3)",
};

export default TreasuryEmptyState;
