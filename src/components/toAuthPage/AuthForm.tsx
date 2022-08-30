import React, { FC, useState } from 'react';
import { USER_AUTH } from '@constants';
import { IUser_Auth } from '@interfaces/IUser_Auth';
import styles from '@components/toAuthPage/AuthForm.module.css';
import CustomButton from '@components/custom/button/CustomButton';
import { Button } from '@enums';
import AuthRow from '@components/toAuthPage/AuthRow';
import validateAuthDataService from '@services/validateAuthDataService';

interface AuthForm_Props {
  handleClickAuth: (user: IUser_Auth) => void;
  errorMessage: string;
}

const AuthForm: FC<AuthForm_Props> = ({ handleClickAuth, errorMessage }) => {
  const [user, setUserAuth] = useState({ email: '', password: '' } as IUser_Auth);
  const [objNotValidate, setObjNotValidate] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAuth({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const getItem = (item: string) => {
    return user[item as keyof IUser_Auth];
  };

  const handleClick = () => {
    const objError: { [key: string]: string } = {};
    Object.keys(user).forEach(
      (item) => (objError[item] = validateAuthDataService[item]?.(user[item as keyof IUser_Auth])),
    );
    Object.values(objError).filter((value) => value !== undefined).length
      ? setObjNotValidate(objError)
      : handleClickAuth(user);
  };

  return (
    <>
      {errorMessage && <p className={styles.wrapperErr}>{errorMessage}</p>}
      <div className={styles.wrapperRowsBlock}>
        {Object.keys(user).map((item: string, index) => (
          <AuthRow
            item={item}
            key={index}
            value={getItem(item)}
            handleChange={handleChange}
            label={USER_AUTH[item]}
            objNotValidate={objNotValidate}
          />
        ))}
      </div>
      <CustomButton onClick={handleClick}>{Button.SignIn}</CustomButton>
    </>
  );
};
export default AuthForm;
