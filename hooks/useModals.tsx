import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

export const modalOpenAtom = atom({
  key: 'modalOpenAtom',
  default: {
    state: false,
    src: '',
  },
});

const useModals = () => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenAtom);

  const chaheModal = useCallback(
    (state: boolean, url: string) => {
      setModalOpen({
        state,
        src: modalOpen.src === '' ? url : '',
      });
    },
    [setModalOpen]
  );

  return {
    modalOpen,
    chaheModal,
  };
};

export default useModals;
