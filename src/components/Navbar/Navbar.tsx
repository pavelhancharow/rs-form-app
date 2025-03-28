import CustomNavLink from '../CustomNavLink/CustomNavLink.tsx';
import NavbarUI from './Navbar.styles.ts';

function Navbar() {
  return (
    <NavbarUI>
      <CustomNavLink to="/" end>
        Home
      </CustomNavLink>
      <ul>
        <li>
          <CustomNavLink to="/uncontrolled-form">
            Uncontrolled Form
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/hook-form">Hook Form</CustomNavLink>
        </li>
      </ul>
    </NavbarUI>
  );
}

export default Navbar;
