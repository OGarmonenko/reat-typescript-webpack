import React, { FC } from 'react';
import CustomInput from '@components/custom/input/CustomInput';
import styles from '@components/toAuthPage/AuthForm.module.css';

interface AuthRow_Props {
  item: string;
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  objNotValidate?: { [key: string]: string };
}

const AuthRow: FC<AuthRow_Props> = ({ item, value, objNotValidate, handleChange, label }) => {
  return (
    <div className={styles.wrapperRowAuth}>
      <label>{label}</label>
      <CustomInput
        type="text"
        placeholder={`Enter ${item}...`}
        name={item}
        key={item}
        value={value}
        onChange={handleChange}
      />
      {objNotValidate[item] && <label className={styles.errorLabel}>{objNotValidate[item]}</label>}
    </div>
  );
};
export default AuthRow;
