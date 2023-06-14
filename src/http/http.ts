import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api.posts.chillicode.ru',
  headers: {
    'content-type': 'application/json ',
  },
});