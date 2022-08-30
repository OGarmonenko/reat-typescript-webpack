import React, { FC, useCallback, useState } from 'react';
import AuthForm from '@components/toAuthPage/AuthForm';
import { ACTION_AUTH, HttpStatusCode, TitlePage } from '@enums';
import Header from '@components/common/header/Header';
import { IUser_Auth } from '@interfaces/IUser_Auth';
import { authService } from '@api/authService';
import { useNavigate } from 'react-router-dom';
import constants from '@constants';
import RegistrationForm from '@components/toAuthPage/RegistrationForm';
import { IUser_Reg } from '@interfaces/IUser_Reg';
import styles from '@pages/auth/AuthPage.module.css';
import { AxiosResponse } from 'axios';

const AuthPage: FC = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthForm, setAuthForm] = useState(true);
  const [error, setError] = useState(null);

  const request = async (action: string, data: any) => {
    try {
      setIsLoading(true);
      let res: AxiosResponse = null;
      switch (action) {
        case ACTION_AUTH.LOGIN:
          res = await authService.login(data);
          break;
        case ACTION_AUTH.REGISTRATION:
          res = await authService.registration(data);
          break;
      }
      if (res.status === HttpStatusCode.CREATED) {
        setLocalStorageItem(res.data);
        refreshRoute();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const sendUserAuth = async (user: IUser_Auth) => {
    await request(ACTION_AUTH.LOGIN, user);
  };

  const sendRegistration = async (user: IUser_Reg) => {
    await request(ACTION_AUTH.REGISTRATION, user);
  };

  const setLocalStorageItem = (item: { token: string; user: { login: string; id: string; roles: string } }) => {
    localStorage.setItem('token', JSON.stringify(item.token));
    localStorage.setItem('login', item.user.login);
    localStorage.setItem('id', item.user.id);
    localStorage.setItem('roles', item.user.roles);
  };

  const refreshRoute = () => {
    history(constants.ROUTES.MAIN_PATH);
  };

  const setRegForm = useCallback(() => {
    setAuthForm(false);
  }, []);

  const getAuthForm = useCallback(() => {
    setAuthForm(true);
  }, []);

  if (isLoading) return <p data-testid="data-loading"> Loading...</p>;
  return (
    <>
      <Header
        authPage
        handleClickRegistration={setRegForm}
        handleClickAuthorization={getAuthForm}
        titlePage={isAuthForm ? TitlePage.Authorization : TitlePage.Registration}
      />
      <div className={styles.wrapperAuthPage}>
        {isAuthForm ? (
          <AuthForm handleClickAuth={sendUserAuth} errorMessage={error} />
        ) : (
          <RegistrationForm handleClickReg={sendRegistration} />
        )}
      </div>
    </>
  );
};
export default AuthPage;
