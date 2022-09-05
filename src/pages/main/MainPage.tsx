import React, { FC, useState, useEffect, useCallback, useRef } from 'react';
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
import { TypeModal, configModal_Props } from '@interfaces/interfaceModalProps';

const MainPage: FC = () => {
  const [records, setRecords] = useState<Record_Props[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useNavigate();
  const [configModal, setConfigModal] = useState({} as configModal_Props);
  // const isMounted = useRef(null);
  const abortControllerRef = useRef(null);
  const role = localStorage.getItem('roles');
  /*   useEffect(() => {
        isMounted.current = true;
        loadingData();
        return () => {
            isMounted.current = false;
            setIsLoading(false);
        };
    }, []);

    const loadingData = useCallback(()=> {
        setIsLoading(true);
        httpService
            .getRecords()
            .then((res: Record_Props[]) => {
                if(isMounted.current){
                    setRecords(res);
                } else {
                    throw new Error ('AbortError');
                }
            })
            .catch((error) => {
                if (error.message !== "AbortError") {
                    setRecords([]);
                    setConfigModal({type: TypeModal.ERROR, visible: true, data: {message: error.message}});
                }
            })
            .finally(() => {
                if (isMounted.current){
                    setIsLoading(false);
                }
            });
    },[isMounted.current]);*/

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    loadingData();
    return () => {
      abortControllerRef.current.abort();
      setIsLoading(false);
    };
  }, []);

  const loadingData = useCallback(() => {
    setIsLoading(true);
    const signal: AbortSignal = abortControllerRef.current.signal;
    httpService
      .getRecords(signal)
      .then((res: Record_Props[]) => {
        setRecords(res);
      })
      .catch((error) => {
        if (error.message !== 'canceled') {
          setRecords([]);
          setConfigModal({ type: TypeModal.ERROR, visible: true, data: { message: error.message } });
        }
      })
      .finally(() => {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      });
  }, [abortControllerRef.current?.signal.aborted]);

  const addRecord = useCallback(async (record: Record_Props) => {
    const result = await request(ACTION.ADD_RECORD, record);
    if (result === HttpStatusCode.CREATED) {
      loadingData();
    }
  }, []);

  const removeRecord = async (recordID: number) => {
    const result = await request(ACTION.REMOVE_RECORD, recordID);
    if (result === HttpStatusCode.OK) {
      loadingData();
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
      }
    } catch (error) {
      setConfigModal({ type: TypeModal.ERROR, visible: true, data: { message: error.message } });
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    setConfigModal({ type: null, visible: false, data: { message: null } });
  };

  return (
    <div data-testid="mainPage">
      <Header handleClickAdd={addRecord} />
      {!isLoading ? (
        <div data-testid="data-content" className={styles.wrapperContent}>
          {!records.length ? (
            <p data-testid="emptyRecords" className={styles.textError}>
              Not records
            </p>
          ) : (
            <List
              title={'Current records:'}
              records={records}
              removeRecord={removeRecord}
              refreshRoute={refreshRoute}
              role={role}
            />
          )}
        </div>
      ) : (
        <p data-testid="data-load"> Loading... </p>
      )}
      <MappingModal onClose={onClose} configModal={configModal} />
    </div>
  );
};

export default MainPage;
