import React from 'react';
import styled from 'styled-components';
import Flex from '../blank_elements/FlexContainer';
import HeaderNav from './HeaderNav'

const StyledUsersInitials = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  background: brown;
  margin-right: 20px;
  visibility: ${props => props.visibility || 'hidden'};
`;

const StyledButton = styled.button.attrs(props => ({
    type: 'button',
}))`
  padding: 5px 15px;
  font-size: .7rem;
  font-weight: 500;
`;

export default function Account() {
    return (
        <Flex>
            {/*<StyledUsersInitials/>*/}
            <HeaderNav/>
            {/*<StyledButton>*/}
            {/*    Login*/}
            {/*</StyledButton>*/}
        </Flex>
    )
}
