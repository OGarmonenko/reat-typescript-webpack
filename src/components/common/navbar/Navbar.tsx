import React, { FC } from 'react';
import constants from '@constants';
import styles from './Navbar.module.css';
import arrowLeft from '@assets/icons/arrow.png';
import { useNavigate } from 'react-router-dom';
import { Button, ALT } from '@enums';

const Navbar: FC = () => {
  const history = useNavigate();

  return (
    <div data-testid="data-navbar" className={styles.wrapperNavbar}>
      <div role="button" className={styles.wrapperSubNav} onClick={() => history(constants.ROUTES.MAIN_PATH)}>
        <img src={arrowLeft} className={styles.arrow} alt={ALT.MAIN}></img>
        <div className={styles.itemNavbar}>{Button.MAIN}</div>
      </div>
    </div>
  );
};

export default Navbar;
