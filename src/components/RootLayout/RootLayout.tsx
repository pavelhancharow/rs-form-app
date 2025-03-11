import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar.tsx';
import RootLayoutUI from './RootLayout.styles.ts';

function RootLayout() {
  return (
    <RootLayoutUI>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </RootLayoutUI>
  );
}

export default RootLayout;
