import { useState } from 'react';
import StreamCreatedModal from '../components/Streams/StreamCreatedModal';

export default function Streams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdStream, setCreatedStream] = useState({ id: '529', url: 'https://fluxora.io/stream/529' });

  const handleCreateMock = () => {
    // In a real app, this would be the result of an API call
    setCreatedStream({ id: '529', url: 'https://fluxora.io/stream/529' });
    setIsModalOpen(true);
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
          onClick={handleCreateMock}
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

      <StreamCreatedModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        streamId={createdStream.id}
        streamUrl={createdStream.url}
        onCreateAnother={() => {
          setIsModalOpen(false);
          // Logic to reopen create form would go here
          console.log('Opening create stream form...');
        }}
      />
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
