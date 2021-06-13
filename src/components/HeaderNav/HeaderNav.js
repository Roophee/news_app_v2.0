import React from 'react';
import Link from '../Common/Link';
import { StyledHeaderNav } from './style';
import UserDataItem from '../UserDataItem';
import { useNewsState } from '../../hoc/QueryStateProvider';

const hoverColor = '#c62828';

export default function HeaderNav() {
  const { setAboutPage, setContactsPage, setNewsInStorage } = useNewsState();
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={e => {
              e.preventDefault();
              setNewsInStorage(null);
              setAboutPage(true);
            }}>
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={e => {
              e.preventDefault();
              setContactsPage(true);
            }}>
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
