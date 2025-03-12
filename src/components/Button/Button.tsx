import { ButtonHTMLAttributes, ReactNode } from 'react';
import ButtonUI from './Button.styles.ts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return <ButtonUI {...props}>{children}</ButtonUI>;
}

export default Button;
