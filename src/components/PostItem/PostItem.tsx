import React, { FC, useContext, useState } from 'react';
import styles from './PostItem.module.scss';
import Image from 'next/image';
import { IGetPostItem } from '@/types/IGetPostItem';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ModalProvider } from '@/context/ModalContext';
import { Post } from '@/components/UI/models/Post/Post';

interface IPostItem {
  post: IGetPostItem;
}

export const PostItem: FC<IPostItem> = ({ post }) => {
  const { image, tags, title, description, created_at, id } = post;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <ModalProvider isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Post id={id} />
      </ModalProvider>
      <article className={styles.post}>
        <div className={styles.image}>
          <Image
            onClick={openModal}
            className={styles.img}
            width={328}
            height={222}
            src={image}
            alt={title}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.tags}>
            {
              tags.map((tag, index) => (
                <div key={index} className={styles.tag}>
                  {tag.title}
                </div>))
            }
          </div>
          <div onClick={openModal} className={styles.title}>
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

