import * as React from 'react';
import { ReactNode } from 'react';
import { useLayoutEffect, useState } from 'react';
import { History } from 'history';
import { Router } from 'react-router-dom';

export interface BrowserRouterProps {
  basename?: string;
  children?: ReactNode;
  history: History;
}
const HistoryRouter: React.FC<BrowserRouterProps> = ({ basename, children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
};

export default HistoryRouter;
