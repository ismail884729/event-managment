import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('student');
  const [errorMessage, setErrorMessage] = useState('');
  const [studentData, setStudentData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    regno: '',
    course: '',
    year: '',
    password: '',
    confirmPassword: ''
  });
  const [staffData, setStaffData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    empno: '',
    department: '',
    password: '',
    confirmPassword: ''
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({ ...prev, [name]: value }));
  };

  const handleStaffChange = (e) => {
    const { name, value } = e.target;
    setStaffData(prev => ({ ...prev, [name]: value }));
  };

  const handleStudentSubmit = () => {
    if (studentData.password !== studentData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage('');
    // Store user type in state for demo (replace with API call)
    alert('Student registration successful! Please login.');
    console.log('Navigate to login page');
  };

  const handleStaffSubmit = () => {
    if (staffData.password !== staffData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    setErrorMessage('');
    alert('Staff registration successful! Redirecting to Event Upload...');
    navigate('/event-upload');
  };

  return (
    <div style={{
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#1f2937',
      lineHeight: '1.6'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '50px auto',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '30px'
        }}>
          {/* Logo */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h1 style={{
              fontSize: '2em',
              color: '#1e40af',
              marginBottom: '5px',
              margin: '0 0 5px 0'
            }}>
              SUZA Events
            </h1>
            <p style={{ margin: 0 }}>Create your account</p>
          </div>

          {/* Tabs */}
          <div style={{
            display: 'flex',
            marginBottom: '20px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <button
              style={{
                padding: '12px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'student' ? '600' : '500',
                color: activeTab === 'student' ? '#1e40af' : '#6b7280',
                position: 'relative',
                borderBottom: activeTab === 'student' ? '2px solid #1e40af' : 'none'
              }}
              onClick={() => setActiveTab('student')}
            >
              Student
            </button>
            <button
              style={{
                padding: '12px 20px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'staff' ? '600' : '500',
                color: activeTab === 'staff' ? '#1e40af' : '#6b7280',
                position: 'relative',
                borderBottom: activeTab === 'staff' ? '2px solid #1e40af' : 'none'
              }}
              onClick={() => setActiveTab('staff')}
            >
              Staff
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div style={{
              color: '#ef4444',
              marginBottom: '15px',
              textAlign: 'center',
              backgroundColor: '#fef2f2',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #fecaca'
            }}>
              {errorMessage}
            </div>
          )}

          {/* Student Form */}
          {activeTab === 'student' && (
            <div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={studentData.firstname}
                    onChange={handleStudentChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={studentData.lastname}
                    onChange={handleStudentChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={studentData.email}
                  onChange={handleStudentChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Registration Number
                </label>
                <input
                  type="text"
                  name="regno"
                  value={studentData.regno}
                  onChange={handleStudentChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    Course
                  </label>
                  <select
                    name="course"
                    value={studentData.course}
                    onChange={handleStudentChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select Course</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="business">Business</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    Year of Study
                  </label>
                  <select
                    name="year"
                    value={studentData.year}
                    onChange={handleStudentChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Select Year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={studentData.password}
                  onChange={handleStudentChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={studentData.confirmPassword}
                  onChange={handleStudentChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="button"
                onClick={handleStudentSubmit}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  marginTop: '20px',
                  background: '#1e40af',
                  color: 'white',
                  boxSizing: 'border-box'
                }}
                onMouseOver={(e) => e.target.style.background = '#1e3a8a'}
                onMouseOut={(e) => e.target.style.background = '#1e40af'}
              >
                Register as Student
              </button>
            </div>
          )}

          {/* Staff Form */}
          {activeTab === 'staff' && (
            <div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={staffData.firstname}
                    onChange={handleStaffChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <div style={{ flex: 1, marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={staffData.lastname}
                    onChange={handleStaffChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '1px solid #e5e7eb',
                      borderRadius: '6px',
                      fontSize: '1em',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={staffData.email}
                  onChange={handleStaffChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Employee Number
                </label>
                <input
                  type="text"
                  name="empno"
                  value={staffData.empno}
                  onChange={handleStaffChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Department
                </label>
                <select
                  name="department"
                  value={staffData.department}
                  onChange={handleStaffChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select Department</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="business">Business</option>
                  <option value="education">Education</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={staffData.password}
                  onChange={handleStaffChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={staffData.confirmPassword}
                  onChange={handleStaffChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '1em',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                
                type="button"
                onClick={handleStaffSubmit}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1em',
                  fontWeight: '500',
                  cursor: 'pointer',
                  marginTop: '20px',
                  background: '#1e40af',
                  color: 'white',
                  boxSizing: 'border-box'
                }}
                onMouseOver={(e) => e.target.style.background = '#1e3a8a'}
                onMouseOut={(e) => e.target.style.background = '#1e40af'}
              >
                Register as Staff
                
              </button>
            </div>
          )}

          {/* Login Link */}
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            color: '#6b7280'
          }}>
            Already have an account?{' '}
            <button 
              onClick={() => console.log('Navigate to login')}
              style={{
                color: '#1e40af',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 'inherit'
              }}
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;