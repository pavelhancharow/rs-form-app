import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router';
import CustomNavLinkUI from './CustomNavLink.styles.ts';

interface CustomNavLinkProps extends NavLinkProps {
  to: string;
  children: ReactNode;
}

function CustomNavLink({ children, to, ...props }: CustomNavLinkProps) {
  return (
    <CustomNavLinkUI to={to} {...props}>
      {children}
    </CustomNavLinkUI>
  );
}

export default CustomNavLink;
