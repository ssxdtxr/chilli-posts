import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './Post.module.scss';
import Image from 'next/image';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import { IGetPostItem } from '@/types/IGetPostItem';
import 'dayjs/locale/ru';
import { postService } from '@/services/post.service';
import Skeleton from 'react-loading-skeleton';
import login from '@/pages/login';

export interface IPostItem {
  id: number;
}

export const Post: FC<IPostItem> = ({ id }) => {
  const [dataPost, setDataPost] = useState<IGetPostItem>({} as IGetPostItem);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchPost = async (id: number) => {
    try {
      const { data: post } = await postService.getPost(id);
      console.log(post);
      setDataPost(post.data);
    } catch (err: any) {
      setError('Произошла ошибка');
    }
  };

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  return (
    <article className={styles.card}>
      {
        error ? <h3>{error}</h3> :
          <>
            <div className={styles.info}>
              <div className={styles.image}>
                <Image width={328} height={222} className={styles.img} src={dataPost.image} alt={dataPost.title} />
              </div>
              <section className={styles.mainInfo}>
                <div className={styles.topSide}>
                  <h3 className={styles.title}>{dataPost.title}</h3>
                  <div className={styles.tags}>
                    {
                      dataPost.tags && dataPost.tags.map(tag => (
                        <div key={tag.id} className={styles.tag}>
                          {tag.title}
                        </div>))
                    }
                  </div>
                </div>

                <div className={styles.bottomSide}>
                  <p className={styles.auth}>Автор: @chillicode</p>
                  <time className={styles.time}>
                    <GlobalSvgSelector id='clock' />
                    {dayjs(dataPost.created_at).locale('ru').format('DD MMMM YYYY HH:mm')}
                  </time>
                </div>
              </section>
            </div>
            <p>
              {dataPost.description}
            </p>
          </>
      }

    </article>
  );
};

