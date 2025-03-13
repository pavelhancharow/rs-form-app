import { InputHTMLAttributes, memo, ReactNode } from 'react';
import TextField from '../TextField/TextField.tsx';

interface SelectGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  children: ReactNode;
}

function SelectGroup({ children, ...props }: SelectGroupProps) {
  return (
    <div>
      <TextField {...props} />
      <datalist id={props.list}>{children}</datalist>
    </div>
  );
}

export default memo(SelectGroup);
