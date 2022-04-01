import React, {FC, useState, useEffect} from 'react';
import {Record_Props} from '@interfaces/interfaceRecordProps';
import Header from '@components/common/header/Header';
import styles from './Content.module.css';
import List from '@components/toMainPage/List';
import {useNavigate} from 'react-router-dom';
import constants from '../../constants/constants';
import {httpService} from '../../api/httpService';
import {storeService} from '@store/storeService';

const MainPage: FC = () => {
    const [records, setRecords] = useState<Record_Props[]>([]);
    const [isLoading, setIsLoading] =useState<boolean>(true);
    const [error, setError] = useState<string>('');
    let history = useNavigate();

    useEffect( ()=> {
        (async function () {
            try{
                const result = await httpService.getRecords();
                setRecords(result);
            }
            catch (e) {
                setError(e.message);
            }
            finally {
                setIsLoading(false);
            }
        })();
    },[]);

    const addRecord = async (record: Record_Props) => {
        setIsLoading(true);
        try {
            const status = await  httpService.addRecord(record);
            if (status === 200) {
                setRecords([...records, record]);
            }
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    };

    const removeRecord = async (recordID: number) => {
        setIsLoading(true);
        try {
            const status= await httpService.removeRecord(recordID);
           // console.log(typeof status, 'fff')
            if (status === 200) {
                setRecords(records.filter(r => r.id !== recordID));
            }
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    };

   const refreshRoute = (recordID: number) => {
       storeService.pushRecords(records);
       history(constants.ROUTES.CARD_PATH + `${recordID}`);
   };


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