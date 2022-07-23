import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  min-height: 78px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blanchedalmond;
  width: 100%;
`;

function Footer() {
  return (
    <FooterStyled>
      <NavLink to='/about'>About</NavLink>
    </FooterStyled>
  );
}

export default Footer;
