import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/eventService';
import { getOpportunities } from '../services/opportunityService';

const StudentDashboard = () => {
  const [events, setEvents] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, opportunitiesData] = await Promise.all([
          getEvents(),
          getOpportunities(),
        ]);
        setEvents(eventsData);
        setOpportunities(opportunitiesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#333',
    padding: '20px',
  };

  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto 40px',
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const listItemStyle = {
    padding: '15px',
    borderBottom: '1px solid #e5e7eb',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Student Dashboard</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'underline' }}>
          View and Update Profile
        </Link>
      </div>
      {loading && <p style={{ color: 'white', textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={sectionStyle}>
        <h2>Events</h2>
        <ul style={listStyle}>
          {events.map((event) => (
            <li key={event.id} style={listItemStyle}>
              <Link to={`/event-details/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={sectionStyle}>
        <h2>Opportunities</h2>
        <ul style={listStyle}>
          {opportunities.map((opp) => (
            <li key={opp.id} style={listItemStyle}>
              <Link to={`/opportunity-details/${opp.id}`}>{opp.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
