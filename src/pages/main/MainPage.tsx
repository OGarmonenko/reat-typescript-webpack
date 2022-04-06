import React, {FC, useState, useEffect} from 'react';
import {Record_Props} from '@interfaces/interfaceRecordProps';
import Header from '@components/common/header/Header';
import styles from './Content.module.css';
import List from '@components/toMainPage/List';
import {useNavigate} from 'react-router-dom';
import constants from '../../constants/constants';
import {httpService} from '../../api/httpService';
import {storeService} from '@store/storeService';
import {ACTION, HttpStatusCode} from '../../api/enums';

const MainPage: FC = () => {
    const [records, setRecords] = useState<Record_Props[]>([]);
    const [isLoading, setIsLoading] =useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [needRefresh, setNeedRefresh] = useState<boolean>(false);
    let history = useNavigate();

    useEffect( ()=> {
        (async function () {
            const result = await request(ACTION.GET_RECORDS);
            setRecords(result);
        })();
    },[needRefresh]);

    const addRecord = async (record: Record_Props) => {
        const result = await request(ACTION.ADD_RECORD, record)
        if (result === HttpStatusCode.OK) {
           setNeedRefresh(!needRefresh)
        }
    };

    const removeRecord = async (recordID: number) => {
        const result = await request(ACTION.REMOVE_RECORD, recordID)
        if (result === HttpStatusCode.OK) {
            setNeedRefresh(!needRefresh)
        }
    };

   const refreshRoute = (recordID: number) => {
       storeService.pushRecords(records);
       history(constants.ROUTES.CARD_PATH + `${recordID}`);
   };

   const request = async ( action: string, payload?: any) => {
        setIsLoading(true);
        let res: any = null;
        try {
            switch (action) {
                case (ACTION.GET_RECORDS) : {
                    res = await httpService.getRecords();
                    return res;
                }
                case (ACTION.ADD_RECORD) : {
                    res = await httpService.addRecord(payload);
                    return res;
                }
                case (ACTION.REMOVE_RECORD) : {
                    res = await httpService.removeRecord(payload);
                    return res;
                }
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

   if (error) {
       return <p> { error } </p>
   }
    return (
        <div>
           <Header handleClickAdd={ addRecord } />
            {!isLoading
                ? <div className={styles.wrapperContent}>
                    {!records.length
                        ? <p className={styles.textError}>Not records</p>
                        : <List title={"Current records:"} records={records} removeRecord={removeRecord}
                                refreshRoute={ refreshRoute }/>
                    }
                </div>
                : <p> Идет загрузка... </p>
            }
        </div>
    );
};

export default MainPage;