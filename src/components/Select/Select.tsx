import React, { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Select.module.scss';
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

interface ISelect {
  colors: {id: number, title: string}[];
  setSelectedColor: (value: {id: number, title: string}[]) => void;
}

export const Select: FC<ISelect> = ({ colors, setSelectedColor }) => {
  const [active, setActive] = useState<boolean>(false);
  const [color, setColor] = useState<{id: number, title: string}[]>([]);
  const onActive = (): void => {
    setActive(!active);
  };
  const handleOptionClick = (colorItem: {id: number, title: string}) => {
    if (color.includes(colorItem)) {
      setColor(color.filter((item: {id: number, title: string}) => item.id !== colorItem.id));
      setSelectedColor(color.filter((item: {id: number, title: string}) => item.id !== colorItem.id));
    } else {
      setColor([...color, colorItem]);
      setSelectedColor([...color, colorItem]);
    }
  };
  const deleteColor = (colorItem: {id: number, title: string}) => {
    setColor(color.filter(item => item.id !== colorItem.id));
  };

  return (
    <AnimatePresence>
      <div onClick={onActive} className={cn(styles.selectHeader, active)}>
          <span className={styles.selectCurr}>
            {
              color.length ?
                <>
                  {
                    color.map((item) => (
                      <div className={styles.item} key={item.id} onClick={() => deleteColor(item)}>
                        {item.title}
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
            className={cn(styles.selectBody, active && styles.active)}
          >
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
                    {item.title}
                  </motion.div>
                </>,
              )
            }
          </motion.div>}
      </div>
    </AnimatePresence>
  );
};

