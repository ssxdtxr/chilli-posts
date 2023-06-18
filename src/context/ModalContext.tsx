import { createContext, FC, ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/useClickOutside';
import { Blur } from '@/components/UI/Blur/Blur';


interface IModalProvider {
  children: ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export const ModalProvider: FC<IModalProvider> = ({ children, setIsModalOpen, isModalOpen }) => {
  const ref = useOutsideClick(() => {
    setIsModalOpen(false);
  });
  return (
    <AnimatePresence>
      {
        isModalOpen &&
        <Blur>
          <motion.div ref={ref} initial={{ x: -400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -700 }}>
            {children}
          </motion.div>
        </Blur>

      }
    </AnimatePresence>
  );
};