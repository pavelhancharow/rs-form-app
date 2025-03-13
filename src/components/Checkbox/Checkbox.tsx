import { InputHTMLAttributes, memo } from 'react';
import CheckboxUI from './Checkbox.styles.ts';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Checkbox({ label, error, ...props }: CheckboxProps) {
  return (
    <CheckboxUI htmlFor={props.id} data-error={!!error}>
      <div>
        <input {...props} type="checkbox" />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <p>{label}</p>
    </CheckboxUI>
  );
}

export default memo(Checkbox);
