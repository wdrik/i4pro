import React from 'react';

import { Wrapper } from './styles';
import { Container } from './styles';

import Logo from '../../assets/images/logo_i4pro.png';

const Header = () => (
  <Wrapper>
    <Container>
      <img src={Logo} alt="Logo" className="logo" />
    </Container>
  </Wrapper>
);

export default Header;