import React from 'react';
import styled from 'styled-components';
import Flex from '../blank_elements/FlexContainer';
import Link from '../blank_elements/Link';

const hoverColor = "#c62828";

const StyledHeaderNav = styled.nav`
  font-weight: 600;
  font-size: .9rem;
  ul, li{
    display: inline;
    list-style: none;
  }
  li {
    margin-right: 15px;
  }
    color: #c62828;
`

export default function HeaderNav() {
    return (
        <StyledHeaderNav>
            <ul>
                <li>
                    <Link href="#" hoverColor={hoverColor}>About</Link>
                </li>
                <li>
                    <Link href="#" hoverColor={hoverColor}>Contacts</Link>
                </li>
                <li>
                    <Link href="#" hoverColor={hoverColor}>Login</Link>
                </li>
            </ul>
        </StyledHeaderNav>
    )
}
