import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar.tsx';
import RootLayoutUI from './RootLayout.styles.ts';

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout(props: RootLayoutProps) {
  return (
    <RootLayoutUI>
      <header>
        <Navbar />
      </header>

      <main>{props.children}</main>
    </RootLayoutUI>
  );
}

export default RootLayout;
