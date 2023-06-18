import React, { ChangeEvent, FC, useState } from 'react';
import styles from './Filters.module.scss';
import { Select } from '@/components//Select/Select';
import { Blur } from '@/components/UI/Blur/Blur';
import { useOutsideClick } from '@/hooks/useClickOutside';
import { IGetPostItem } from '@/types/IGetPostItem';

interface IFilters {
  colors: {id: number, title: string}[];
  setIsOpenFilters: (item: boolean) => void;
  setPostsData: (value: IGetPostItem[]) => void;
  postsData: IGetPostItem[];
}

export const Filters: FC<IFilters> = ({ colors, setIsOpenFilters, setPostsData, postsData }) => {
  const [selectedColor, setSelectedColor] = useState<{id: number, title: string}[]>([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const handleDateFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateFrom(event.target.value);
  };

  const handleDateToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateTo(event.target.value);
  };

  const ref = useOutsideClick(() => {
    setIsOpenFilters(false);
  });

  const changePosts = () => {
    const idSelectedColor = selectedColor.map(item =>item.id)
    console.log(idSelectedColor);
    const newPosts = postsData.filter(item => (
      item.created_at >= dateFrom &&
      item.created_at <= dateTo &&
      item.tags.some(tag => idSelectedColor.includes(tag.id))
    ));
    setPostsData(newPosts);
  };
  return (
    <Blur>
      <div ref={ref} className={styles.filters}>
        <div className={styles.title}>Фильтры</div>
        <div className={styles.items}>
          <Select colors={colors} setSelectedColor={setSelectedColor} />
          <div className={styles.date}>
            <input placeholder='Дата от' type='date' value={dateFrom} onChange={handleDateFromChange}
                   className={styles.dateFrom} />
            <span>-</span>
            <input placeholder='Дата до' type='date' value={dateTo} onChange={handleDateToChange}
                   className={styles.dateTo} />
          </div>
          <button onClick={changePosts}>ПРИМЕНИТЬ</button>
        </div>
      </div>
    </Blur>
  );
};

