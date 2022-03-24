import React, {FC} from 'react';
import styles from './CardItem.module.css';
import getNumberRecord from 'Utils/numberUtils';
import getDateRecord from 'Utils/dateUtils';
import {Record_Props} from 'Interfaces/interfaceRecordProps';

interface CardItem_Props {
    selectedRecord: Record_Props;
}

const CardItem: FC <CardItem_Props> = ({selectedRecord}) => {

    return (
           <>
            <div className={styles.title}>Selected</div>
             <div className={ styles.wrapperCard }>
                <div className={ styles.cardRow }>
                   <p className={ styles.subTitle }> Record:</p>
                    <span className={ styles.dataRecord }> { selectedRecord.item } </span>
                </div>
             <div className={ styles.cardRow }>
                <p className={ styles.subTitle }> Number: </p>
                    <span className={ styles.dataRecord }> { getNumberRecord(selectedRecord.item) || 'no numbers' } </span>
                </div>
             <div className={ styles.cardRow }>
                <p className={ styles.subTitle}> Date: </p>
                    <span className={ styles.dataRecord }> { getDateRecord(selectedRecord.date) } </span>
             </div>
            </div>
       </>
    );
};

export default CardItem;