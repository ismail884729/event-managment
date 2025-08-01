import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { email, password } = formData;
      const data = await login({ email, password });
      localStorage.setItem('user', JSON.stringify(data));
      
      switch (data.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'employee':
          navigate('/employee/dashboard');
          break;
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'head':
          navigate('/head/dashboard');
          break;
        default:
          navigate('/home');
          break;
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const containerStyle = {
    backgroundColor: '#f8fafc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  const loginContainerStyle = {
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '450px',
    overflow: 'hidden'
  };

  const loginHeaderStyle = {
    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    color: 'white',
    padding: '30px',
    textAlign: 'center'
  };

  const loginFormStyle = {
    padding: '30px'
  };

  const formGroupStyle = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#4b5563'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease'
  };

  const rememberForgotStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const rememberMeStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const loginButtonStyle = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={loginContainerStyle}>
        <div style={loginHeaderStyle}>
          <h1 style={{ fontSize: '1.8em', marginBottom: '10px' }}>Login to SUZA Events</h1>
          <p style={{ opacity: 0.9 }}>Enter your login details to continue</p>
        </div>

        <div style={loginFormStyle}>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email or Student ID</label>
              <input
                type="text"
                id="email"
                name="email"
                style={inputStyle}
                placeholder="Enter your email or student ID"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <div style={formGroupStyle}>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                style={inputStyle}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div style={rememberForgotStyle}>
              <div style={rememberMeStyle}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  style={{ width: '16px', height: '16px' }}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>

            <button type="submit" style={loginButtonStyle} disabled={loading}>
              {loading ? 'LOGGING IN...' : 'LOGIN'}
            </button>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default Login;
