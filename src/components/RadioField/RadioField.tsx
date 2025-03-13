import { InputHTMLAttributes, memo } from 'react';
import RadioFieldUI from './RadioField.styles.ts';

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function RadioField({ label, ...props }: RadioFieldProps) {
  return (
    <RadioFieldUI htmlFor={props.id}>
      <input {...props} type="radio" />
      <span />
      {label}
    </RadioFieldUI>
  );
}

export default memo(RadioField);
