import React, { FC } from 'react';
import { IMaskInput } from 'react-imask';
import constants from '@constants';
interface PhoneInput_Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | null;
  item?: string;
}

const PhoneInput: FC<PhoneInput_Props> = ({ onChange, value, item }) => {
  return (
    <div data-testid="phoneInput">
      <IMaskInput
        mask={constants.MASKS.PHONE}
        value={value}
        onChange={onChange}
        placeholder="+375 (__) ___ __ __"
        name={item}
      />
    </div>
  );
};

export default PhoneInput;
