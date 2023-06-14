import { Home } from '@/devPages/Home/Home';
import { http } from '@/http/http';
import { FC } from 'react';
import { IPosts } from '@/types/IPosts';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const { data: posts } = await http.get('/post');
  return { props: { posts } };
};

export interface IHomePage {
  posts: IPosts;
}
const HomePage: FC<IHomePage> = ({posts}) => {
  return (
    <Home posts={posts}/>
  );
};
export default HomePage;