import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import Flex from '../Common/FlexContainer';
import { StyledHeader } from './style';
import HeaderNav from '../HeaderNav';
import ToUpButton from '../ToUpButton';

export default function Header() {
  const [headerPadding, setHeaderPadding] = useState(30);

  const headerPaddingOnScrollHandler = () => {
    if (window.pageYOffset > document.documentElement.clientHeight * 0.2) {
      setHeaderPadding(7);
    } else if (window.pageYOffset <= document.documentElement.clientHeight * 0.2) {
      setHeaderPadding(30);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', headerPaddingOnScrollHandler);
  },[]);

  return (
    <StyledHeader padding={headerPadding}>
      <div />
      <Flex>
        <Logo />
      </Flex>
      <HeaderNav />
      <ToUpButton />
    </StyledHeader>
  );
}
