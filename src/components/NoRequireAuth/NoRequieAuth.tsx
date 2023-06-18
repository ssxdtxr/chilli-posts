import React, { FC, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from '@/components/Navigate/Navigate';
interface INoRequireAuth {
  children: ReactNode
}

export const NoRequireAuth: FC<INoRequireAuth> = ({children}) => {
  const {jwt} = useAuth()
  if (jwt) {
    return <Navigate to='/' />
  }
  return (
    <>
      {children}
    </>
  );
};

