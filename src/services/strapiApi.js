import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cms-transparencia.herokuapp.com',
  // baseURL: 'http://localhost:1337',
});

export default api;
