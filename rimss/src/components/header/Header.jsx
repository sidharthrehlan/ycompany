import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

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
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate('/cart');
  };

  return (
    <HeaderWithStyle>
      <Logo className='logo'>
        <Link to='/'>YCompany</Link>
      </Logo>

      <MiniCart className='mincart'>
        <IconButton onClick={clickHandler}>
          <Badge badgeContent={totalQuantity} color='primary'>
            <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
        </IconButton>
      </MiniCart>
    </HeaderWithStyle>
  );
}

export default Header;
