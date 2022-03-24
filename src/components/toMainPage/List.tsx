import React, {FC} from 'react';
import styles from './List.module.css';
import ListItem from 'Components/toMainPage/ListItem';
import {Record_Props} from 'Interfaces/interfaceRecordProps';

interface List_Props {
    title: string;
    records: Record_Props[];
    removeRecord: (record: Record_Props) => void;
}

const List: FC <List_Props> = ({ title, records, removeRecord }) => {

    const onClickDelete = (record: Record_Props) => {
        removeRecord(record);
    };

  return (
    <div className={ styles.wrapperList }>
      <span className={ styles.titleList }>{ title }</span>
      <div className={ styles.wrapperListItem } >
        <ol className={ styles.list }>
          {records.map((record) =>
            <ListItem record={ record } key={ record.id } onRemove={ onClickDelete }  />
           )}
        </ol>
      </div>
    </div>
  );
};




export default List;