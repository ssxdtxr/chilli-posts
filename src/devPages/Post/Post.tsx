import React, { FC, useContext } from 'react';
import styles from './Post.module.scss';
import Image from 'next/image';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import { IGetPostItem } from '@/types/IGetPostItem';
import 'dayjs/locale/ru';

export interface IPostItem {
  postData: IGetPostItem;
}

export const Post: FC<IPostItem> = ({ postData }) => {
  const { image, tags, title, description, created_at } = postData;

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <Image width={328} height={222} className={styles.img} src={image} alt='img' />
        <section className={styles.mainInfo}>
          <div className={styles.topSide}>
            <div className={styles.title}>{title}</div>
            <div className={styles.tags}>
              {
                tags && tags.map((tag, index) => (
                  <div key={index} className={styles.tag}>
                    {tag.title}
                  </div>))
              }
            </div>
          </div>

          <div className={styles.bottomSide}>
            <div className={styles.auth}>Автор: @chillicode</div>
            <time className={styles.time}>
              <GlobalSvgSelector id='clock' />
              {dayjs(created_at).locale('ru').format('DD MMMM YYYY HH:mm')}
            </time>
          </div>
        </section>
      </div>
      <section>
        {description}
      </section>
    </article>
  );
};

