import moment from 'moment';

export function getDateRecord(date: number): string {
  return moment(date).format('DD/MM/YYYY - h:mm:ss');
}

export function formatedStrToDate(str: string): Date | null {
  if (!str) return new Date();
  return moment(str, 'DD/MM/YYYY').toDate();
}

export function formatedDatetoStr(date: Date): string {
  if (!date) return null;
  return date.toLocaleDateString('en-GB');
}
