import React, { FC } from 'react';
import styles from './Filters.module.scss';
import { Select } from '@/components//Select/Select';
import { Blur } from '@/components/UI/Blur/Blur';

export interface IFilters {
  colors: string[];
}

export const Filters: FC<IFilters> = ({ colors }) => {
  return (
    <Blur>
      <div className={styles.filters}>
        <div className={styles.title}>Фильтры</div>
        <div className={styles.items}>
          <Select colors={colors} />
          <div className={styles.date}>
            <input placeholder='Дата от' type='date' className={styles.dateFrom} />
            <span>-</span>
            <input placeholder='Дата до' type='date' className={styles.dateTo} />
          </div>
          <button>ПРИМЕНИТЬ</button>
        </div>
      </div>
    </Blur>
  );
};

