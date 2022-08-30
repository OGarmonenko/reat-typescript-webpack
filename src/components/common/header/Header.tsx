import React, { useState, FC } from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import CustomInput from '@components/custom/input/CustomInput';
import moment from 'moment';
import styles from './Header.module.css';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import { Button } from '@enums';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';
import { useNavigate } from 'react-router-dom';
import constants from '@constants';
import { getDateRecord } from '@utils/dateUtils';

interface Header_Props {
  handleClickAdd?: (record: Record_Props) => void;
  authPage?: boolean;
  titlePage?: string;
  handleClickRegistration?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickAuthorization?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header: FC<Header_Props> = ({
  handleClickAdd,
  handleClickRegistration,
  handleClickAuthorization,
  authPage,
  titlePage,
}) => {
  const [record, setRecord] = useState<string>('');
  const history = useNavigate();

  const createRecord = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id: number = moment.now();
    const date = getDateRecord(id);
    const newRecord: Record_Props = {
      id: id,
      item: record,
      date: date,
      userInfo: {} as IUserInfo_Props,
    };
    handleClickAdd(newRecord);
    setRecord('');
  };

  const validateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecord(e.target.value.replace(/[а-яё]/gi, ''));
  };

  const handleClickSignOut = () => {
    localStorage.clear();
    history(constants.ROUTES.AUTH_PATH);
  };

  return (
    <div data-testid="data-header" className={styles.wrapperHeader}>
      {!authPage && (
        <>
          <div className={styles.wrapperForm}>
            <CustomInput type="text" placeholder={'Enter record...'} value={record} onChange={validateData} />
            <CustomButton disabled={!record.length} onClick={createRecord}>
              {Button.ADD}
            </CustomButton>
          </div>
          <div className={styles.wrapperButton}>
            <CustomButton onClick={handleClickSignOut}>
              {localStorage.getItem('token') ? Button.SignOut : Button.SignIn}
            </CustomButton>
          </div>
        </>
      )}
      {authPage && (
        <div className={styles.wrapperAuthHeader}>
          <button className={styles.buttonReg} onClick={handleClickAuthorization}>
            {Button.Authorization}
          </button>
          <p className={styles.titlePage}>{titlePage}</p>
          <button className={styles.buttonReg} onClick={handleClickRegistration}>
            {Button.Registration}
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Header);
