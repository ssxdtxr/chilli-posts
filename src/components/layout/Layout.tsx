import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/header/Header';

interface ILayout {
  title: string;
}

export const Layout: FC<PropsWithChildren & ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <Header />
        {children}
      </>
    </>
  );
};

