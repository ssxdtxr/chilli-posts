import React, { FC } from 'react';
import styles from './Post.module.scss';
import Image from 'next/image';
import { IPost } from '@/types/IPost';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import Link from 'next/link';

interface IPostItem {
  post: IPost;
}

export const Post: FC<IPostItem> = ({ post }) => {
  const { image, tags, title, description, created_at } = post;
  return (
    <div className={styles.post}>
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
          <h1 className={styles.title}>
            {title}
          </h1>
        </Link>
        <p className={styles.descr}>
          {description}
        </p>
        <div className={styles.moreInfo}>
          <div className={styles.readMore}>
            Читать подробнее
            <GlobalSvgSelector id='readMore' />
          </div>
          <div className={styles.time}>
            <GlobalSvgSelector id='clock' />
            {dayjs(created_at).locale('rus').format('DD MMM YYYY HH:mm')}
          </div>
        </div>
      </div>
    </div>
  );
};

