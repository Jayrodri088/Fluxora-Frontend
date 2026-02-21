import RecentStreams, { Stream }  from "@/components/RecentStreams";

const sampleStreams: Stream[] = [
  {
    id: 'STR-001',
    name: 'Dev Grant - Alice',
    recipient: 'GABC...xyz1',
    rate: '5,000 USDC/mo',
    status: 'Active',
  },
  {
    id: 'STR-002',
    name: 'Marketing Budget',
    recipient: 'GDEF...abc2',
    rate: '3,200 USDC/mo',
    status: 'Active',
  },
  {
    id: 'STR-003',
    name: 'Core Contributor',
    recipient: 'GHIJ...def3',
    rate: '8,500 USDC/mo',
    status: 'Paused',
  },
  {
    id: 'STR-004',
    name: 'Community Rewards',
    recipient: 'GKLM...ghi4',
    rate: '1,200 USDC/mo',
    status: 'Active',
  },
  {
    id: 'STR-005',
    name: 'Q4 2025 Grant',
    recipient: 'GNOP...jkl5',
    rate: '10,000 USDC/mo',
    status: 'Completed',
  },
];

export default function Streams() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Streams</h1>
      <p style={{ color: 'var(--muted)' }}>
        Create and manage USDC streams. Set rate, duration, and cliff from the treasury.
      </p>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th>Stream</th>
              <th>Recipient</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--muted)', padding: '2rem' }}>
                No streams yet. Create one to get started.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <RecentStreams streams={sampleStreams} />
    </div>
  );
}

const tableWrap: React.CSSProperties = {
  marginTop: '1.5rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  overflow: 'hidden',
};

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};
