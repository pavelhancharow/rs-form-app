import { InputHTMLAttributes } from 'react';
import TextFieldUI from './TextField.styles.ts';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function TextField({ label, ...props }: TextFieldProps) {
  return (
    <TextFieldUI>
      <input {...props} />
      <label htmlFor={props.id}>
        <span>{label}</span>
      </label>
    </TextFieldUI>
  );
}
