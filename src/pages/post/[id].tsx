import { FC } from 'react';
import { http } from '@/http/http';
import { IPost } from '@/types/IPost';

export async function getServerSideProps(context: any) {
  const { data: postData } = await http.get('/post/', { params: { post: context.query.post } });
  return { props: { postData } };
}

interface PostPage {
  postData: IPost;
}

const PostPage: FC<PostPage> = ({ postData }) => {
  console.log(postData);
  return <div></div>;
};
export default PostPage;