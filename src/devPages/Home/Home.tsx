import React, { FC, useEffect, useState } from 'react';
import { IHomePage } from '@/pages/index';
import { Layout } from '@/components/layout/Layout';
import { PostItem } from '@/components/PostItem/PostItem';
import { Container } from '@/components/container/Container';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import { IGetPostItem } from '@/types/IGetPostItem';
import { Filters } from '@/components/Filters/Filters';
import styles from './Home.module.scss';

export const Home: FC<IHomePage> = ({ posts }) => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<IGetPostItem[]>([]);
  useEffect(() => setPostsData(posts.data), [])
  // @ts-ignore
  const colors = [...new Set(posts.data.flatMap(post => post.tags))];

  return (
    <>
      {
        isOpenFilters ? <Filters
            colors={colors}
            setIsOpenFilters={setIsOpenFilters}
            setPostsData={setPostsData}
            postsData={postsData} />
          :
          ''
      }
      <Layout title='Chilli Posts'>
        <Container>
          <div className={styles.filters}>
            <div onClick={() => setIsOpenFilters(true)} className={styles.filtersItem}>
              Фильтры
              <GlobalSvgSelector id='filters' />
            </div>
          </div>
          <section className={styles.postsList}>
            {
              postsData.map(post => <PostItem key={post.id} post={post} />)
            }
          </section>
        </Container>
      </Layout>
    </>
  );
};

