import React, {FC} from 'react';
import styles from './CustomButton.module.css';

interface CustomButton_Props {
  disabled?: boolean;
  children: React.ReactChild;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC <CustomButton_Props> = ({disabled, children, onClick}) => {

  return (
    <button className={ styles.CButton } disabled={disabled} onClick={onClick}>
      { children }
    </button>
  );
};
export default CustomButton;