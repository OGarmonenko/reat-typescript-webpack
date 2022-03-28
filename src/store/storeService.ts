import {Record_Props} from '@interfaces/interfaceRecordProps';
import {State, RecordService} from '@interfaces/interfaceStore';

const initialState: State = {
    records: [],
}

export const storeService: RecordService = {
    getRecords: () => initialState.records,
    addRecord: (payload: Record_Props, state = initialState) => {
        state.records.push(payload);
        return state.records;
        },
    removeRecord: (payload, state = initialState) => {
        state.records = state.records.filter(r => r.id !== payload);
        return state.records;
    },
    findRecord: (payload, state = initialState) => {
        return state.records.find(r => r.id === payload);
    },
}

