import React, { FC, useMemo } from 'react';
import styles from './RecordItem.module.css';
import getNumberRecord from '@utils/numberUtils';
import { getDateRecord } from '@utils/dateUtils';
import { Record_Props } from '@interfaces/interfaceRecordProps';

interface CardItem_Props {
  selectedRecord: Record_Props | null;
  onClick?: () => void;
}

const RecordItem: FC<CardItem_Props> = ({ selectedRecord }) => {
  const numbers = useMemo(() => getNumberRecord(selectedRecord?.item), [selectedRecord]);
  const date = useMemo(() => getDateRecord(selectedRecord?.date), [selectedRecord]);
  return (
    <>
      <div data-testid="data-carditem" className={styles.title}>
        Selected
      </div>
      <div className={styles.wrapperCard}>
        <div className={styles.cardRow}>
          <p className={styles.subTitle}> Record:</p>
          <span className={styles.dataRecord}> {selectedRecord?.item || '-'} </span>
        </div>
        <div className={styles.cardRow}>
          <p className={styles.subTitle}> Number: </p>
          <span className={styles.dataRecord}> {numbers} </span>
        </div>
        <div className={styles.cardRow}>
          <p className={styles.subTitle}> Date: </p>
          <span className={styles.dataRecord}> {date} </span>
        </div>
      </div>
    </>
  );
};

export default RecordItem;
