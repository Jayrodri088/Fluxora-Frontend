import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import './layout.css';
import ConnectWalletModal from './ConnectWalletModal';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnectFreighter = () => {
    console.log('Connecting to Freighter...');
    setIsModalOpen(false);
  };

  const handleConnectAlbedo = () => {
    console.log('Connecting to Albedo...');
    setIsModalOpen(false);
  };

  const handleConnectWalletConnect = () => {
    console.log('Connecting to WalletConnect...');
    setIsModalOpen(false);
  };

  return (
    <div className="app-layout">
      <aside className="app-layout__sidebar">
        <div className="app-layout__logo">Fluxora</div>
        <nav className="app-layout__nav">
          <Link to="/" className="app-layout__nav-link">Dashboard</Link>
          <Link to="/streams" className="app-layout__nav-link">Streams</Link>
          <Link to="/recipient" className="app-layout__nav-link">Recipient</Link>
        </nav>
        <button
          style={styles.connectButton}
          onClick={() => setIsModalOpen(true)}
        >
          Connect wallet
        </button>
      </aside>

      <div className="app-layout__content">
        <main className="app-layout__main">
          <Outlet />
        </main>
        <Footer />
      </div>

      <ConnectWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnectFreighter={handleConnectFreighter}
        onConnectAlbedo={handleConnectAlbedo}
        onConnectWalletConnect={handleConnectWalletConnect}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  connectButton: {
    marginTop: 'auto',
    padding: '0.75rem 1rem',
    background: 'var(--accent)',
    color: '#0a0e17',
    border: 'none',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};