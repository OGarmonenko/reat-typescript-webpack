import React from 'react';
import ReactDOM from 'react-dom';
import HistoryRouter from '@history/HistoryRouter';
import { browserHistory } from '@history/history';
import App from '@app';

ReactDOM.render(
  <HistoryRouter history={browserHistory}>
    <App />
  </HistoryRouter>,
  document.getElementById('root'),
);
