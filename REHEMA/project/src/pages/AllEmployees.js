import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/employeeService';

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const containerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#333',
    padding: '20px',
  };

  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const tableContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    background: '#f8faff',
    color: '#1e88e5',
    fontWeight: '600',
    padding: '15px',
    textAlign: 'left',
    borderBottom: '2px solid #e5e7eb',
  };

  const tdStyle = {
    padding: '15px',
    borderBottom: '1px solid #e5e7eb',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>All Employees</h1>
      <div style={tableContainerStyle}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Employee No</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td style={tdStyle}>{employee.emp_no}</td>
                <td style={tdStyle}>{`${employee.user.first_name} ${employee.user.last_name}`}</td>
                <td style={tdStyle}>{employee.user.email}</td>
                <td style={tdStyle}>{employee.department}</td>
                <td style={tdStyle}>{employee.user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;
