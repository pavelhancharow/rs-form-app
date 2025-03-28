import { forwardRef, InputHTMLAttributes, memo } from 'react';
import RadioFieldUI from './RadioField.styles.ts';

interface RadioFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioField = forwardRef<HTMLInputElement, RadioFieldProps>(
  ({ label, ...props }, ref) => {
    return (
      <RadioFieldUI htmlFor={props.id}>
        <input ref={ref} {...props} type="radio" />
        <span />
        {label}
      </RadioFieldUI>
    );
  }
);

RadioField.displayName = 'RadioField';

export default memo(RadioField);
