import {Record_Props} from 'Interfaces/interfaceRecordProps';
import {State, Service} from 'Interfaces/interfaceStore';

const initialState: State = {
    selectedRecord: {
        id: 0,
        item: '',
        date: 0,
    },
    records: [],
}

export const storeService: Service = {
    getRecord: () => initialState.selectedRecord,
    getRecords: () => initialState.records,
    addRecord: (payload: Record_Props, state = initialState) => {
        state.records.push(payload);
        return state.records;
        },
    removeRecord: (payload, state = initialState) => {
        state.records = state.records.filter(r => r.id !== payload.id);
        return state.records;
    },
    findRecord: (payload, state = initialState) => {
        state.selectedRecord = {...payload};
    },
}

