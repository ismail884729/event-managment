import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const heroStyle = {
    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center'
  };

  const statsStyle = {
    background: 'white',
    padding: '50px 0',
    borderBottom: '1px solid #e5e7eb'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const featuredEventsStyle = {
    padding: '60px 0',
    background: '#f8fafc'
  };

  const sectionHeaderStyle = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  const eventsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginTop: '40px',
    maxWidth: '1200px',
    margin: '40px auto 0',
    padding: '0 20px'
  };

  const eventCardStyle = {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const quickActionsStyle = {
    background: 'white',
    padding: '60px 0'
  };

  const actionsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const actionCardStyle = {
    background: '#f8fafc',
    border: '2px solid #e5e7eb',
    borderRadius: '15px',
    padding: '30px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="container">
          <h2 style={{ fontSize: '3em', marginBottom: '15px', fontWeight: 'bold' }}>
            Welcome to SUZA Events
          </h2>
          <p style={{ fontSize: '1.2em', marginBottom: '30px', color: '#bfdbfe' }}>
            Discover amazing events, connect with fellow students, and make memories that last a lifetime
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsStyle}>
        <div style={statsGridStyle}>
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '3em', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>25</div>
            <div style={{ color: '#6b7280', fontSize: '1.1em' }}>This Month's Events</div>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '3em', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>1,247</div>
            <div style={{ color: '#6b7280', fontSize: '1.1em' }}>Registered Students</div>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '3em', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>18</div>
            <div style={{ color: '#6b7280', fontSize: '1.1em' }}>Conferences</div>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: '3em', fontWeight: 'bold', color: '#1e40af', marginBottom: '10px' }}>95%</div>
            <div style={{ color: '#6b7280', fontSize: '1.1em' }}>Attendee Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section style={featuredEventsStyle}>
        <div className="container">
          <div style={sectionHeaderStyle}>
            <h2 style={{ fontSize: '2.5em', color: '#1f2937', marginBottom: '15px', fontWeight: 'bold' }}>
              Featured Events
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.1em' }}>
              Discover upcoming and recent events happening around campus
            </p>
          </div>

          <div style={eventsGridStyle}>
            {/* Event Card 1 */}
            <div style={eventCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop" 
                alt="Career Fair" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#1f2937' }}>Career Fair 2025</h3>
                  <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: '#dcfce7', color: '#166534' }}>
                    On-Campus
                  </span>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📅</span>
                    July 15, 2025
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>🕘</span>
                    09:00 - 17:00
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📍</span>
                    SUZA Main Hall
                  </div>
                </div>

                <p style={{ color: '#4b5563', marginBottom: '20px', lineHeight: 1.6 }}>
                  Annual career fair bringing together top employers and SUZA students for networking and job opportunities.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px' }}>Career Development Office</span>
                  <Link to="/event-details/1" className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    View
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div style={eventCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop" 
                alt="Tech Summit" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#1f2937' }}>Tech Summit 2025</h3>
                  <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: '#dbeafe', color: '#1e40af' }}>
                    Off-Campus
                  </span>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📅</span>
                    August 10, 2025
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>🕘</span>
                    08:30 - 16:00
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📍</span>
                    Zanzibar Cultural Centre
                  </div>
                </div>

                <p style={{ color: '#4b5563', marginBottom: '20px', lineHeight: 1.6 }}>
                  Technology summit focusing on emerging technologies and innovation in East Africa.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px' }}>Computer Science Department</span>
                  <Link to="/event-details/2" className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    View
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div style={eventCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=200&fit=crop" 
                alt="Cultural Festival" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#1f2937' }}>Cultural Festival</h3>
                  <span style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', background: '#dcfce7', color: '#166534' }}>
                    On-Campus
                  </span>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📅</span>
                    July 28, 2025
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>🕘</span>
                    14:00 - 22:00
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ marginRight: '10px' }}>📍</span>
                    SUZA Campus Grounds
                  </div>
                </div>

                <p style={{ color: '#4b5563', marginBottom: '20px', lineHeight: 1.6 }}>
                  Celebrate diverse cultures with music, dance, food, and art from around the world.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px' }}>Student Affairs</span>
                  <Link to="/event-details/3" className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={quickActionsStyle}>
        <div className="container">
          <div style={sectionHeaderStyle}>
            <h2 style={{ fontSize: '2.5em', color: '#1f2937', marginBottom: '15px', fontWeight: 'bold' }}>
              Quick Actions
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.1em' }}>
              Start enjoying SUZA's event environment
            </p>
          </div>

          <div style={actionsGridStyle}>
            <Link to="/all-events" style={actionCardStyle}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                📅
              </div>
              <h3 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                View Events
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                See all upcoming events and register for your favorites
              </p>
            </Link>

            <div style={actionCardStyle}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                🔔
              </div>
              <h3 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                Notifications
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Get updates about new events and schedule changes
              </p>
            </div>

            <div style={actionCardStyle}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                ⏰
              </div>
              <h3 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                History
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                View photos and details of past events
              </p>
            </div>

            <Link to="/profile" style={actionCardStyle}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'linear-gradient(135deg, #3b82f6, #1e40af)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 20px',
                fontSize: '24px'
              }}>
                👤
              </div>
              <h3 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                Profile
              </h3>
              <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                Update your information and notification settings
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;