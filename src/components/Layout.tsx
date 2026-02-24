import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import './layout.css';
import ConnectWalletModal from './ConnectWalletModal';
import DashboardIcon from "../assets/dashboard.png";
import RecipientIcon from "../assets/recipient.png";
import StreamsIcon from '../assets/streams.png';
// layout only manages sidebar + content; navbar is handled by App

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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
    <div className="app-layout">
      <aside className="app-layout__sidebar">
      
        <nav className="app-layout__nav">
          <Link to="" className="app-layout__nav-link flex ">
            <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link to="streams" className="app-layout__nav-link flex">
            <img src={StreamsIcon} alt="Streams" className="w-5 h-5 mr-2" />
            Streams
          </Link>
          <Link to="recipient" className="app-layout__nav-link flex">
            <img src={RecipientIcon} alt="Recipient" className="w-5 h-5 mr-2" />
            Recipient
          </Link>
        </nav>
      </aside>
      <div className="app-layout__content">
        <main className="app-layout__main">
          <Outlet />
        </main>
        
        {location.pathname.includes('treasurypage') ? null : <Footer />}

      <ConnectWalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnectFreighter={handleConnectFreighter}
        onConnectAlbedo={handleConnectAlbedo}
        onConnectWalletConnect={handleConnectWalletConnect}
      />
      </div>
    </div>
  );
}
      

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
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
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--accent)',
    marginBottom: '2rem',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    flex: 1,
  },
  navLink: {
    padding: '0.6rem 0.75rem',
    borderRadius: 8,
    color: 'var(--text)',
    textDecoration: 'none',
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
    padding: '2rem',
    overflow: 'auto',
  },
};
