import { Record_Props } from '@interfaces/interfaceRecordProps';
import { State } from '@interfaces/interfaceStore';

const initialState: State = {
  records: [],
};

export const storeService = {
  pushRecords: (payload: Record_Props[]): void => {
    initialState.records = payload;
  },
  findRecord: (payload: number, state = initialState) => {
    return state.records.find((r) => r.id === payload);
  },
};
