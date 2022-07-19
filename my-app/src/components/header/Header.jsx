import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';

const HeaderWithStyle = styled.header`
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  color: purple;
  font-size: 45px;
  width: 90%;
  text-align: center;
`;

const MiniCart = styled.div`
  align-self: center;
`;

function Header() {
  return (
    <HeaderWithStyle>
      <Logo className='logo'>YCompany</Logo>

      <MiniCart className='mincart'>
        <IconButton>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
        </IconButton>
      </MiniCart>
    </HeaderWithStyle>
  );
}

export default Header;
