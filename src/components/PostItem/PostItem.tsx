import React, { FC, useContext } from 'react';
import styles from './PostItem.module.scss';
import Image from 'next/image';
import { IGetPostItem } from '@/types/IGetPostItem';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ModalContext } from '../../context/ModalContext';
import { Post } from '@/devPages/Post/Post';

interface IPostItem {
  post: IGetPostItem;
}

export const PostItem: FC<IPostItem> = ({ post }) => {
  const { image, tags, title, description, created_at, id } = post;
  const { toggleModal, isModalOpen, dataModel } = useContext(ModalContext);
  return (
    <>
      {
        isModalOpen && <Post postData={dataModel} />
      }
      <article className={styles.post}>
        <Image onClick={() => toggleModal(id)} className={styles.img} width={328} height={222} src={image}
               alt='image' />
        <div className={styles.info}>
          <div className={styles.tags}>
            {
              tags.map((tag, index) => (
                <div key={index} className={styles.tag}>
                  {tag.title}
                </div>))
            }
          </div>
          <div onClick={() => toggleModal(id)} className={styles.title}>
            {title}
          </div>
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
              {dayjs(created_at).locale('ru').format('DD MMMM YYYY HH:mm')}
            </time>
          </div>
        </div>
      </article>
    </>
  );
};

