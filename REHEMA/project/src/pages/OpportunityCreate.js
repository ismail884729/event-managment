import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOpportunities } from '../services/opportunityService';

const AllOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const data = await getOpportunities();
        setOpportunities(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#333'
  };

  const headerStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const opportunitiesGridStyle = {
    padding: '60px 5%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const cardContentStyle = {
    padding: '25px'
  };

  const cardFooterStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const tagStyle = {
    background: 'rgba(30, 136, 229, 0.1)',
    color: '#1e88e5',
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.75rem',
    fontWeight: '500'
  };

  const btnStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const viewBtnStyle = {
    ...btnStyle,
    background: 'linear-gradient(135deg, #1e88e5, #1565c0)',
    color: 'white',
    boxShadow: '0 4px 15px rgba(30, 136, 229, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.3)', position: 'relative', zIndex: 1 }}>
          🌟 Opportunities for Students
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, position: 'relative', zIndex: 1 }}>
          📋 Approved by the Head of Department
        </p>
        <Link to="/home">
          <button style={{
            background: '#1e88e5',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 24px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '18px',
            boxShadow: '0 2px 8px rgba(30, 136, 229, 0.15)'
          }}>
            Return to Home
          </button>
        </Link>
      </header>
      
      <div style={opportunitiesGridStyle}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {opportunities.map((opp) => (
          <div key={opp.id} style={cardStyle}>
            <div
              style={{
                ...cardImageStyle,
                background: 'linear-gradient(135deg, #1e88e5, #667eea)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
              }}
            >
              💻
            </div>
            <div style={cardContentStyle}>
              <h2
                style={{
                  fontSize: '1.4rem',
                  color: '#1e88e5',
                  marginBottom: '15px',
                  fontWeight: '600',
                }}
              >
                {opp.title}
              </h2>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#666',
                  marginBottom: '25px',
                }}
              >
                {opp.description}
              </p>
              <div style={cardFooterStyle}>
                <span style={tagStyle}>{opp.opp_type}</span>
                <Link to={`/opportunity-details/${opp.id}`} style={viewBtnStyle}>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOpportunities;
