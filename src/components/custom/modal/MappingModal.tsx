import React, { FC } from 'react';
import Modal from '@components/custom/modal/Modal';
import { TypeModal, HeaderColor, Modal_Props } from '@interfaces/interfaceModalProps';
import closeIcon from '@assets/icons/close.png';
import errorIcon from '@assets/icons/error.png';
import warnIcon from '@assets/icons/warning.png';
import infoIcon from '@assets/icons/info.png';
import styles from '@components/custom/modal/Modal.module.css';
import { ALT, Button } from '@enums';

interface Modal_Type {
  type: string;
  message: string;
  onClose: () => void;
  onCancel?: () => void;
}

const MappingModal: FC<Modal_Type> = ({ type, message, onClose, onCancel }) => {
  const Props: { [key: string]: Modal_Props } = {
    [TypeModal.ERROR]: {
      headerColor: HeaderColor.ERROR,
      header: (
        <>
          {TypeModal.ERROR} <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
        </>
      ),
      content: (
        <>
          <img src={errorIcon} className={styles.contentIcon} alt={ALT.ERROR} /> <p> {message} </p>{' '}
        </>
      ),
      footer: <button onClick={onClose}> {Button.OK} </button>,
    },
    [TypeModal.WARNING]: {
      headerColor: HeaderColor.WARNING,
      header: (
        <>
          {TypeModal.WARNING} <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
        </>
      ),
      content: (
        <>
          <img src={warnIcon} className={styles.contentIcon} alt={ALT.WARNING} /> <p> {message} </p>{' '}
        </>
      ),
      footer: (
        <>
          <button onClick={onClose}> {Button.OK} </button> <button onClick={onCancel}> {Button.CANCEL} </button>
        </>
      ),
    },
    [TypeModal.INFO]: {
      header: (
        <>
          type <img src={closeIcon} className={styles.close} onClick={onClose} alt={ALT.CLOSE} />
        </>
      ),
      content: (
        <>
          <img src={infoIcon} className={styles.contentIcon} alt={ALT.INFO} /> <p> {message} </p>{' '}
        </>
      ),
      footer: <button onClick={onClose}> {Button.OK} </button>,
    },
  };

  return (
    <>
      <Modal {...Props[type]} />
    </>
  );
};

export default MappingModal;
