import {Record_Props} from '@interfaces/interfaceRecordProps';

export interface State {
    records: Record_Props[];
}

export interface RecordService {
    getRecords?: () => Record_Props[];
    addRecord?: (payload: Record_Props, state?: State) => void;
    removeRecord?: (payload: number, state?: State) => void;
    findRecord: (payload: number, state?: State) => Record_Props;
}