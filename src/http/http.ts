import axios from 'axios';
import Cookies from 'js-cookie';

console.log();
export const http = axios.create({
  baseURL: 'https://api.posts.chillicode.ru',
  headers: {
    Authorization: `Bearer ${Cookies.get('jwt')}`,
  },
});