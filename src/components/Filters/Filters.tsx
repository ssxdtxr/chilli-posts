import React from 'react';
import styles from "./Filters.module.scss"
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.title}>Фильтры</div>
      <div className={styles.items}>
        <Select options={options} />
        <div>
          <input type='date' />
          <input type='date' />
        </div>
        <button>ПРИМЕНИТЬ</button>
      </div>
    </div>
  );
};

