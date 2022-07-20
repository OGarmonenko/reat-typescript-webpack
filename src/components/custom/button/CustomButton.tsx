import React, { FC } from 'react';
import styles from './CustomButton.module.css';

interface CustomButton_Props {
  type?: string;
  disabled?: boolean;
  children: React.ReactChild;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<CustomButton_Props> = ({ disabled, children, onClick, type = 'CButton' }) => {
  return (
    <button data-testid="buttonElement" className={styles[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
