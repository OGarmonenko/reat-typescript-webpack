import React, { FC } from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import styles from './ListItem.module.css';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import getNumberRecord from '@utils/numberUtils';
import { Button, User_Roles } from '@enums';

interface ListItem_Props {
  record: Record_Props;
  onRemove: (recordID: string) => void;
  onClickRecord: (recordID: number) => void;
  role: string;
}

const ListItem: FC<ListItem_Props> = ({ record, onRemove, onClickRecord, role }) => {
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onRemove(record._id);
  };

  const handleClickRow = () => {
    if (!window.getSelection()?.toString()) {
      onClickRecord(record.id);
    }
  };

  return (
    <li className={styles.wrapperLi}>
      <div data-testid="data-row" className={styles.wrapperRecord} onClick={handleClickRow}>
        <p data-testid="item" className={styles.textRecord}>
          {record.item}
        </p>
        <p data-testid="numbers" className={styles.numberRecord}>
          {getNumberRecord(record.item)}
        </p>
        <p data-testid="date" className={styles.dateRecord}>
          {record.date}
        </p>
        {role === User_Roles.ADMIN && <CustomButton onClick={handleClickButton}>{Button.DELETE}</CustomButton>}
      </div>
    </li>
  );
};

export default ListItem;
