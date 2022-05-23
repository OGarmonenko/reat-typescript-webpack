import React, { FC } from 'react';
import styles from './CustomInput.module.css';

interface CustomInput_Props {
  placeholder?: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  type: any;
  value: string | any;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInput_Props> = ({ value, onChange, name, ...rest }) => {
  return (
    <input
      data-testid="customInput"
      className={styles.CInput}
      {...rest}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default CustomInput;
