import { useState } from 'react';
import CreateStreamModal from '../components/CreateStreamModal';
import StreamCreatedModal from '../components/Streams/StreamCreatedModal';
import RecentStreams, { Stream } from '../components/RecentStreams';

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
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [createdStream, setCreatedStream] = useState({ id: '529', url: 'https://fluxora.io/stream/529' });

  const handleCreateStreamClick = () => {
    setIsCreateModalOpen(true);
  };

  const handleStreamCreated = () => {
    // In a real app, this would use the result of the create API call
    setCreatedStream({ id: '529', url: 'https://fluxora.io/stream/529' });
    setIsSuccessModalOpen(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ marginTop: 0 }}>Streams</h1>
          <p style={{ color: 'var(--muted)' }}>
            Create and manage USDC streams. Set rate, duration, and cliff from the treasury.
          </p>
        </div>
        <button 
          onClick={handleCreateStreamClick}
          style={createBtn}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Create stream
        </button>
      </div>

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

      <CreateStreamModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onStreamCreated={handleStreamCreated}
      />
      <StreamCreatedModal 
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        streamId={createdStream.id}
        streamUrl={createdStream.url}
        onCreateAnother={() => {
          setIsSuccessModalOpen(false);
          setIsCreateModalOpen(true);
        }}
      />
      <RecentStreams streams={sampleStreams} />
    </div>
  );
}

const createBtn: React.CSSProperties = {
  background: 'var(--accent)',
  color: '#000',
  border: 'none',
  borderRadius: 8,
  padding: '0.6rem 1rem',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

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
