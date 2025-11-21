import React, { createContext, useEffect, useState } from 'react';
import API from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadProfile = async () => {
    try {
      const res = await API.get('/auth/profile');
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('crh_token');
    if (token) loadProfile();
  }, []);

  return <AuthContext.Provider value={{ user, setUser, loadProfile }}>{children}</AuthContext.Provider>;
};
