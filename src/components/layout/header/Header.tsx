import React from 'react';
import { Container } from '@/components/container/Container';
import styles from './Header.module.scss';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';


export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.wrapper}>

          <div className={styles.leftSide}>
            <GlobalSvgSelector id='logo'/>
            <div className={styles.title}>CHILLIPOSTS</div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.user}>
              <GlobalSvgSelector id='user'/>
              <div className={styles.name}>MonFriK</div>
            </div>
            <div className={styles.exit}>Выйти</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

