import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: 'white',
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '1.1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Admin Dashboard</h1>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h2>Events</h2>
          <Link to="/all-events" style={linkStyle}>View All Events</Link>
          <Link to="/event-upload" style={linkStyle}>Upload Event</Link>
        </div>
        <div style={cardStyle}>
          <h2>Opportunities</h2>
          <Link to="/opportunity-create" style={linkStyle}>View All Opportunities</Link>
          <Link to="/opportunity-upload" style={linkStyle}>Upload Opportunity</Link>
        </div>
        <div style={cardStyle}>
          <h2>Users</h2>
          <Link to="/all-users" style={linkStyle}>View All Users</Link>
          <Link to="/all-students" style={linkStyle}>View All Students</Link>
          <Link to="/all-employees" style={linkStyle}>View All Employees</Link>
        </div>
        <div style={cardStyle}>
          <h2>Applications</h2>
          <Link to="/all-event-applications" style={linkStyle}>View Event Applications</Link>
          <Link to="/all-opportunity-applications" style={linkStyle}>View Opportunity Applications</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
