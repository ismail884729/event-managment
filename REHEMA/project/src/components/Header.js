import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showNotifications = true, showProfile = true }) => {
  const headerStyle = {
    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    color: 'white',
    padding: '15px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const headerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    textDecoration: 'none',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    margin: 0
  };

  const subtitleStyle = {
    color: '#bfdbfe',
    fontSize: '0.9em',
    margin: 0
  };

  const userProfileStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const notificationIconStyle = {
    position: 'relative',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease'
  };

  const notificationBadgeStyle = {
    position: 'absolute',
    top: '2px',
    right: '2px',
    background: '#ef4444',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 'bold'
  };

  const userAvatarStyle = {
    width: '40px',
    height: '40px',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <Link to="/home" style={logoStyle}>
          <div>
            <h1 style={titleStyle}>SUZA Events</h1>
            <p style={subtitleStyle}>State University of Zanzibar</p>
          </div>
        </Link>

        <Link to="/opportunity-create">
          <button style={{
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '15px'
          }}>
            View Opportunities
          </button>
        </Link>

        {(showNotifications || showProfile) && (
          <div style={userProfileStyle}>
            {showNotifications && (
              <div style={notificationIconStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
                <div style={notificationBadgeStyle}>3</div>
              </div>
            )}
            {showProfile && (
              <Link to="/profile" style={userAvatarStyle}>
                MS
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;