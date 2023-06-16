import { FC } from 'react';
import { http } from '@/http/http';
import { Post } from '@/devPages/Post/Post';
import { IGetPostItem } from '@/types/IGetPostItem';

export async function getServerSideProps(context: any) {
  const { data: postData } = await http.get(`/post/${context.query.id}`);
  return { props: { postData } };
}

export interface IPost {
  postData: any;
}

const PostPage: FC<IPost> = ({ postData }) => {
  return <Post postData={postData.data} />;
};
export default PostPage;