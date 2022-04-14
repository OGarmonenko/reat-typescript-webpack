import React, { ReactElement, FC } from 'react';
import styles from './Modal.module.css';
import close from '@assets/icons/close.png';

interface Modal_Props {
  visible: boolean;
  title: string;
  content: ReactElement;
  footer: ReactElement;
  onClose: () => void;
}

const Modal: FC<Modal_Props> = ({ visible, title, content, footer, onClose }) => {
  if (!visible) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          <div className={styles.modalClose} onClick={onClose}>
            <img src={close} className={styles.close}></img>
          </div>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{content}</div>
        </div>
        <div className={styles.modalFooter}>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
