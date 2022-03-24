import moment from 'moment';

export default function getDateRecord(date: number): string {
    return moment(date).format('DD/MM/YYYY - h:mm:ss');
};

