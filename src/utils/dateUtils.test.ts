import { getDateRecord, formatedStrToDate, formatedDatetoStr } from '@utils/dateUtils';
import moment from 'moment';

const mockDate = moment('14/06/2022', 'DD/MM/YYYY').toDate();

describe('Test getDateRecord utils', () => {
  test('formating number to date format', () => {
    expect(getDateRecord(1649248316946)).toEqual('06/04/2022 - 3:31:56');
    expect(getDateRecord(0)).toEqual('01/01/1970 - 3:00:00');
    expect(getDateRecord(-1)).toEqual('01/01/1970 - 2:59:59');
  });

  test('formating date to string', () => {
    expect(formatedDatetoStr(null)).toEqual(null);
    expect(formatedDatetoStr(mockDate)).toEqual('14/06/2022');
    expect(formatedDatetoStr(mockDate)).not.toEqual('15/06/2022');
  });

  test('formating string to date format', () => {
    expect(formatedStrToDate('14/06/2022')).toEqual(mockDate);
    jest.spyOn(global, 'Date').mockReturnValue(`${mockDate}`);
    expect(formatedStrToDate(null)).toEqual(new Date(mockDate));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
