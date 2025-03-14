import { forwardRef, InputHTMLAttributes, memo } from 'react';
import { ErrorFieldText } from '../../styled-components';
import TextFieldUI from './TextField.styles.ts';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <TextFieldUI data-error={!!error}>
        <input ref={ref} {...props} />
        <label htmlFor={props.id}>
          <span>{label}</span>
        </label>

        {error && <ErrorFieldText>{error}</ErrorFieldText>}
      </TextFieldUI>
    );
  }
);

TextField.displayName = 'TextField';

export default memo(TextField);
