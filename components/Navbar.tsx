import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>beije.</Logo>
      <MenuIconContainer>
        <CartIcon>🛒</CartIcon>
        <UserIcon>👤</UserIcon>
        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuIcon>
      </MenuIconContainer>
      {isMenuOpen && (
        <Menu>
          <DropdownMenu />
        </Menu>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f9f5f2;
  position: relative;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #e57300;
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 20px;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  margin-left: 10px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f9f5f2;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const CartIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const UserIcon = styled.div`
  cursor: pointer;
`;

export default NavBar;
