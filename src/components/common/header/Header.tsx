import React, { useState, FC } from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import CustomInput from '@components/custom/input/CustomInput';
import moment from 'moment';
import styles from './Header.module.css';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import { Button } from '@enums';

interface Header_Props {
  handleClickAdd: (record: Record_Props) => void;
}

const Header: FC<Header_Props> = ({ handleClickAdd }) => {
  const [record, setRecord] = useState<string>('');

  const createRecord = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const date: number = moment.now();
    const newRecord: Record_Props = {
      id: date,
      item: record,
      date: date,
    };
    handleClickAdd(newRecord);
    setRecord('');
  };

  const validateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecord(e.target.value.replace(/[а-яё]/gi, ''));
  };

  return (
    <form className={styles.wrapperHeader}>
      <CustomInput type={'text'} placeholder={'Enter record...'} value={record} onChange={validateData} />
      <CustomButton disabled={!record.length} onClick={createRecord}>
        {Button.ADD}
      </CustomButton>
    </form>
  );
};

export default Header;
