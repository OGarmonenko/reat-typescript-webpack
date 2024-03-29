import React, { FC } from 'react';
import styles from './List.module.css';
import ListItem from '@components/toMainPage/ListItem';
import { Record_Props } from '@interfaces/interfaceRecordProps';

interface List_Props {
  title: string;
  records: Record_Props[];
  removeRecord: (recordID: string | number) => void;
  refreshRoute: (recordID: number) => void;
  role: string;
}

const List: FC<List_Props> = ({ title, records, removeRecord, refreshRoute, role }) => {
  return (
    <div data-testid="data-list" className={styles.wrapperList}>
      <span className={styles.titleList}>{title}</span>
      <div className={styles.wrapperListItem}>
        <ol data-testid="records" className={styles.list}>
          {records.map((record) => (
            <ListItem
              record={record}
              key={record.id}
              onRemove={removeRecord}
              onClickRecord={refreshRoute}
              role={role}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default List;
