import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Select.module.scss';
import { IFilters } from '@/components/Filters/Filters';
import cn from 'classnames';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';

const activeVariants = {
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * .08,
    },
  }),
  hidden: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};
export const Select: FC<IFilters> = ({ colors }) => {
  const [active, setActive] = useState<boolean>(false);
  const [color, setColor] = useState<string[]>([colors[0]]);
  const onActive = (): void => {
    setActive(!active);
  };

  const handleOptionClick = (colorItem: string) => {
    if (color.includes(colorItem)) {
      setColor(color.filter((item: string) => item !== colorItem));
    } else {
      setColor([...color, colorItem]);
    }
  };

  const deleteColor = (colorItem: string) => {
    setColor(color.filter(item => item !== colorItem));
  };

  return (
    <AnimatePresence>
      <div onClick={onActive} className={cn(styles.selectHeader, active)}>
          <span className={styles.selectCurr}>
            {
              color.length ?
                <>
                  {
                    color.map((item, index) => (
                      <div className={styles.item} key={index} onClick={() => deleteColor(item)}>
                        {item}
                        <GlobalSvgSelector id='delete' />
                      </div>
                    ))
                  }
                  <div>Категория товара</div>
                </>
                :
                <div>Категория товара</div>
            }
          </span>
        {
          active &&
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            variants={activeVariants}
            exit={{ opacity: 0, x: -100 }}
            className={cn(styles.selectBody, active && styles.active)}>
            {
              colors.map((item, index) =>
                <>
                  <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    variants={activeVariants}
                    onClick={() => handleOptionClick(item)}
                    key={index}
                    className={styles.item}
                    custom={index + 1}
                  >
                    {item}
                  </motion.div>
                </>,
              )
            }
          </motion.div>}
      </div>
    </AnimatePresence>
  );
};

