import moment from 'moment';

function getDateRecord(date: number): string {
  return moment(date).format('DD/MM/YYYY - h:mm:ss');
}
export default getDateRecord;
