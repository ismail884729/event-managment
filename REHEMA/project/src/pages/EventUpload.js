import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventUpload = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [eventData, setEventData] = useState({
    employeeId: '',
    staffName: '',
    title: '',
    participants: '',
    description: '',
    duration: '',
    deadline: ''
  });

  const containerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    padding: '20px'
  };

  const formContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)'
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #2c3e50, #34495e)',
    color: 'white',
    padding: '30px',
    textAlign: 'center',
    position: 'relative'
  };

  const formContentStyle = {
    padding: '40px'
  };

  const sectionTitleStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    paddingBottom: '10px',
    borderBottom: '3px solid #3498db'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#2c3e50',
    fontWeight: '600',
    fontSize: '0.95em'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    border: '2px solid #e0e6ed',
    borderRadius: '10px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    background: 'rgba(255, 255, 255, 0.9)'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const fileUploadStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '100%'
  };

  const fileLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '40px 20px',
    border: '2px dashed #d1d5db',
    borderRadius: '10px',
    background: '#f9fafb',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  };

  const submitBtnStyle = {
    background: 'linear-gradient(135deg, #3498db, #2980b9)',
    color: 'white',
    border: 'none',
    padding: '18px 40px',
    fontSize: '1.1em',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
    marginTop: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  const successMessageStyle = {
    background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: successMessage ? 'flex' : 'none',
    alignItems: 'center',
    gap: '10px'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset form after showing success
    setTimeout(() => {
      setEventData({
        employeeId: '',
        staffName: '',
        title: '',
        participants: '',
        description: '',
        duration: '',
        deadline: ''
      });
      setSuccessMessage(false);
    }, 3000);
  };

  // Set minimum deadline to current date/time
  const now = new Date();
  const currentDateTime = now.toISOString().slice(0, 16);

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <h1 style={{ fontSize: '2.5em', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
            🎓 SUZA EVENT MANAGEMENT
          </h1>
          <p style={{ fontSize: '1.1em', opacity: 0.9, position: 'relative', zIndex: 1 }}>
            Staff Portal - Event Registration System
          </p>
        </div>

        <div style={formContentStyle}>
          <div style={successMessageStyle}>
            ✅ Event registered successfully!
          </div>

          <form onSubmit={handleSubmit}>
            {/* Staff Information Section */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={sectionTitleStyle}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#3498db', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontSize: '0.8em', 
                  fontWeight: 'bold' 
                }}>
                  1
                </span>
                Staff Information
              </h2>
              
              <div style={formGridStyle}>
                <div style={formGroupStyle}>
                  <label htmlFor="employeeId" style={labelStyle}>
                    Employee ID <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="employeeId"
                    name="employeeId"
                    style={inputStyle}
                    placeholder="e.g., EMP001"
                    value={eventData.employeeId}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div style={formGroupStyle}>
                  <label htmlFor="staffName" style={labelStyle}>Staff Name</label>
                  <input
                    type="text"
                    id="staffName"
                    name="staffName"
                    style={inputStyle}
                    placeholder="Your full name"
                    value={eventData.staffName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Event Details Section */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={sectionTitleStyle}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#3498db', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontSize: '0.8em', 
                  fontWeight: 'bold' 
                }}>
                  2
                </span>
                Event Details
              </h2>
              
              <div style={formGridStyle}>
                <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                  <label htmlFor="title" style={labelStyle}>
                    Event Title <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    style={inputStyle}
                    placeholder="Enter event title"
                    value={eventData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="participants" style={labelStyle}>
                    Number of Participants <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="participants"
                    name="participants"
                    style={inputStyle}
                    placeholder="Expected participants"
                    min="1"
                    value={eventData.participants}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="duration" style={labelStyle}>
                    Duration (hours) <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    style={inputStyle}
                    placeholder="e.g., 2.5"
                    min="0.5"
                    step="0.5"
                    value={eventData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="deadline" style={labelStyle}>
                    Registration Deadline <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <input
                    type="datetime-local"
                    id="deadline"
                    name="deadline"
                    style={inputStyle}
                    min={currentDateTime}
                    value={eventData.deadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                  <label htmlFor="description" style={labelStyle}>
                    Event Description <span style={{ color: '#e74c3c' }}>*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    style={textareaStyle}
                    placeholder="Provide detailed description of the event..."
                    value={eventData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Event Photos Section */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={sectionTitleStyle}>
                <span style={{ 
                  width: '24px', 
                  height: '24px', 
                  background: '#3498db', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontSize: '0.8em', 
                  fontWeight: 'bold' 
                }}>
                  3
                </span>
                Event Photos
              </h2>
              
              <div style={{ ...formGroupStyle, gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Upload Event Photos</label>
                <div style={fileUploadStyle}>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                  />
                  <label style={fileLabelStyle}>
                    <span style={{ fontSize: '2em' }}>📷</span>
                    <div>
                      <strong>Click to upload photos</strong><br />
                      <small>Support: JPG, PNG, GIF (Max 5MB each)</small>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
              <Link to="/home" className="btn btn-secondary" style={{ padding: '15px 30px', textDecoration: 'none' }}>
                Cancel
              </Link>
              <button type="submit" style={submitBtnStyle}>
                Register Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventUpload;
