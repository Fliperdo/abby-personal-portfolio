import { useState } from 'react';

export default function App() {
  const [evilMode, setEvilMode] = useState(false);
  const [activeTab, setActiveTab] = useState('abby');

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: evilMode ? '#1a0000' : '#ffffff',
    color: evilMode ? '#ffdddd' : '#222222',
    borderBottom: `1px solid ${evilMode ? '#330000' : '#e5e5e5'}`,
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1000,
    margin: '0 auto',
    padding: '12px 16px',
    gap: 12,
  };

  const menuStyle = {
    display: 'flex',
    gap: 16,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
  };

  const linkBase = {
    color: 'inherit',
    padding: '6px 10px',
    borderRadius: 6,
    fontWeight: 600,
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Arial, sans-serif',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const linkStyle = (isActive) => ({
    ...linkBase,
    textDecoration: 'none',
    outline: 'none',
    boxShadow: isActive
      ? `inset 0 0 0 1px ${evilMode ? '#552222' : '#dddddd'}`
      : 'none',
    background: isActive ? (evilMode ? '#2a0000' : '#f5f5f5') : 'transparent',
  });

  const homeLinkStyle = (isActive) => ({
    ...linkStyle(isActive),
    padding: '6px 8px',
    fontWeight: 700,
    letterSpacing: '0.2px',
  });

  const toggleStyle = {
    cursor: 'pointer',
    border: '1px solid',
    borderColor: evilMode ? '#660000' : '#dddddd',
    background: evilMode ? '#2a0000' : '#f9f9f9',
    color: 'inherit',
    padding: '6px 10px',
    borderRadius: 8,
    fontWeight: 600,
  };

  const mainStyle = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '24px 16px',
    lineHeight: 1.6,
    color: evilMode ? '#ffdddd' : '#222',
    background: evilMode ? '#0d0000' : '#fff',
    minHeight: '100vh',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'abby':
        return (
          <section>
            <h1>Abby</h1>
            <p>Welcome! This is the Abby home tab. Use the menu to explore the site.</p>
          </section>
        );
      case 'party-info':
        return (
          <section>
            <h2>Party Info</h2>
            <p>Welcome! Add your party details here.</p>
          </section>
        );
      case 'shopping':
        return (
          <section>
            <h2>Shopping</h2>
            <p>Links and items can go here.</p>
          </section>
        );
      case 'activities':
        return (
          <section>
            <h2>Activities</h2>
            <p>Games, schedules, and more.</p>
          </section>
        );
      case 'faqs':
        return (
          <section>
            <h2>FAQs</h2>
            <p>Frequently asked questions.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ background: evilMode ? '#0d0000' : '#fff' }}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <button
            style={homeLinkStyle(activeTab === 'abby')}
            onClick={() => setActiveTab('abby')}
            aria-current={activeTab === 'abby' ? 'page' : undefined}
          >
            Abby
          </button>
          <ul style={menuStyle}>
            <li>
              <button
                style={linkStyle(activeTab === 'party-info')}
                onClick={() => setActiveTab('party-info')}
                aria-pressed={activeTab === 'party-info'}
              >
                party info
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'shopping')}
                onClick={() => setActiveTab('shopping')}
                aria-pressed={activeTab === 'shopping'}
              >
                shopping
              </button>
            </li>
            <li>
              <button style={toggleStyle} onClick={() => setEvilMode(v => !v)}>evil mode</button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'activities')}
                onClick={() => setActiveTab('activities')}
                aria-pressed={activeTab === 'activities'}
              >
                activities
              </button>
            </li>
            <li>
              <button
                style={linkStyle(activeTab === 'faqs')}
                onClick={() => setActiveTab('faqs')}
                aria-pressed={activeTab === 'faqs'}
              >
                FAQs
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        {renderContent()}
      </main>
    </div>
  );
}
