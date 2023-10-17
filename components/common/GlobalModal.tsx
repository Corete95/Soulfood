import React from 'react';
import Portal from './Portal';
import Image from 'next/image';
import styles from '../../styles/common.module.scss';
import { useRecoilValue } from 'recoil';
import useModals, { modalOpenAtom } from '@/hooks/useModals';

const GlobalModal = () => {
  const modalState = useRecoilValue(modalOpenAtom);
  const { modalOpen, chaheModal } = useModals();

  return (
    <>
      <Portal>
        {modalOpen.state && (
          <div className={styles.backgroundContainer}>
            <div
              className={styles.overlay}
              onClick={() => chaheModal(false, '')}
            ></div>
            <div className={styles.modalContainer}>
              <div className={styles.imageBox}>
                <Image
                  src={modalState.src}
                  alt=""
                  sizes="70vh"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};

export default GlobalModal;
