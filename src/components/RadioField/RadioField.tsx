import { InputHTMLAttributes } from 'react';
import RadioFieldUI from './RadioField.styles.ts';

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function RadioField({ label, ...props }: RadioFieldProps) {
  return (
    <RadioFieldUI htmlFor={props.id}>
      <input {...props} type="radio" />
      <span className="custom-radio-circle"></span>
      {label}
    </RadioFieldUI>
  );
}

export default RadioField;
