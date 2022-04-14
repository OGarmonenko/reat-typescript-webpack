import moment from 'moment';

function getDateRecord(date: number): string {
  if (!date) return '-';
  return moment(date).format('DD/MM/YYYY - h:mm:ss');
}
export default getDateRecord;
