import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '@pages//main/MainPage';
import CardPage from '@pages/card/CardPage';
import constants from './constants/constants';

const App = ()=> {
    return (
        <BrowserRouter>
             <Routes>
                <Route path={constants.ROUTES.MAIN_PATH} element={ <MainPage/> } />
                <Route path={constants.ROUTES.CARD_PATH + ':recordID'} element={ <CardPage /> } />
             </Routes>
        </BrowserRouter>
    )
}

export default App;