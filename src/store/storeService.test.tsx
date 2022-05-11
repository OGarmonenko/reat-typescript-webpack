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

  ///&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  test('push', () => {
    const mockData = [{ id: 1, item: 'test1', date: 1649248316946 }];
    storeService.pushRecords(mockData);
  });

  /*   test('rrr', () => {
          const push = jest.spyOn(storeService, 'pushRecords');
          push.mockReturnValue(mockState.records)
      })*/

  afterEach(() => {
    jest.clearAllMocks();
  });
});
