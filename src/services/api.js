import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, 
  headers: {
    'scope-key': 'hK2M;a~$yN[]Gke4',
  },
  withCredentials: true,
});

export default api;
