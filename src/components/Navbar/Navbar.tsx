import CustomNavLink from '../CustomNavLink/CustomNavLink.tsx';
import NavbarUI from './Navbar.styles.ts';

function Navbar() {
  return (
    <NavbarUI>
      <CustomNavLink to="/forms" end>
        Home
      </CustomNavLink>
    </NavbarUI>
  );
}

export default Navbar;
