import React, { FC, useEffect, useState } from 'react';
import styles from '@components/toCardPage/recordItem/RecordItem.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';
import UserInfoItem from '@components/toCardPage/userInfo/UserInfoItem';
import { Button } from '@enums';
import CustomButton from '@components/custom/button/CustomButton';
import constants, { LABEL_USER } from '@constants';
import { formatedDatetoStr } from '@utils/dateUtils';

export interface CardUserInfo_Props {
  selectedUserInfo?: IUserInfo_Props | null;
  edit?: boolean;
  clickSave?: (personalData: IUserInfo_Props) => void;
  clickCancel?: () => void;
}

const UserInfo: FC<CardUserInfo_Props> = ({ edit, clickSave, clickCancel, selectedUserInfo }) => {
  const [newPersonalData, setNewPersonalData] = useState(selectedUserInfo);

  useEffect(() => {
    setNewPersonalData(selectedUserInfo);
  }, [selectedUserInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPersonalData({ ...newPersonalData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (item: Date) => {
    setNewPersonalData({ ...newPersonalData, birthday: formatedDatetoStr(item) });
  };

  const handleClickSave = () => {
    clickSave(newPersonalData);
  };

  const getItem = (item: string | number | Date) => {
    if (!newPersonalData[item as keyof IUserInfo_Props]) return edit ? '' : '-';
    return newPersonalData[item as keyof IUserInfo_Props];
  };

  return (
    <div data-testid="data-userInfo" className={styles.wrapperUserInfo}>
      <div className={styles.wrapperCard}>
        {constants.USER_ITEM_ARRAY.map((item: string, index: number) => (
          <UserInfoItem
            key={index}
            edit={edit}
            userData={getItem(item)}
            item={item}
            handleChange={handleChange}
            type={item}
            handleDateChange={handleDateChange}
            label={LABEL_USER[item]}
          />
        ))}
      </div>
      {edit && (
        <div className={styles.buttonsWrapper}>
          <CustomButton typeButton="modalButton" onClick={handleClickSave}>
            {Button.SAVE}
          </CustomButton>
          <CustomButton typeButton="modalButton" onClick={clickCancel}>
            {Button.CANCEL}
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
