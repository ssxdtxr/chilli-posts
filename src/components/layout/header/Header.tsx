import React from 'react';
import { Container } from '@/components/container/Container';
import styles from './Header.module.scss';
import { GlobalSvgSelector } from '@/assets/icons/GlobalSvgSelector';
import Link from 'next/link';
import { userService } from '@/services/user.service';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useAuth } from '@/hooks/useAuth';


export const Header = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { logout, jwt } = useAuth();
  const onExit = async () => {

    try {
      const { data } = await userService.logOut();
      logout();
      router.push('/login');
      enqueueSnackbar('Вы успешно разлогинились', {
        variant: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <header className={styles.header}>
      <Container>
        <nav className={styles.wrapper}>
          <Link href='/login'>
            <div className={styles.leftSide}>
              <GlobalSvgSelector id='logo' />
              <div className={styles.title}>CHILLI POSTS</div>
            </div>
          </Link>
          {
            jwt ? <div className={styles.rightSide}>
              <div className={styles.user}>
                <GlobalSvgSelector id='user' />
                <div className={styles.name}>MonFriK</div>
              </div>
              <div onClick={() => onExit()} className={styles.exit}>Выйти</div>
            </div> : ''
          }

        </nav>
      </Container>
    </header>
  );
};


