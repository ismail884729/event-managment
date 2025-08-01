import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const OpportunityUpload = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [opportunityData, setOpportunityData] = useState({
    title: '',
    type: '',
    organization: '',
    description: '',
    location: '',
    duration: '',
    deadline: '',
    salary: '',
    requirements: '',
    benefits: '',
    contactEmail: '',
    applicationUrl: '',
    applicationProcess: ''
  });

  const containerStyle = {
    backgroundColor: '#f8fafc',
    lineHeight: 1.6,
    color: '#1f2937',
    minHeight: '100vh'
  };

  const pageHeaderStyle = {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '40px 0',
    textAlign: 'center'
  };

  const mainContentStyle = {
    padding: '60px 0'
  };

  const formContainerStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const tagInputStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '8px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    minHeight: '50px',
    alignItems: 'center'
  };

  const tagStyle = {
    background: '#10b981',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.9em',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOpportunityData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = tagInput.trim();
      if (value && !tags.includes(value)) {
        setTags([...tags, value]);
        setTagInput('');
      }
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Opportunity has been created successfully! It will be reviewed before being published.');
    navigate('/opportunity-create');
  };

  return (
    <div style={containerStyle}>
      <Header showNotifications={false} showProfile={false} />

      {/* Page Header */}
      <section style={pageHeaderStyle}>
        <div className="container">
          <h2 style={{ fontSize: '2.5em', marginBottom: '10px', fontWeight: 'bold' }}>
            Create New Opportunity
          </h2>
          <p style={{ fontSize: '1.1em', color: '#d1fae5' }}>
            Share exciting opportunities with the SUZA community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main style={mainContentStyle}>
        <div className="container">
          <div style={formContainerStyle}>
            <form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={sectionTitleStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M9 11H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2"/>
                    <rect x="9" y="11" width="6" height="11"/>
                    <path d="M9 7v4h6V7a3 3 0 0 0-6 0z"/>
                  </svg>
                  Basic Information
                </h3>

                <div style={formGridStyle}>
                  <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                    <label htmlFor="title">Opportunity Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="e.g., Summer Internship at Tech Company"
                      value={opportunityData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="type">Opportunity Type *</label>
                    <select
                      id="type"
                      name="type"
                      value={opportunityData.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="internship">Internship</option>
                      <option value="job">Job</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="research">Research</option>
                      <option value="conference">Conference</option>
                      <option value="workshop">Workshop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="organization">Organization/Company *</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      placeholder="Organization name"
                      value={opportunityData.organization}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                    <label htmlFor="description">Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Provide a detailed description of the opportunity..."
                      value={opportunityData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Requirements & Details */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={sectionTitleStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  Requirements & Details
                </h3>

                <div style={formGridStyle}>
                  <div style={formGroupStyle}>
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g., Zanzibar, Remote, etc."
                      value={opportunityData.location}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="duration">Duration</label>
                    <input
                      type="text"
                      id="duration"
                      name="duration"
                      placeholder="e.g., 3 months, Full-time, etc."
                      value={opportunityData.duration}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="deadline">Application Deadline</label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={opportunityData.deadline}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="salary">Salary/Stipend</label>
                    <input
                      type="text"
                      id="salary"
                      name="salary"
                      placeholder="e.g., $500/month, Unpaid, etc."
                      value={opportunityData.salary}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                    <label htmlFor="requirements">Requirements</label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      placeholder="List the requirements and qualifications needed..."
                      value={opportunityData.requirements}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                    <label htmlFor="benefits">Benefits & What You'll Gain</label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      placeholder="Describe the benefits and learning opportunities..."
                      value={opportunityData.benefits}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={sectionTitleStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  Application Details
                </h3>

                <div style={formGridStyle}>
                  <div style={formGroupStyle}>
                    <label htmlFor="contactEmail">Contact Email *</label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      placeholder="contact@organization.com"
                      value={opportunityData.contactEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div style={formGroupStyle}>
                    <label htmlFor="applicationUrl">Application URL</label>
                    <input
                      type="url"
                      id="applicationUrl"
                      name="applicationUrl"
                      placeholder="https://example.com/apply"
                      value={opportunityData.applicationUrl}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                    <label htmlFor="applicationProcess">Application Process</label>
                    <textarea
                      id="applicationProcess"
                      name="applicationProcess"
                      placeholder="Describe how to apply (documents needed, process steps, etc.)..."
                      value={opportunityData.applicationProcess}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={sectionTitleStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                  Tags & Categories
                </h3>

                <div style={formGroupStyle}>
                  <label>Add Tags (Press Enter to add)</label>
                  <div style={tagInputStyle}>
                    {tags.map((tag, index) => (
                      <div key={index} style={tagStyle}>
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2em', lineHeight: 1 }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    <input
                      type="text"
                      placeholder="Type and press Enter..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={handleTagKeyPress}
                      style={{ border: 'none', outline: 'none', flex: 1, minWidth: '100px', padding: '4px 8px' }}
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
                <Link to="/home" className="btn btn-secondary" style={{ padding: '15px 30px', textDecoration: 'none' }}>
                  Cancel
                </Link>
                <button type="submit" className="btn btn-primary" style={{ padding: '15px 30px' }}>
                  Publish Opportunity
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OpportunityUpload;