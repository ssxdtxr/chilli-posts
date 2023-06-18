import { createContext, FC, ReactNode, useState } from 'react';
import { postService } from '@/services/post.service';

interface IModalContext {
  isModalOpen: boolean;
  toggleModal: (id: number) => void;
  dataModel: any | '';
}

export const ModalContext = createContext<IModalContext>({
  isModalOpen: false,
  toggleModal: () => {
  },
  dataModel: null,
});

interface IModalProvider {
  children: ReactNode;
}

export const ModalProvider: FC<IModalProvider> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  let dataModel = null;

  const toggleModal = async (id: number) => {
    if (!isModalOpen) {
      setModalOpen(true);
      try {
        const { data: post } = await postService.getPost(id);
        dataModel = post;
        console.log(dataModel);
      } catch (error) {
        console.log(error);
      }
    } else {
      setModalOpen(false);
    }
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal, dataModel }}>
      {children}
    </ModalContext.Provider>
  );
};