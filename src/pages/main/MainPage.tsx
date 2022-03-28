import React, {FC, useState, useEffect} from 'react';
import {Record_Props} from '@interfaces/interfaceRecordProps';
import Header from '@components/common/header/Header';
import {storeService} from '@store/storeService';
import styles from './Content.module.css';
import List from '@components/toMainPage/List';
import {useNavigate} from 'react-router-dom';
import constants from '../../constants/constants';

const MainPage: FC = () => {
    const [records, setRecords] = useState<Record_Props[]>([]);
    const [flag, setFlag] = useState<boolean>(false);
    let history = useNavigate();

    useEffect(()=> {
            const result: Record_Props[] = storeService.getRecords();
            setRecords(result);
            setFlag(!flag);
    },[]);

    const addRecord = (record: Record_Props) => {
            const result: Record_Props[] = storeService.addRecord(record);
            setRecords(result);
            setFlag(!flag);
    };

   const removeRecord = (recordID: number) => {
            const result: Record_Props[] = storeService.removeRecord(recordID);
            setRecords(result);
            setFlag(!flag);
    };

   const refreshRoute = (recordID: number) => {
           history(constants.ROUTES.CARD_PATH + `${recordID}`);
   };

    return (
        <div>
            <Header handleClickAdd={addRecord} />
              <div className={ styles.wrapperContent }>
                {!records.length
                    ? <p className={ styles.textError }>Not records</p>
                    : <List  title={ "Current records:" } records={records} removeRecord={removeRecord} refreshRoute={refreshRoute}/>
                }
            </div>
        </div>
    );
};

export default MainPage;