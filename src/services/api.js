import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://portal-transp-teste-metrics.us-east-1.elasticbeanstalk.com/',
  baseURL: 'https://admin-portal.isac.org.br/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
