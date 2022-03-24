import React, {FC} from 'react';
import CustomButton from 'Components/custom/button/CustomButton';
import styles from './ListItem.module.css';
import {Record_Props} from 'Interfaces/interfaceRecordProps';
import getNumberRecord from 'Utils/numberUtils';
import {useNavigate} from 'react-router-dom';
import constants from '../../constants/constants';
import getDateRecord from 'Utils/dateUtils';
import {storeService} from 'Store/storeService';

interface ListItem_Props {
    record: Record_Props;
    onRemove:(record: Record_Props) => void;
}

const ListItem: FC <ListItem_Props> = ({record, onRemove}) => {
    let history = useNavigate();

    const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onRemove(record);
    };

    const handleClickRow = (e : React.MouseEvent<HTMLDivElement>) => {
        if (!window.getSelection()?.toString()) {
            storeService.findRecord(record);
            history(constants.ROUTES.CARD_PATH+`${record.id}`);
        }
    };

  return (
    <li className={ styles.wrapperLi }>
      <div className={ styles.wrapperRecord } onClick={handleClickRow}>
        <p className={ styles.textRecord }>{ record.item }</p>
        <p className={ styles.numberRecord }>{ getNumberRecord(record.item) }</p>
        <p className={ styles.dateRecord }>{ getDateRecord(record.date) }</p>
        <CustomButton onClick={handleClickButton}>Delete</CustomButton>
      </div>
    </li>
  );
};

export default ListItem;