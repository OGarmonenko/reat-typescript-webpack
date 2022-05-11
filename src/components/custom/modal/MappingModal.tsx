import React, { FC, useMemo } from 'react';
import Modal from '@components/custom/modal/Modal';
import { TypeModal, HeaderColor, Modal_Props, configModal_Props } from '@interfaces/interfaceModalProps';
import closeIcon from '@assets/icons/close.png';
import errorIcon from '@assets/icons/error.png';
import warnIcon from '@assets/icons/warning.png';
import infoIcon from '@assets/icons/info.png';
import styles from '@components/custom/modal/Modal.module.css';
import { ALT, Button } from '@enums';

interface Modal_Type {
  onClose: () => void;
  onCancel?: () => void;
  configModal: configModal_Props;
}

const MappingModal: FC<Modal_Type> = ({ configModal, onClose, onCancel }) => {
  const Props: Modal_Props = useMemo(() => {
    switch (configModal.type) {
      case TypeModal.ERROR: {
        return {
          header: (
            <div data-testid="data-header" className={styles.modalHeader} style={{ background: HeaderColor.ERROR }}>
              <p>{TypeModal.ERROR}</p>
              <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
            </div>
          ),
          content: (
            <>
              <img src={errorIcon} className={styles.contentIcon} alt={ALT.ERROR} /> <p> {configModal.data.message} </p>
            </>
          ),
          footer: <button onClick={onClose}> {Button.OK} </button>,
        };
      }
      case TypeModal.WARNING: {
        return {
          header: (
            <div data-testid="data-header" className={styles.modalHeader} style={{ background: HeaderColor.WARNING }}>
              <p>{TypeModal.WARNING}</p>
              <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
            </div>
          ),
          content: (
            <>
              <img src={warnIcon} className={styles.contentIcon} alt={ALT.WARNING} />
              <p> {configModal.data.message} </p>
            </>
          ),
          footer: (
            <>
              <button onClick={onClose}> {Button.OK} </button> <button onClick={onCancel}> {Button.CANCEL} </button>
            </>
          ),
        };
      }
      case TypeModal.INFO: {
        return {
          header: (
            <div data-testid="data-header" className={styles.modalHeader}>
              <p>{TypeModal.INFO}</p> <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
            </div>
          ),
          content: (
            <>
              <img src={infoIcon} className={styles.contentIcon} alt={ALT.INFO} /> <p> {configModal.data.message} </p>
            </>
          ),
          footer: <button onClick={onClose}> {Button.OK} </button>,
        };
      }
    }
  }, [configModal.type]);

  if (!configModal.visible) return null;
  return (
    <div data-testid="data-mappingModal">
      <Modal {...Props} />
    </div>
  );
};

export default MappingModal;
