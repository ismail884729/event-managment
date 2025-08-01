import React, { useState, useEffect } from 'react';
import { getStudents } from '../services/studentService';

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
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
      <h1 style={headerStyle}>All Students</h1>
      <div style={tableContainerStyle}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Reg No</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Year of Study</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={tdStyle}>{student.reg_no}</td>
                <td style={tdStyle}>{`${student.user.first_name} ${student.user.last_name}`}</td>
                <td style={tdStyle}>{student.user.email}</td>
                <td style={tdStyle}>{student.course}</td>
                <td style={tdStyle}>{student.year_of_study}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
