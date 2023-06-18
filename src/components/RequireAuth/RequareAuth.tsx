import React, { FC, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from '@/components/Navigate/Navigate';
interface IRequireAuth {
  children: ReactNode
}

export const RequireAuth: FC<IRequireAuth> = ({children}) => {
  const {jwt} = useAuth()
  if (!jwt) {
    return <Navigate to='/login' />
  }
  return (
    <>
      {children}
    </>
  );
};

