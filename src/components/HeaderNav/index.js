import React from 'react';
import Link from '../Common/Link';
import { StyledHeaderNav } from './style';
import UserDataItem from '../UserDataItem';

const hoverColor = '#c62828';

export default function HeaderNav() {
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <Link href="#" hoverColor={hoverColor}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" hoverColor={hoverColor}>
            Contacts
          </Link>
        </li>
        <li>
          <UserDataItem />
        </li>
      </ul>
    </StyledHeaderNav>
  );
}
