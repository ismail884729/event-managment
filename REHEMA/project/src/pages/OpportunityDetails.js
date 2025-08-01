import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createApplication } from '../services/applicationService';
import { getOpportunityById } from '../services/opportunityService';

const OpportunityDetails = () => {
  const { id: opportunityId } = useParams();
  const [opportunity, setOpportunity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchOpportunity = async () => {
      try {
        const data = await getOpportunityById(opportunityId);
        setOpportunity(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunity();
  }, [opportunityId]);

  const handleApply = async () => {
    if (!user) {
      setError('You must be logged in to apply.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await createApplication({
        user: user.id,
        opportunity: opportunityId,
      });
      setSuccess('Application submitted successfully!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#333'
  };

  const navbarStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '15px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const navContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const backBtnStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  };

  const mainContainerStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px'
  };

  const opportunityHeaderStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    marginBottom: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const opportunityIconStyle = {
    width: '80px',
    height: '80px',
    margin: '0 auto 20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: 'white',
    background: 'linear-gradient(135deg, #1e88e5, #667eea)'
  };

  const statusBadgeStyle = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '600'
  };

  const contentSectionStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '30px',
    marginBottom: '20px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
  };

  const sectionTitleStyle = {
    fontSize: '1.3rem',
    color: '#1e88e5',
    marginBottom: '15px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const infoItemStyle = {
    background: '#f8faff',
    padding: '20px',
    borderRadius: '15px',
    borderLeft: '4px solid #1e88e5'
  };


  const applySectionStyle = {
    background: 'linear-gradient(135deg, #1e88e5, #667eea)',
    color: 'white',
    borderRadius: '20px',
    padding: '40px',
    textAlign: 'center',
    marginTop: '30px'
  };

  const applyBtnStyle = {
    background: 'white',
    color: '#1e88e5',
    padding: '15px 40px',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginRight: '15px',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const contactBtnStyle = {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '13px 30px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      <nav style={navbarStyle}>
        <div style={navContainerStyle}>
          <Link to="/opportunity-create" style={backBtnStyle}>
            ← Back to Dashboard
          </Link>
          <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>
            Opportunity Details
          </div>
        </div>
      </nav>

      <div style={mainContainerStyle}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {opportunity && (
          <>
            {/* Opportunity Header */}
            <div style={opportunityHeaderStyle}>
              <div style={{ ...opportunityHeaderStyle, '::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(90deg, #1e88e5, #667eea, #764ba2)' } }}>
                <div style={{ borderTop: '5px solid transparent', borderImage: 'linear-gradient(90deg, #1e88e5, #667eea, #764ba2) 1', borderImageSlice: 1, marginTop: '-40px', marginBottom: '40px' }}></div>
              </div>
              <div style={opportunityIconStyle}>💻</div>
              <h1 style={{ fontSize: '2.2rem', color: '#1e88e5', marginBottom: '10px', fontWeight: '700' }}>
                {opportunity.title}
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px' }}>
                {opportunity.organization}
              </p>
              <span style={statusBadgeStyle}>✅ Applications Open</span>
            </div>

            {/* Overview Section */}
            <div style={contentSectionStyle}>
              <h2 style={sectionTitleStyle}>📋 Overview</h2>
              <div style={{ lineHeight: 1.7, color: '#555' }}>
                <p>{opportunity.description}</p>
                <div style={infoGridStyle}>
                  <div style={infoItemStyle}>
                    <div style={{ fontWeight: '600', color: '#1e88e5', marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Duration
                    </div>
                    <div style={{ color: '#333', fontSize: '1rem' }}>{opportunity.duration}</div>
                  </div>
                  <div style={infoItemStyle}>
                    <div style={{ fontWeight: '600', color: '#1e88e5', marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Type
                    </div>
                    <div style={{ color: '#333', fontSize: '1rem' }}>{opportunity.opp_type}</div>
                  </div>
                  <div style={infoItemStyle}>
                    <div style={{ fontWeight: '600', color: '#1e88e5', marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Location
                    </div>
                    <div style={{ color: '#333', fontSize: '1rem' }}>{opportunity.location}</div>
                  </div>
                  <div style={infoItemStyle}>
                    <div style={{ fontWeight: '600', color: '#1e88e5', marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Deadline
                    </div>
                    <div style={{ color: '#333', fontSize: '1rem' }}>{new Date(opportunity.deadline).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements Section */}
            <div style={contentSectionStyle}>
              <h2 style={sectionTitleStyle}>✅ Requirements</h2>
              <div style={{ lineHeight: 1.7, color: '#555' }}>
                <p>{opportunity.requirements}</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div style={contentSectionStyle}>
              <h2 style={sectionTitleStyle}>🎁 Benefits</h2>
              <div style={{ lineHeight: 1.7, color: '#555' }}>
                <p>{opportunity.benefits}</p>
              </div>
            </div>

            {/* Application Process Section */}
            <div style={contentSectionStyle}>
              <h2 style={sectionTitleStyle}>📝 Application Process</h2>
              <div style={{ lineHeight: 1.7, color: '#555' }}>
                <p>{opportunity.application_process}</p>
              </div>
            </div>

            {/* Application Section */}
            <div style={applySectionStyle}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600' }}>Ready to Apply?</h2>
              <p style={{ marginBottom: '25px', opacity: 0.9, lineHeight: 1.6 }}>
                Submit your application along with your portfolio, resume, and a cover letter explaining your interest. Don't miss this opportunity to kickstart your career!
              </p>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
              {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
              <button onClick={handleApply} style={applyBtnStyle} disabled={loading}>
                {loading ? 'Submitting...' : 'Apply Now'}
              </button>
              <a href={`mailto:${opportunity.contact_email}`} style={contactBtnStyle}>Contact Supervisor</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OpportunityDetails;
