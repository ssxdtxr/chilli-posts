import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

// const updateHeaders = () => {
//   http.interceptors.request.use(
//     (config: AxiosRequestConfig<any>) => {
//       const token = Cookies.get('jwt');
//       if (token) {
//         config.headers!['Authorization'] = `Bearer ${token}`;
//       }
//       return config;
//     }, (error) => Promise.reject(error));
// };
console.log(Cookies.get('jwt'));

export const http = axios.create({
  baseURL: 'https://api.posts.chillicode.ru',
  headers: {
    Authorization: `Bearer `
  }
});
