import React, { FC, useState } from 'react';
import { Record_Props } from '@interfaces/interfaceRecordProps';
import Navbar from '@components/common/navbar/Navbar';
import CardItem from '@components/toCardPage/CardItem';
import { useParams } from 'react-router-dom';
import { storeService } from '@store/storeService';

const CardPage: FC = () => {
  const { recordID } = useParams<string>();
  const [selectedRecord] = useState<Record_Props | null>(
    storeService.findRecord(Number(recordID))
  );
  return (
    <div>
      <Navbar />
      <CardItem selectedRecord={selectedRecord} />
    </div>
  );
};

export default CardPage;
