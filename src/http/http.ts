import axios from 'axios';
import Cookies from 'js-cookie';

console.log(Cookies.get('jwt'));
export const http = axios.create({
  baseURL: 'https://api.posts.chillicode.ru',
  headers: {
    Authorization: `Bearer LSDvvXcI2J5OvsS5lHcaz47eR1AClC7SwTXho0eJ`,
  },
});