import React, { ReactElement, FC } from 'react';
import styles from './Modal.module.css';

interface Modal_Props {
        visible: boolean;
        title: string;
        content: ReactElement;
        footer: ReactElement;
        onClose: () => void;
}

const Modal : FC <Modal_Props> = ({ visible, title, content,
                                   footer, onClose})   => {

    if (!visible) return null;
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h3 className={styles.modalTitle} >{ title }</h3>
                    <div className={styles.modalClose} onClick={ onClose }><b> x </b></div>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalContent}>{ content }</div>
                </div>
                 <div className={styles.modalFooter}>{ footer }</div>
            </div>
        </div>
    );
};

export default Modal;