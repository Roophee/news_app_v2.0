import React, {useContext} from 'react';
import Link from '../Common/Link';
import { StyledHeaderNav } from './style';
import UserDataItem from '../UserDataItem';
import {QueryParamsContext} from "../../hoc/QueryStateProvider";

const hoverColor = '#c62828';


export default function HeaderNav(props) {
  const {setAboutPage, setContactsPage, setNewsInStorage} = useContext(QueryParamsContext);
  return (
    <StyledHeaderNav>
      <ul>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={e => {
              e.preventDefault();
                setNewsInStorage(null)
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
