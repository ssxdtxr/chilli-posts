import axios from 'axios';
import Cookies from 'js-cookie';

const updateHeaders = () => {
  http.interceptors.request.use(
    (config) => {
      const token = Cookies.get('jwt');
      if (token) {
        config.headers!['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }, (error) => Promise.reject(error));
};

export const http = axios.create({
  baseURL: 'https://api.posts.chillicode.ru',
});
updateHeaders();
