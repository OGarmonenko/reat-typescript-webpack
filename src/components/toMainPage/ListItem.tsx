import React, { FC } from 'react';
import CustomButton from '@components/custom/button/CustomButton';
import styles from './ListItem.module.css';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import getNumberRecord from '@utils/numberUtils';
import { getDateRecord } from '@utils/dateUtils';
import { Button } from '@enums';

interface ListItem_Props {
  record: Record_Props;
  onRemove: (recordID: number) => void;
  onClickRecord: (recordID: number) => void;
}

const ListItem: FC<ListItem_Props> = ({ record, onRemove, onClickRecord }) => {
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onRemove(record.id);
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
          {getDateRecord(record.date)}
        </p>
        <CustomButton onClick={handleClickButton}>{Button.DELETE}</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;
