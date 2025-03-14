import { forwardRef, InputHTMLAttributes, memo, ReactNode } from 'react';
import TextField from '../TextField/TextField.tsx';

interface SelectGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  children: ReactNode;
}

const SelectGroup = forwardRef<HTMLInputElement, SelectGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <div>
        <TextField ref={ref} {...props} />
        <datalist id={props.list}>{children}</datalist>
      </div>
    );
  }
);

SelectGroup.displayName = 'SelectGroup';

export default memo(SelectGroup);
