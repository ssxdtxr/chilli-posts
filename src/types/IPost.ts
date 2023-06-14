export interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: { id: number, title: string }[];
  created_at: string;
}