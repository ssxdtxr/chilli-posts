import React, { FC, ReactNode } from 'react';
import styles from "./Blur.module.scss";

interface IBlur {
  children: ReactNode;
}

export const Blur: FC<IBlur> = ({ children }) => {
  return (
    <div className={styles.blur}>
      {children}
    </div>
  );
};

