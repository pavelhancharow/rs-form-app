import styled from 'styled-components';

const NavbarUI = styled.nav`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: var(--primary);
  overflow: hidden;
  box-shadow: 0 3px 4px 0 rgb(from var(--secondary) r g b / 54%);

  & ul {
    display: flex;

    & li {
      padding: 1.125rem;
      border-left: 1px solid var(--tertiary);
    }
  }

  & > a {
    padding: 1.125rem;
  }

  & a {
    &:hover {
      color: var(--accent-primary);
    }
  }
`;

export default NavbarUI;
