import React, { useState } from 'react';
import { Container } from '@/components/container/Container';
import styles from './Header.module.scss';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import Link from 'next/link';
import { userService } from '../../../services/user.service';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';


export const Header = () => {
  const [isCookies, setIsCookies] = useState<boolean>(!Cookies.get('jwt'));
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const onExit = async () => {
    Cookies.remove('jwt');
    router.push('/login');
    enqueueSnackbar('Вы успешно разлогинились', {
      variant: 'success'
    })
    setIsCookies(false)
    // try {
    //   const { data } = await userService.logOut();
    //   setIsCookies(false)
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      {

        isCookies ?
          <div className={styles.header}>
            <Container>
              <div className={styles.wrapper}>
                <Link href='/'>
                  <div className={styles.leftSide}>
                    <GlobalSvgSelector id='logo' />
                    <div className={styles.title}>CHILLIPOSTS</div>
                  </div>
                </Link>
              </div>
            </Container>
          </div>
          :
          <div className={styles.header}>
            <Container>
              <div className={styles.wrapper}>
                <Link href='/'>
                  <div className={styles.leftSide}>
                    <GlobalSvgSelector id='logo' />
                    <div className={styles.title}>CHILLIPOSTS</div>
                  </div>
                </Link>
                <div className={styles.rightSide}>
                  <div className={styles.user}>
                    <GlobalSvgSelector id='user' />
                    <div className={styles.name}>MonFriK</div>
                  </div>
                  <div onClick={() => onExit()} className={styles.exit}>Выйти</div>
                </div>
              </div>
            </Container>
          </div>
      }
    </>
  );
};

