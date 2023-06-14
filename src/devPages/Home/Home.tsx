import React, { FC, useEffect, useState } from 'react';
import { IHomePage } from '@/pages/index';
import { Layout } from '@/components/layout/Layout';
import { PostItem } from '@/components/PostItem/PostItem';
import styles from './Home.module.scss';
import { Container } from '@/components/container/Container';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import { Filters } from '@/components/Filters/Filters';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export const Home: FC<IHomePage> = ({ posts }) => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get('jwt')) {
      router.push('/login')
    }
  },[])
  return (
    <Layout title='Chilli Posts'>
      {
        isOpenFilters ?
          <Filters />
          :
          ''
      }
      <Container>
        <div onClick={() => setIsOpenFilters(!isOpenFilters)} className={styles.filters}>
          Фильтры
          <GlobalSvgSelector id='filters' />
        </div>
        <div className={styles.postsList}>
          {
            posts.data.map(post => <PostItem key={post.id} post={post} />)
          }
        </div>
      </Container>
    </Layout>
  );
};

