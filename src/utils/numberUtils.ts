function getNumberRecord(record: string): string {
  if (!record) return '-';
  return record.replace(/[^0-9]/g, '');
}
export default getNumberRecord;
