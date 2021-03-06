import React, { useState, FC } from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import CustomInput from '@components/custom/input/CustomInput';
import moment from 'moment';
import styles from './Header.module.css';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import { Button } from '@enums';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';
//import { useNavigate } from 'react-router-dom';
//import constants from "@constants";

interface Header_Props {
  handleClickAdd: (record: Record_Props) => void;
}

const Header: FC<Header_Props> = ({ handleClickAdd }) => {
  const [record, setRecord] = useState<string>('');
  // const history = useNavigate();

  const createRecord = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date: number = moment.now();
    const newRecord: Record_Props = {
      id: date,
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

  return (
    <form data-testid="data-header" className={styles.wrapperHeader}>
      <CustomInput type="text" placeholder={'Enter record...'} value={record} onChange={validateData} />
      <CustomButton disabled={!record.length} onClick={createRecord}>
        {Button.ADD}
      </CustomButton>
      {/*         <button type="button" onClick={()=> history(constants.ROUTES.CARD_PATH + `${1658231301837}`)}>STOPED</button> */}
    </form>
  );
};

export default React.memo(Header);
