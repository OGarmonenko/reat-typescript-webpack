import React, { FC, useState } from 'react';
import { USER_REGISTRATION } from '@constants';
import { IUser_Reg } from '@interfaces/IUser_Reg';
import styles from '@components/toAuthPage/AuthForm.module.css';
import { Button } from '@enums';
import AuthRow from '@components/toAuthPage/AuthRow';
import CustomButton from '@components/custom/button/CustomButton';
import validateAuthDataService from '@services/validateAuthDataService';
import { IUser_Auth } from '@interfaces/IUser_Auth';

interface RegistrationForm_Props {
  handleClickReg: (user: IUser_Reg) => void;
}

const RegistrationForm: FC<RegistrationForm_Props> = ({ handleClickReg }) => {
  const [user, setUserReg] = useState({ login: '', email: '', password: '' } as IUser_Reg);
  const [objNotValidate, setObjNotValidate] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserReg({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const getItem = (item: string) => {
    return user[item as keyof IUser_Reg];
  };

  const handleClick = () => {
    const objError: { [key: string]: string } = {};
    Object.keys(user).forEach(
      (item) => (objError[item] = validateAuthDataService[item]?.(user[item as keyof IUser_Auth])),
    );
    Object.values(objError).filter((value) => value !== undefined).length
      ? setObjNotValidate(objError)
      : handleClickReg(user);
  };

  return (
    <>
      <div className={styles.wrapperRowsBlock}>
        {Object.keys(user).map((item: string, index) => (
          <AuthRow
            item={item}
            key={index}
            value={getItem(item)}
            handleChange={handleChange}
            label={USER_REGISTRATION[item]}
            objNotValidate={objNotValidate}
          />
        ))}
      </div>
      <CustomButton onClick={handleClick}>{Button.SignUp}</CustomButton>
    </>
  );
};
export default RegistrationForm;
