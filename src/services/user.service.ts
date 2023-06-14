import { http } from '@/http/http';
import { ILoginForm } from '@/devPages/Login/Login';

export const userService = {
  async login(body: ILoginForm) {
    return await http.post<{token: string}>('/login', body);
  },
  async logOut() {
    return await http.post('/logout');
  },

};