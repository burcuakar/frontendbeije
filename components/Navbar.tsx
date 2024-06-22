// import React from 'react';
// import styled from 'styled-components';

// const NavBar: React.FC = () => {
//     return (
//         <Nav>
//             <Logo>beije.</Logo>
//             <Menu>
//                 <MenuItem>Ürünler</MenuItem>
//                 <MenuItem>Biz Kimiz?</MenuItem>
//                 <MenuItem>Bağış Kültürü</MenuItem>
//                 <MenuItem>Regl Testi!</MenuItem>
//                 <MenuItem>Kendi Paketini Oluştur</MenuItem>
//             </Menu>
//             <Icons>
//                 <CartIcon>🛒</CartIcon>
//                 <UserIcon>👤</UserIcon>
//             </Icons>
//         </Nav>
//     );
// };


// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #f9f5f2;

//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//   }
// `;

// const Logo = styled.div`
//   font-size: 1.5em;
//   font-weight: bold;
//   color: #e57300;
// `;

// const Menu = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const MenuItem = styled.li`
//   margin: 0 15px;
//   cursor: pointer;
// `;

// const Icons = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CartIcon = styled.div`
//   margin-right: 10px;
//   cursor: pointer;
// `;

// const UserIcon = styled.div`
//   cursor: pointer;
// `;

// export default NavBar;


// components/NavBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Nav>
            <Logo>beije.</Logo>
            <Menu>
                <MenuItem
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    Ürünler
                    {isMenuOpen && <DropdownMenu />}
                </MenuItem>
                <MenuItem>Biz Kimiz?</MenuItem>
                <MenuItem>Bağış Kültürü</MenuItem>
                <MenuItem>Regl Testi!</MenuItem>
                <MenuItem>Kendi Paketini Oluştur</MenuItem>
            </Menu>
            <Icons>
                <CartIcon>🛒</CartIcon>
                <UserIcon>👤</UserIcon>
            </Icons>
        </Nav>
    );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f9f5f2;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #e57300;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  position: relative;
  margin: 0 15px;
  cursor: pointer;

  &:hover > div {
    display: flex;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const UserIcon = styled.div`
  cursor: pointer;
`;

export default NavBar;
