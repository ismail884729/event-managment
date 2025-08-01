import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getEvents } from '../services/eventService';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const eventsListStyle = {
    padding: '60px 0'
  };

  const eventDetailsContainerStyle = {
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden'
  };

  const eventMainContentStyle = {
    padding: '40px'
  };

  const eventHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px'
  };

  const eventMetaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e5e7eb'
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />

      <section style={eventsListStyle}>
        <div className="container">
          <Link to="/home" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            marginBottom: '30px', 
            color: '#3b82f6', 
            textDecoration: 'none', 
            fontWeight: '500' 
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Events
          </Link>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {events.map((event) => (
            <div key={event.id} style={eventDetailsContainerStyle}>
              <img
                src={event.photos || "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=400&fit=crop"}
                alt={event.title}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div style={eventMainContentStyle}>
                <div style={eventHeaderStyle}>
                  <h1 style={{ fontSize: '2.2em', fontWeight: 'bold', color: '#1f2937' }}>
                    {event.title}
                  </h1>
                </div>
                <div style={eventMetaStyle}>
                  <div style={metaItemStyle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>Deadline</div>
                      <div style={{ fontWeight: '500', color: '#1f2937' }}>
                        {new Date(event.deadline).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div style={metaItemStyle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    <div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>Duration</div>
                      <div style={{ fontWeight: '500', color: '#1f2937' }}>
                        {event.duration}
                      </div>
                    </div>
                  </div>
                  <div style={metaItemStyle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <div>
                      <div style={{ fontSize: '14px', color: '#6b7280' }}>Participants</div>
                      <div style={{ fontWeight: '500', color: '#1f2937' }}>
                        {event.number_of_participant}
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: '40px', lineHeight: 1.8 }}>
                  <h3 style={{ margin: '20px 0 10px', color: '#1e40af' }}>
                    Event Description
                  </h3>
                  <p style={{ marginBottom: '15px' }}>{event.description}</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                  <Link to={`/event-details/${event.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllEvents;
