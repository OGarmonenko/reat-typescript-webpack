import moment from 'moment';

export default function getDateRecord(date: number): string {
    if (!date) return '-';
    return moment(date).format('DD/MM/YYYY - h:mm:ss');
};

