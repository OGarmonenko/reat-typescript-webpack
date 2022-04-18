import React, { FC } from 'react';
import styles from './Modal.module.css';
import { Modal_Props } from '@interfaces/interfaceModalProps';

const Modal: FC<Modal_Props> = ({ header, content, footer, headerColor = '#61dafb' }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalHeader} style={{ background: headerColor }}>
          {header}
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
