import {Record_Props} from './interfaceRecordProps';

export interface State {
    selectedRecord: Record_Props;
    records: Record_Props[];
}

export interface Service {
    getRecord: () => Record_Props;
    getRecords: () => Record_Props[];
    addRecord: (payload: Record_Props, state?: State) => Record_Props[];
    removeRecord: (payload: Record_Props, state?: State) => Record_Props[];
    findRecord: (payload: Record_Props, state?: State) => void;
}