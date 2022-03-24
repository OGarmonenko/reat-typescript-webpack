export default function getNumberRecord(record: string) : string {
    return record.replace(/[^0-9]/g,"");
};

