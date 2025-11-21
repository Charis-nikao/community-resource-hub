import API from './api';
export default {
  register: async (payload) => {
    const { data } = await API.post('/auth/register', payload);
    if (data.token) localStorage.setItem('crh_token', data.token);
    return data;
  },
  login: async (payload) => {
    const { data } = await API.post('/auth/login', payload);
    if (data.token) localStorage.setItem('crh_token', data.token);
    return data;
  },
  logout: () => {
    localStorage.removeItem('crh_token');
  }
};
