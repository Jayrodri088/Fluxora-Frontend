import { Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import './layout.css';

export default function Layout() {
  return (
    <div className="app-layout">
      <aside className="app-layout__sidebar">
        <div className="app-layout__logo">Fluxora</div>
        <nav className="app-layout__nav">
          <Link to="/" className="app-layout__nav-link">Dashboard</Link>
          <Link to="/streams" className="app-layout__nav-link">Streams</Link>
          <Link to="/recipient" className="app-layout__nav-link">Recipient</Link>
        </nav>
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
