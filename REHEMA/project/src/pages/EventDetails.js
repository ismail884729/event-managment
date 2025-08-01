import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createEventApplication } from '../services/eventApplicationService';
import { getEventById } from '../services/eventService';

const EventDetails = () => {
  const { id: eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState('pending');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchEvent = async () => {
      try {
        const data = await getEventById(eventId);
        setEvent(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const eventDetailsStyle = {
    padding: '60px 0'
  };

  const backButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '30px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: '500'
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

  const registrationSectionStyle = {
    background: '#f8fafc',
    borderRadius: '10px',
    padding: '25px',
    marginTop: '40px',
    border: '1px solid #e5e7eb',
    display: isRegistered ? 'block' : 'none'
  };

  const handleRegister = async () => {
    if (!user) {
      setError('You must be logged in to register.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await createEventApplication({
        user: user.id,
        event: eventId,
      });
      setIsRegistered(true);
      // Simulate approval after 2 seconds
      setTimeout(() => {
        setRegistrationStatus('approved');
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel your registration?')) {
      setIsRegistered(false);
      setRegistrationStatus('pending');
    }
  };

  return (
    <div>
      <Header />

      <section style={eventDetailsStyle}>
        <div className="container">
          <Link to="/home" style={backButtonStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Events
          </Link>

          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {event && (
            <div style={eventDetailsContainerStyle}>
              <img
                src={event.photos || "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=400&fit=crop"}
                alt={event.title}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div style={eventMainContentStyle}>
                <div style={eventHeaderStyle}>
                  <h1 style={{ fontSize: '2.2em', fontWeight: 'bold', color: '#1f2937' }}>{event.title}</h1>
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
                  {!isRegistered ? (
                    <>
                      <button className="btn btn-primary" onClick={handleRegister} disabled={loading}>
                        {loading ? 'Registering...' : 'Register for Event'}
                      </button>
                      <button className="btn btn-outline">
                        Share with Friends
                      </button>
                    </>
                  ) : null}
                </div>
                {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
                <div style={registrationSectionStyle}>
                  <h3>Your Registration</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                    <span
                      style={{
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600',
                        background:
                          registrationStatus === 'approved'
                            ? '#d1fae5'
                            : '#fef3c7',
                        color:
                          registrationStatus === 'approved'
                            ? '#065f46'
                            : '#92400e',
                      }}
                    >
                      {registrationStatus === 'approved'
                        ? 'Approved'
                        : 'Pending Approval'}
                    </span>
                    <span>
                      {registrationStatus === 'approved'
                        ? 'Your registration has been approved!'
                        : 'Your registration is being reviewed by the event organizers.'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <button className="btn btn-danger" onClick={handleCancel}>
                      Cancel Registration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
