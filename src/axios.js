import axios from 'axios';
import configs from './configs';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    'Authorization': 'Bearer ' + configs.access_token,
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// instance.defaults.headers.common['Authorization'] = 'Bearer ' + configs.access_token;
// instance.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';

export default instance;