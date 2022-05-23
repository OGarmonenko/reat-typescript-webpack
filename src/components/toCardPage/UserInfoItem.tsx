import React, { FC } from 'react';
import styles from '@components/toCardPage/UserInfoItem.module.css';
import DatePickerInput from '@components/common/DatePickerInput';
import PhoneInput from '@components/common/PhoneInput';

interface UserInfoItem_Props {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange?: (date: Date) => void;
  userData: any;
  type?: string;
  item?: string;
  edit?: boolean;
}

const UserInfoItem: FC<UserInfoItem_Props> = ({ edit, item, userData, handleChange, type, handleDateChange }) => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const getInput = (type: string): any => {
    switch (type) {
      case 'phone':
        return <PhoneInput onChange={handleChange} value={userData} item={item} />;
      case 'birthday':
        return <DatePickerInput handleDateChange={handleDateChange} value={userData} />;
      default:
        return <input onChange={handleChange} value={userData} name={item} />;
    }
  };
  return (
    <>
      <div className={styles.cardRowUser}>
        <label className={styles.subTitle}>{item[0].toUpperCase() + item.slice(1)}:</label>
        {edit && getInput(type)}
        {!edit && <span className={styles.dataRecord}>{userData}</span>}
      </div>
    </>
  );
};
export default UserInfoItem;
