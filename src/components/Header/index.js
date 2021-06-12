import React from 'react';
import Logo from '../Logo';
import Flex from '../blank_elements/FlexContainer';
import { StyledHeader } from './style';
import HeaderNav from '../HeaderNav';

export default function Header() {
  return (
    <StyledHeader>
      <div />
      <Flex>
        <Logo />
      </Flex>
      <HeaderNav />
    </StyledHeader>
  );
}
