import { memo, ReactNode } from 'react';
import { ErrorFieldText } from '../../styled-components';
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
      {error && <ErrorFieldText bottom={-22}>{error}</ErrorFieldText>}
    </RadioGroupUI>
  );
}

export default memo(RadioGroup);
