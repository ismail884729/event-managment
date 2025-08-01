import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstname: 'John',
    lastname: 'Student',
    email: 'john.student@suza.ac.tz',
    phone: '+255 123 456 789',
    regno: 'CS2023001',
    course: 'Computer Science',
    year: '2',
    address: 'Vuga, Zanzibar'
  });

  const containerStyle = {
    backgroundColor: '#f8fafc',
    minHeight: '100vh'
  };

  const profileContainerStyle = {
    display: 'flex',
    gap: '30px',
    margin: '40px 0',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 20px'
  };

  const profileSidebarStyle = {
    width: '250px',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    height: 'fit-content'
  };

  const profileContentStyle = {
    flex: 1,
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '30px'
  };

  const profileMenuStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const menuItemStyle = {
    marginBottom: '10px'
  };

  const menuLinkStyle = (isActive) => ({
    display: 'block',
    padding: '10px 15px',
    color: isActive ? '#1e40af' : '#4b5563',
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    backgroundColor: isActive ? '#e0e7ff' : 'transparent',
    cursor: 'pointer'
  });

  const profileHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px'
  };

  const profileAvatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#e0e7ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5em',
    color: '#1e40af',
    marginRight: '20px',
    position: 'relative'
  };

  const formRowStyle = {
    display: 'flex',
    gap: '20px'
  };

  const formGroupStyle = {
    marginBottom: '20px',
    flex: 1
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div style={containerStyle}>
      <Header />

      <div style={profileContainerStyle}>
        {/* Sidebar Navigation */}
        <aside style={profileSidebarStyle}>
          <ul style={profileMenuStyle}>
            <li style={menuItemStyle}>
              <div
                style={menuLinkStyle(activeTab === 'profile')}
                onClick={() => setActiveTab('profile')}
              >
                👤 Profile Information
              </div>
            </li>
            <li style={menuItemStyle}>
              <div
                style={menuLinkStyle(activeTab === 'notifications')}
                onClick={() => setActiveTab('notifications')}
              >
                🔔 Notifications
              </div>
            </li>
            <li style={menuItemStyle}>
              <div
                style={menuLinkStyle(activeTab === 'password')}
                onClick={() => setActiveTab('password')}
              >
                🔒 Change Password
              </div>
            </li>
            <li style={menuItemStyle}>
              <Link to="/home" style={menuLinkStyle(false)}>
                🚪 Back to Home
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main style={profileContentStyle}>
          {activeTab === 'profile' && (
            <>
              <h1 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
                Profile Information
              </h1>

              {/* Profile Header */}
              <div style={profileHeaderStyle}>
                <div style={profileAvatarStyle}>
                  JS
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    right: 0, 
                    background: '#3b82f6', 
                    color: 'white', 
                    width: '30px', 
                    height: '30px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}>
                    +
                  </div>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5em', marginBottom: '5px' }}>John Student</h2>
                  <p style={{ color: '#6b7280' }}>Computer Science, Year 2</p>
                </div>
              </div>

              {/* Personal Information Form */}
              <form onSubmit={handleSubmit}>
                <div style={formRowStyle}>
                  <div style={formGroupStyle}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={profileData.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={profileData.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div style={formRowStyle}>
                  <div style={formGroupStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="regno">Registration Number</label>
                  <input
                    type="text"
                    id="regno"
                    name="regno"
                    value={profileData.regno}
                    readOnly
                    style={{ backgroundColor: '#f3f4f6' }}
                  />
                </div>

                <div style={formRowStyle}>
                  <div style={formGroupStyle}>
                    <label htmlFor="course">Course</label>
                    <select
                      id="course"
                      name="course"
                      value={profileData.course}
                      onChange={handleInputChange}
                    >
                      <option value="Computer Science">Computer Science</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Business Administration">Business Administration</option>
                      <option value="Education">Education</option>
                    </select>
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="year">Year of Study</label>
                    <select
                      id="year"
                      name="year"
                      value={profileData.year}
                      onChange={handleInputChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={profileData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ marginTop: '30px' }}>
                  <button type="submit" className="btn btn-primary" style={{ marginRight: '15px' }}>
                    Save Changes
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}

          {activeTab === 'notifications' && (
            <>
              <h1 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
                Notification Settings
              </h1>
              
              <div style={{ borderBottom: '1px solid #e5e7eb', padding: '15px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>Event Reminders</div>
                    <div style={{ color: '#6b7280', fontSize: '0.9em', marginTop: '5px' }}>
                      Get reminders before registered events
                    </div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ 
                      position: 'absolute', 
                      cursor: 'pointer', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0, 
                      backgroundColor: '#3b82f6', 
                      transition: '.4s', 
                      borderRadius: '24px' 
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        height: '16px', 
                        width: '16px', 
                        left: '26px', 
                        bottom: '4px', 
                        backgroundColor: 'white', 
                        transition: '.4s', 
                        borderRadius: '50%' 
                      }}></span>
                    </span>
                  </label>
                </div>
              </div>

              <div style={{ borderBottom: '1px solid #e5e7eb', padding: '15px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: '500' }}>New Events</div>
                    <div style={{ color: '#6b7280', fontSize: '0.9em', marginTop: '5px' }}>
                      Notifications about upcoming events
                    </div>
                  </div>
                  <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{ 
                      position: 'absolute', 
                      cursor: 'pointer', 
                      top: 0, 
                      left: 0, 
                      right: 0, 
                      bottom: 0, 
                      backgroundColor: '#3b82f6', 
                      transition: '.4s', 
                      borderRadius: '24px' 
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        height: '16px', 
                        width: '16px', 
                        left: '26px', 
                        bottom: '4px', 
                        backgroundColor: 'white', 
                        transition: '.4s', 
                        borderRadius: '50%' 
                      }}></span>
                    </span>
                  </label>
                </div>
              </div>

              <div style={{ marginTop: '30px' }}>
                <button type="submit" className="btn btn-primary">
                  Save Preferences
                </button>
              </div>
            </>
          )}

          {activeTab === 'password' && (
            <>
              <h1 style={{ fontSize: '1.8em', marginBottom: '20px', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
                Change Password
              </h1>
              
              <form>
                <div style={formGroupStyle}>
                  <label htmlFor="current-password">Current Password</label>
                  <input type="password" id="current-password" />
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="new-password">New Password</label>
                  <input type="password" id="new-password" />
                </div>

                <div style={formGroupStyle}>
                  <label htmlFor="confirm-password">Confirm New Password</label>
                  <input type="password" id="confirm-password" />
                </div>

                <div style={{ marginTop: '30px' }}>
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </div>
              </form>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profile;