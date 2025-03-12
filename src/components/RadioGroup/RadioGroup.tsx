import { ReactNode } from 'react';
import RadioGroupUI from './RadioGroup.styles.ts';

interface RadioGroupProps {
  label: string;
  children: ReactNode;
}

function RadioGroup({ children, ...props }: RadioGroupProps) {
  return (
    <RadioGroupUI>
      <span>{props.label}</span>
      <div>{children}</div>
    </RadioGroupUI>
  );
}

export default RadioGroup;
