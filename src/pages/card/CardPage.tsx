import React, { FC, useState } from 'react';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import Navbar from '@components/common/navbar/Navbar';
import RecordItem from '@components/toCardPage/recordItem/RecordItem';
import { useParams } from 'react-router-dom';
import { storeService } from '@store/storeService';
import UserInfo from '@components/toCardPage/userInfo/UserInfo';
import MappingModal from '@components/custom/modal/MappingModal';
import styles from './CardPage.module.css';
import { configModal_Props, TypeModal } from '@interfaces/interfaceModalProps';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';
import CustomButton from '@components/custom/button/CustomButton';
import { httpService } from '@api/httpService';
import { HttpStatusCode } from '@enums';

const CardPage: FC = () => {
  const { recordID } = useParams<string>();
  const [selectedRecord, setSelectedRecord] = useState<Record_Props | null>(storeService.findRecord(Number(recordID)));
  const [configModal, setConfigModal] = useState({} as configModal_Props);
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setConfigModal({ type: null, visible: false });
  };

  const openModal = () => {
    setConfigModal({ type: TypeModal.INFO_USER, visible: true, data: { userInfo: selectedRecord.userInfo } });
  };

  const onCancel = () => {
    setConfigModal({ type: null, visible: false });
  };

  const onClickEdit = () => {
    openModal();
  };

  const request = async (data: Record_Props, recordID: number) => {
    setIsLoading(true);
    try {
      const res = await httpService.updateRecord({ data: data, id: recordID });
      return res;
    } catch (error) {
      setConfigModal({ type: TypeModal.ERROR, visible: true, data: { message: error.message } });
    } finally {
      setIsLoading(false);
    }
  };

  const onSave = async (newUserData: IUserInfo_Props) => {
    const dataCopy = Object.assign({}, selectedRecord);
    dataCopy.userInfo = newUserData;
    onClose();
    const result = await request(dataCopy, selectedRecord.id);
    if (result === HttpStatusCode.OK) {
      setSelectedRecord(dataCopy);
    }
  };

  if (isLoading) return <p data-testid="data-loading"> Loading...</p>;
  return (
    <div data-testid="cardPage">
      <Navbar />
      {!isLoading && (
        <div className={styles.wrapperCardPage}>
          <RecordItem selectedRecord={selectedRecord} />
          <div className={styles.personalCardDiv}>
            <div className={styles.subHeaderDiv}>
              <p className={styles.title}>Personal data</p>
              <CustomButton onClick={onClickEdit}>Edit</CustomButton>
            </div>
            <UserInfo edit={false} selectedUserInfo={selectedRecord?.userInfo} />
          </div>
        </div>
      )}
      <MappingModal onClose={onClose} onCancel={onCancel} configModal={configModal} onSave={onSave} />
    </div>
  );
};

export default CardPage;
