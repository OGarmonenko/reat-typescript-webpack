import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '@pages//main/MainPage';
import CardPage from '@pages/card/CardPage';
import AuthPage from '@pages/auth/AuthPage';
import constants from '@constants';

const App = () => {
  return (
    <Routes>
      <Route path={constants.ROUTES.MAIN_PATH} element={<MainPage />} />
      <Route path={constants.ROUTES.AUTH_PATH} element={<AuthPage />} />
      <Route path={constants.ROUTES.CARD_PATH + ':recordID'} element={<CardPage />} />
    </Routes>
  );
};

export default App;
