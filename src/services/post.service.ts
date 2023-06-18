import { http } from '@/http/http';
import { IGetPostItem } from '@/types/IGetPostItem';

export const postService = {
  async getPost(id: number) {
    return await http.get<{ data: IGetPostItem }>(`/post/${id}`);
  },
};