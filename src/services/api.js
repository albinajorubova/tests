import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',  
  headers: {
    'scope-key': 'hK2M;a~$yN[]Gke4',
  },
  withCredentials: true,
});

export default api;
