import React, { FC } from 'react';
import styles from './Modal.module.css';
import { Modal_Props } from '@interfaces/interfaceModalProps';

const Modal: FC<Modal_Props> = ({ header, content, footer }) => {
  return (
    <div data-testid="data-modal" className={styles.modal}>
      <div className={styles.modalDialog}>
        {header}
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{content}</div>
        </div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
