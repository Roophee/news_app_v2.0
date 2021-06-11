import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Account from './Account';
import Flex from './blank_elements/FlexContainer';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-grow: 0;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #000;
  margin-bottom: 7px;
  .noShrink{
    min-width: 25%;
  }
`
const LocalFlex = styled(Flex)`
    width: 80%;
`

export default function Header() {
    return (
        <StyledHeader>
            <div className="noShrink">
            </div>
            <Flex>
            <Logo/>
            </Flex>
            <Account/>
        </StyledHeader>
    )
}
