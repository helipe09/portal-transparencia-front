import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://teste.wedotecnologia.com.br/',
  //baseURL: 'https://admin-portal.wedotecnologia.com.br/',
  //baseURL: 'https://transparencia-2.herokuapp.com/',
  baseURL: 'https://admin-portal.isac.org.br/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
