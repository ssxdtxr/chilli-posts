import React, { FC, useState } from 'react';
import { IHomePage } from '@/pages';
import { Layout } from '@/components/layout/Layout';
import { PostItem } from '@/components/PostItem/PostItem';
import styles from './Home.module.scss';
import { Container } from '@/components/container/Container';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import { Filters } from '@/components/Filters/Filters';

export const Home: FC<IHomePage> = ({ posts }) => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

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

