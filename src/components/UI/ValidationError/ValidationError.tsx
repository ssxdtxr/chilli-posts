import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from "./ValidationError.module.scss"
interface IValidationError {
  error: string
}
export const ValidationError: FC<IValidationError> = ({error}) => {

  return (
    <AnimatePresence>
        {
          error &&
          <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.error}>
            {error}
          </motion.div>
        }
    </AnimatePresence>
  );
};

