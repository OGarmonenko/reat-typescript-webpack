import React, { FC, useEffect, useState } from 'react';
import styles from '@components/toCardPage/CardItem.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';
import UserInfoItem from '@components/toCardPage/UserInfoItem';
import { Button } from '@enums';
import CustomButton from '@components/custom/button/CustomButton';
import constants from '@constants';

interface CardUserInfo_Props {
  selectedUserInfo?: IUserInfo_Props | null;
  edit?: boolean;
  clickSave?: (personalData: IUserInfo_Props) => void;
  clickCancel?: () => void;
}

const CardUserInfo: FC<CardUserInfo_Props> = ({ edit, clickSave, clickCancel, selectedUserInfo }) => {
  const [newPersonalData, setNewPersonalData] = useState(selectedUserInfo);

  useEffect(() => {
    setNewPersonalData(selectedUserInfo);
  }, [selectedUserInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPersonalData({ ...newPersonalData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (item: Date) => {
    setNewPersonalData({ ...newPersonalData, birthday: item.toLocaleDateString('en-GB') });
  };

  const handleClickSave = () => {
    clickSave(newPersonalData);
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const getItem = (item: any) => {
    if (!newPersonalData[item as keyof IUserInfo_Props]) return edit ? '' : '-';
    return newPersonalData[item as keyof IUserInfo_Props];
  };

  return (
    <div>
      <form className={styles.wrapperCard}>
        {constants.USER_ITEM_ARRAY.map((item: string, index: number) => (
          <UserInfoItem
            key={index}
            edit={edit}
            userData={getItem(item)}
            item={item}
            handleChange={handleChange}
            type={item}
            handleDateChange={handleDateChange}
          />
        ))}
      </form>

      {edit && (
        <div className={styles.buttonsWrapper}>
          <CustomButton onClick={handleClickSave}>{Button.SAVE}</CustomButton>
          <CustomButton onClick={clickCancel}>{Button.CANCEL}</CustomButton>
        </div>
      )}
    </div>
  );
};

export default CardUserInfo;
