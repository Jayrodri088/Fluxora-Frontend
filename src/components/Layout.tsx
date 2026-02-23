import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import './layout.css';
import ConnectWalletModal from './ConnectWalletModal';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnectFreighter = () => {
    console.log('Connecting to Freighter...');
    // Placeholder for Freighter connection logic
    setIsModalOpen(false);
  };

  const handleConnectAlbedo = () => {
    console.log('Connecting to Albedo...');
    // Placeholder for Albedo connection logic
    setIsModalOpen(false);
  };

  const handleConnectWalletConnect = () => {
    console.log('Connecting to WalletConnect...');
    // Placeholder for WalletConnect connection logic
    setIsModalOpen(false);
  };

  return (
    <div style={styles.layout}>
      <Sidebar />

      <aside style={styles.sidebar}>
        <div style={styles.logo}>Fluxora</div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Dashboard</Link>
          <Link to="/streams" style={styles.navLink}>Streams</Link>
          <Link to="/recipient" style={styles.navLink}>Recipient</Link>
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
    </div>
  );
}
      <main style={styles.main}>
        <Outlet />
      </main>
      
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
  layout: {
    display: "flex",
    minHeight: "100vh",
  },

  sidebar: {
    width: 220,
    background: 'var(--surface)',
    borderRight: '1px solid var(--border)',
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--accent)",
    marginBottom: "2rem",
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    flex: 1,
  },
  navLink: {
    padding: "0.6rem 0.75rem",
    borderRadius: 8,
    color: "var(--text)",
    textDecoration: "none",
  },
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
  main: {
    flex: 1,
    marginLeft: '260px',
    padding: '24px',
    backgroundColor: '#f9fafb',
    transition: 'margin-left 0.3s ease',
    padding: "2rem",
    overflow: "auto",
  },
};