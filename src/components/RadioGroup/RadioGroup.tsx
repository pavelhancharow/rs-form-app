import { memo, ReactNode } from 'react';
import RadioGroupUI from './RadioGroup.styles.ts';

interface RadioGroupProps {
  label: string;
  error?: string;
  children: ReactNode;
}

function RadioGroup({ children, error, label }: RadioGroupProps) {
  return (
    <RadioGroupUI data-error={!!error}>
      <span>{label}</span>
      <div>{children}</div>
    </RadioGroupUI>
  );
}

export default memo(RadioGroup);
