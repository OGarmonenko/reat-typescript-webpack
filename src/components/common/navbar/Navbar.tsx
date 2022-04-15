import React, { FC } from 'react';
import constants from '@constants';
import styles from './Navbar.module.css';
import arrowLeft from '@assets/icons/arrow.png';
import { useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
  const history = useNavigate();

  return (
    <div className={styles.wrapperNavbar}>
      <div className={styles.wrapperSubNav} onClick={() => history(constants.ROUTES.MAIN_PATH)}>
        <img src={arrowLeft} className={styles.arrow}></img>
        <div className={styles.itemNavbar}>Main</div>
      </div>
    </div>
  );
};

export default Navbar;
