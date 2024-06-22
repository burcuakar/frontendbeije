// // components/DropdownMenu.tsx
// import React from 'react';
// import styled from 'styled-components';

// const DropdownMenu: React.FC = () => {
//     return (
//         <MenuContainer>
//             <MenuItem href="#">beije Ped</MenuItem>
//             <MenuItem href="#">beije Günlük Ped</MenuItem>
//             <MenuItem href="#">beije Tampon</MenuItem>
//             <MenuItem href="#">beije Kap</MenuItem>
//             <MenuItem href="#">Isı Bandı</MenuItem>
//         </MenuContainer>
//     );
// };

// const MenuContainer = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #fff;
//   border: 1px solid #e0e0e0;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   z-index: 10;
//   display: none;
//   flex-direction: column;
//   width: 200px;
// `;

// const MenuItem = styled.a`
//   padding: 10px 20px;
//   color: #000;
//   text-decoration: none;
//   font-size: 0.9em;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// export default DropdownMenu;

import React from 'react';
import styled from 'styled-components';

const DropdownMenu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem href="#">beije Ped</MenuItem>
      <MenuItem href="#">beije Günlük Ped</MenuItem>
      <MenuItem href="#">beije Tampon</MenuItem>
      <MenuItem href="#">beije Kap</MenuItem>
      <MenuItem href="#">Isı Bandı</MenuItem>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MenuItem = styled.a`
  padding: 10px 20px;
  color: #000;
  text-decoration: none;
  font-size: 0.9em;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
    text-align: center;
  }
`;

export default DropdownMenu;
