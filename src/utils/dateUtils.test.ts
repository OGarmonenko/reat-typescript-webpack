import getDateRecord from '@utils/dateUtils';

describe('Test getDateRecord utils', () => {
  test('testing date format', () => {
    expect(getDateRecord(1649248316946)).toEqual('06/04/2022 - 3:31:56');
    expect(getDateRecord(0)).toEqual('-');
  });
});
