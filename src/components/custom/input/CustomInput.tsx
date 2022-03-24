import React, {FC} from 'react';
import styles from './CustomInput.module.css';

interface CustomInput_Props {
  placeholder: string;
  type:any;
  value:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}

const CustomInput: FC <CustomInput_Props>= ({value, onChange, ...rest}) => {
  return (
    <input className={ styles.CInput }
           {...rest}
           onChange={onChange}
           value={value}
    />
  );
};

export default CustomInput;