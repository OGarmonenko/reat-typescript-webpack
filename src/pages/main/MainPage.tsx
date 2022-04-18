import React, { FC, useState, useEffect } from 'react';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import Header from '@components/common/header/Header';
import styles from './Content.module.css';
import List from '@components/toMainPage/List';
import { useNavigate } from 'react-router-dom';
import constants from '@constants';
import { httpService } from '@api/httpService';
import { storeService } from '@store/storeService';
import { ACTION, HttpStatusCode } from '@enums';
import MappingModal from '@components/custom/modal/MappingModal';
import { TypeModal } from '@interfaces/interfaceModalProps';

const MainPage: FC = () => {
  const [records, setRecords] = useState<Record_Props[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [needRefresh, setNeedRefresh] = useState<boolean>(false);
  const history = useNavigate();
  const [type, setType] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    httpService
      .getRecords()
      .then((res: Record_Props[]) => {
        setRecords(res);
      })
      .catch((error) => {
        setError(error.message);
        setRecords([]);
        setType(TypeModal.ERROR);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [needRefresh]);

  const addRecord = async (record: Record_Props) => {
    const result = await request(ACTION.ADD_RECORD, record);
    if (result === HttpStatusCode.OK) {
      setNeedRefresh(!needRefresh);
    }
  };

  const removeRecord = async (recordID: number) => {
    const result = await request(ACTION.REMOVE_RECORD, recordID);
    if (result === HttpStatusCode.OK) {
      setNeedRefresh(!needRefresh);
    }
  };

  const refreshRoute = (recordID: number) => {
    storeService.pushRecords(records);
    history(constants.ROUTES.CARD_PATH + `${recordID}`);
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const request = async (action: string, payload?: any) => {
    setIsLoading(true);
    let res: any = null;
    try {
      switch (action) {
        case ACTION.ADD_RECORD:
          res = await httpService.addRecord(payload);
          return res;
        case ACTION.REMOVE_RECORD:
          res = await httpService.removeRecord(payload);
          return res;
        default:
          return res;
      }
    } catch (e) {
      setError(e.message);
      setType(TypeModal.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setError(null);
  };

  return (
    <div>
      <Header handleClickAdd={addRecord} />
      {!isLoading ? (
        <div className={styles.wrapperContent}>
          {!records?.length ? (
            <p className={styles.textError}>Not records</p>
          ) : (
            <List
              title={'Current records:'}
              records={records}
              removeRecord={removeRecord}
              refreshRoute={refreshRoute}
            />
          )}
        </div>
      ) : (
        <p> Loading... </p>
      )}
      {error && <MappingModal type={type} onClose={onClose} message={error} />}
    </div>
  );
};

export default MainPage;
