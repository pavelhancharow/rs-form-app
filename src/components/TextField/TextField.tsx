import { InputHTMLAttributes, memo } from 'react';
import TextFieldUI from './TextField.styles.ts';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function TextField({ label, error, ...props }: TextFieldProps) {
  return (
    <TextFieldUI data-error={!!error}>
      <input {...props} />
      <label htmlFor={props.id}>
        <span>{label}</span>
      </label>

      {error && <p>{error}</p>}
    </TextFieldUI>
  );
}

export default memo(TextField);
