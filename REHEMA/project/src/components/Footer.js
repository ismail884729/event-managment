import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: '#1f2937',
    color: 'white',
    padding: '40px 0',
    textAlign: 'center'
  };

  const footerContentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const footerSectionStyle = {
    textAlign: 'left'
  };

  const footerBottomStyle = {
    borderTop: '1px solid #374151',
    paddingTop: '20px',
    color: '#9ca3af',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 20px 0'
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h3 style={{ marginBottom: '15px', color: '#f9fafb' }}>SUZA Events</h3>
          <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>
            Connecting students with amazing experiences and opportunities at State University of Zanzibar.
          </p>
        </div>
        
        <div style={footerSectionStyle}>
          <h3 style={{ marginBottom: '15px', color: '#f9fafb' }}>Contact Us</h3>
          <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>Email: events@suza.ac.tz</p>
          <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>Phone: +255 24 223 0958</p>
          <p style={{ color: '#d1d5db', lineHeight: 1.8 }}>Location: Vuga, Unguja, Zanzibar</p>
        </div>
      </div>
      
      <div style={footerBottomStyle}>
        <p>&copy; 2025 State University of Zanzibar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;