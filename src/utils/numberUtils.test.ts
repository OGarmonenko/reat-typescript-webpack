import getNumberRecord from '@utils/numberUtils';

describe('Test getNumberRecord utils', () => {
  test('testing number result', () => {
    expect(getNumberRecord('r10r')).toEqual('10');
    expect(getNumberRecord('0')).toEqual('0');
    expect(getNumberRecord('r')).toEqual('');
    expect(getNumberRecord('1')).toEqual('1');
    expect(getNumberRecord(null)).toEqual('-');
  });
});
