import React, { useEffect, useState } from 'react';
import RecentStreams, { Stream } from '../components/RecentStreams';
import CreateStreamModal from '../components/CreateStreamModal';
import TreasuryOverviewLoading from '../components/TreasuryOverviewLoading';
import TreasuryEmptyState from '../components/TreasuryEmptyState';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [streams] = useState<Stream[]>([]);

  useEffect(() => {
    // Demo: simulate async fetch — remove when wiring real fetch.
    const t = setTimeout(() => {
      // For testing empty state, we keep it empty. 
      // To see the data state, uncomment the following:
      /*
      setStreams([
        {
          id: "STR-001",
          name: "Dev Grant - Alice",
          recipient: "GABC...xyz1",
          rate: "5,000 USDC/mo",
          status: "Active",
        },
        {
          id: "STR-002",
          name: "Marketing Budget",
          recipient: "GDEF...abc2",
          rate: "3,200 USDC/mo",
          status: "Active",
        },
      ]);
      */
      setLoading(false);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <TreasuryOverviewLoading />;

  const hasStreams = streams.length > 0;

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Treasury overview</h1>
      <p style={{ color: "var(--muted)" }}>
        Treasury overview and active stream summary. Connect your wallet to see
        real-time capital flow.
      </p>
      <div style={cardGrid}>
        <div style={card}>
          <div style={cardLabel}>Active Streams</div>
          <div style={cardValue}>{streams.length || "—"}</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>Total Streaming</div>
          <div style={cardValue}>— USDC</div>
        </div>
        <div style={card}>
          <div style={cardLabel}>Withdrawable</div>
          <div style={cardValue}>— USDC</div>
        </div>
      </div>

      {hasStreams ? (
        <>
          <RecentStreams streams={streams} />
          <button
            type="button"
            style={createBtnStyle}
            onClick={() => setIsModalOpen(true)}
            aria-label="Create stream"
          >
            Create stream
          </button>
        </>
      ) : (
        <TreasuryEmptyState onCreateStream={() => setIsModalOpen(true)} />
      )}

      <CreateStreamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

const createBtnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  background: "var(--accent)",
  color: "#ffffff",
  border: "none",
  padding: "0.625rem 1.25rem",
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  boxShadow: "0 4px 24px rgba(0, 212, 170, 0.4)",
};

const cardGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem",
  marginTop: "1.5rem",
};

const card: React.CSSProperties = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "1.25rem",
};

const cardLabel: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--muted)",
  marginBottom: "0.25rem",
};

const cardValue: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 600,
};
