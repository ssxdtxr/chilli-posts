import React, { FC } from 'react';
import styles from './PostItem.module.scss';
import Image from 'next/image';
import { IPost } from '@/types/IPost';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import Link from 'next/link';
import 'dayjs/locale/ru';

interface IPostItem {
  post: IPost;
}

export const PostItem: FC<IPostItem> = ({ post }) => {
  const { image, tags, title, description, created_at } = post;
  return (
    <article className={styles.post}>
      <Image className={styles.img} width={328} height={222} src={image} alt='image' />
      <div className={styles.info}>
        <div className={styles.tags}>
          {
            tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag.title}
              </div>))
          }
        </div>
        <Link href={`/post/${post.id}`}>
          <div className={styles.title}>
            {title}
          </div>
        </Link>
        <p className={styles.descr}>
          {description}
        </p>
        <div className={styles.moreInfo}>
          <div className={styles.readMore}>
            Читать подробнее
            <GlobalSvgSelector id='readMore' />
          </div>
          <time className={styles.time}>
            <GlobalSvgSelector id='clock' />
            {dayjs(created_at).locale('ru').format('DD MMM YYYY HH:mm')}
          </time>
        </div>
      </div>
    </article>
  );
};

