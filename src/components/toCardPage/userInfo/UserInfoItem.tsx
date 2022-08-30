import React, { FC } from 'react';
import styles from '@components/toCardPage/userInfo/UserInfoItem.module.css';
import DatePickerInput from '@components/custom/input/DatePickerInput';
import PhoneInput from '@components/custom/input/PhoneInput';

interface UserInfoItem_Props {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange?: (date: Date) => void;
  userData: string;
  type?: string;
  item?: string;
  edit?: boolean;
  label: string;
}

const UserInfoItem: FC<UserInfoItem_Props> = ({
  edit,
  item,
  userData,
  handleChange,
  type,
  handleDateChange,
  label,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const getInput = (type: string): any => {
    switch (type) {
      case 'phone':
        return <PhoneInput onChange={handleChange} value={userData} item={item} />;
      case 'birthday':
        return <DatePickerInput handleDateChange={handleDateChange} value={userData} />;
      default:
        return <input data-testid="inputItem" onChange={handleChange} value={userData} name={item} />;
    }
  };
  return (
    <>
      <div data-testid="data-cardRowUser" className={styles.cardRowUser}>
        <label data-testid="labelItem" className={styles.subTitle}>
          {label}
        </label>
        {edit && getInput(type)}
        {!edit && (
          <span data-testid="spanItem" className={styles.dataRecord}>
            {userData}
          </span>
        )}
      </div>
    </>
  );
};
export default UserInfoItem;
