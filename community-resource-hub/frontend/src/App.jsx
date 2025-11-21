import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RequestHelp from './pages/RequestHelp';
import BrowseRequests from './pages/BrowseRequests';
import RequestDetails from './pages/RequestDetails';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <div>
        <nav style={{padding:16, borderBottom:'1px solid #eee'}}>
          <Link to="/" style={{marginRight:12}}>Home</Link>
          <Link to="/requests" style={{marginRight:12}}>Requests</Link>
          <Link to="/request/new" style={{marginRight:12}}>Request Help</Link>
          <Link to="/login" style={{marginRight:12}}>Login</Link>
        </nav>
        <main style={{padding:16}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/requests" element={<BrowseRequests />} />
            <Route path="/request/new" element={<RequestHelp />} />
            <Route path="/requests/:id" element={<RequestDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}
