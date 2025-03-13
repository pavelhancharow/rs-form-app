import { NavLink } from 'react-router';
import styled from 'styled-components';

const CustomNavLinkUI = styled(NavLink)`
  &.active {
    color: var(--accent-primary);
  }
`;

export default CustomNavLinkUI;
