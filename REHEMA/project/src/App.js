import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Import pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import AllEvents from './pages/AllEvents';
import EventUpload from './pages/EventUpload';
import OpportunityUpload from './pages/OpportunityUpload';
import OpportunityCreate from './pages/OpportunityCreate';
import OpportunityDetails from './pages/OpportunityDetails';
import Profile from './pages/Profile';
import StudentDashboard from './pages/StudentDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import HeadDashboard from './pages/HeadDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AllUsers from './pages/AllUsers';
import AllStudents from './pages/AllStudents';
import AllEmployees from './pages/AllEmployees';

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/event-details/:id?" element={<EventDetails />} />
            <Route path="/all-events" element={<AllEvents />} />
            <Route path="/opportunity-details/:id?" element={<OpportunityDetails />} />
            <Route path="/opportunity-create" element={<OpportunityCreate />} />
            <Route path="/profile" element={<Profile />} />

            {/* Student Routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* Employee Routes */}
            <Route
              path="/employee/dashboard"
              element={
                <ProtectedRoute allowedRoles={['employee']}>
                  <EmployeeDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/event-upload"
              element={
                <ProtectedRoute allowedRoles={['employee', 'head', 'admin']}>
                  <EventUpload />
                </ProtectedRoute>
              }
            />

            {/* Head Routes */}
            <Route
              path="/head/dashboard"
              element={
                <ProtectedRoute allowedRoles={['head']}>
                  <HeadDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/opportunity-upload"
              element={
                <ProtectedRoute allowedRoles={['head', 'admin']}>
                  <OpportunityUpload />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-users"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AllUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-students"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AllStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/all-employees"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AllEmployees />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
