import { storeService } from '@store/storeService';

const mockState = {
  records: [
    { id: 1, item: 'test1', date: 1649248316946 },
    { id: 2, item: 'test2', date: 1649918819350 },
  ],
};

const mockID = 2;

describe('Test storeService', () => {
  test('filters state and returns desired record ', () => {
    expect(storeService.findRecord(mockID, mockState)).toEqual({ id: 2, item: 'test2', date: 1649918819350 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
