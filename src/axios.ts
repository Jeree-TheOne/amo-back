import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.AMO_URL;
    config.headers.Authorization = 'Bearer ' + process.env.ACCESS_TOKEN;
    config.headers['Content-Type'] = 'aplication/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  },
);
