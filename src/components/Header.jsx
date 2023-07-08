import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { colors } from '../theme';

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
          />
        </a>
      </Logo>
      <Nav>
        <NavItem>
          <Link to="/">Calculator</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">What Is BMI?</Link>
        </NavItem>
        <NavItem>
          <Link to="/history">History</Link>
        </NavItem>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 75px;
  padding: 16px;
  border-bottom: 1px solid ${colors.codGray};
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const NavItem = styled.li`
  font-size: 18px;
  transition: 0.5s all ease;
  &:hover {
    opacity: 0.7;
  }
`;
