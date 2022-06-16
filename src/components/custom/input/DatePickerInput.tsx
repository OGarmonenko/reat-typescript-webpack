import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { formatedStrToDate } from '@utils/dateUtils';

interface DatePicker_Props {
  handleDateChange?: (date: Date) => void;
  value?: string | null;
}

const DatePickerInput: FC<DatePicker_Props> = ({ handleDateChange, value }) => {
  const [bdayDate, setbdayDate] = useState<Date>(formatedStrToDate(value));

  const changeDate = (date: Date) => {
    setbdayDate(date);
    handleDateChange(date);
  };

  return (
    <div data-testid="datePickerInput">
      <DatePicker dateFormat="dd/MM/yyyy" selected={bdayDate} onChange={changeDate} placeholderText="dd/mm/yyyy" />
    </div>
  );
};

export default DatePickerInput;
