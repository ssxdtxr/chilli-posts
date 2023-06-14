import { FC } from 'react';
import { http } from '@/http/http';

export async function getServerSideProps(context: any) {
  const { data: postData } = await http.get(`/post/${context.query.id}`);
  return { props: { postData } };
}

interface PostPage {
  postData: any;
}

const PostPage: FC<PostPage> = ({ postData }) => {
  console.log(postData);
  return <div>{postData.title}</div>;
};
export default PostPage;