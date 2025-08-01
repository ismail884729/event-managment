import React from 'react';

const layoutStyle = {
  backgroundColor: '#f8fafc',
  minHeight: '100vh',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#1f2937',
  lineHeight: '1.6',
};

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      {children}
    </div>
  );
};

export default Layout;
