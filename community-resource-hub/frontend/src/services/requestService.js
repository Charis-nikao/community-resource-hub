import API from './api';
export default {
  create: async (payload) => {
    const { data } = await API.post('/requests', payload);
    return data;
  },
  getAll: async () => {
    const { data } = await API.get('/requests');
    return data;
  }
};
