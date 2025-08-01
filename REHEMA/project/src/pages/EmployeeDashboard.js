import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/eventService';

const EmployeeDashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      fetchEmployeeEvents(parsedUser.id);
    }
  }, []);

  const fetchEmployeeEvents = async (employeeId) => {
    try {
      const allEvents = await getEvents();
      const employeeEvents = allEvents.filter(
        (event) => event.employee === employeeId
      );
      setEvents(employeeEvents);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
      <h1 style={headerStyle}>Employee Dashboard</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/event-upload" style={{ color: 'white', textDecoration: 'underline' }}>
          Upload Event
        </Link>
      </div>
      {loading && <p style={{ color: 'white', textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <div style={sectionStyle}>
        <h2>Your Uploaded Events</h2>
        <ul style={listStyle}>
          {events.map((event) => (
            <li key={event.id} style={listItemStyle}>
              <Link to={`/event-details/${event.id}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
