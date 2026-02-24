import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import AppNavbar from './AppNavbar';
import './layout.css';
import ConnectWalletModal from './ConnectWalletModal';

interface LayoutProps {
  onThemeToggle?: () => void;
  theme?: 'light' | 'dark';
}

export default function Layout({ onThemeToggle, theme = 'light' }: LayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleConnectFreighter = () => {
    setWalletAddress('GABC1234567890XYZ1');
    setIsModalOpen(false);
  };

  const handleConnectAlbedo = () => {
    setWalletAddress('GABC1234567890XYZ1');
    setIsModalOpen(false);
  };

  const handleConnectWalletConnect = () => {
    setWalletAddress('GABC1234567890XYZ1');
    setIsModalOpen(false);
  };

  const handleDisconnect = () => {
    setWalletAddress(null);
  };

  return (
    <div className="app-layout">
      <AppNavbar
        onThemeToggle={onThemeToggle}
        theme={theme}
        network="TESTNET"
        walletAddress={walletAddress}
        onDisconnect={handleDisconnect}
      />
      <div className="app-layout__body">
        <aside className="app-layout__sidebar">
          <div className="app-layout__logo">Fluxora</div>
          <nav className="app-layout__nav">
            <Link to="/app" className="app-layout__nav-link">Dashboard</Link>
            <Link to="/app/streams" className="app-layout__nav-link">Streams</Link>
            <Link to="/app/recipient" className="app-layout__nav-link">Recipient</Link>
          </nav>
          <button style={styles.connectButton} onClick={() => setIsModalOpen(true)}>
            {walletAddress ? 'Switch wallet' : 'Connect wallet'}
          </button>
        </aside>
        <div className="app-layout__content">
          <main className="app-layout__main">
            <Outlet />
          </main>
          <Footer />
        </div>
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