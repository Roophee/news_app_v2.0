import React, { useState, useCallback } from 'react';
import { localStorageGetItem, localStorageSetItem } from '../../utils/localStorage';
import { LOGIN_STATUS } from '../../constants/globals';
import Link from '../blank_elements/Link';
import LoginModal from '../LoginModal';

const hoverColor = '#c62828';

export default function UserDataItem() {
  const [isUserLogIn, setIsUserLogIn] = useState(
    localStorageGetItem('login_status') === LOGIN_STATUS.IN
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnclickLogin = useCallback(() => setIsModalOpen(prev => !prev), []);

  const handleSubmit = useCallback(() => {
    setIsUserLogIn(true);
    localStorageSetItem('login_status', LOGIN_STATUS.IN);
  }, []);

  return (
    <>
      {!isUserLogIn && (
        <li>
          <Link href="#" hoverColor={hoverColor} onClick={handleOnclickLogin}>
            Login
          </Link>
          <LoginModal open={isModalOpen} onSumbit={handleSubmit} />
        </li>
      )}
      {isUserLogIn && (
        <li>
          <Link href="#" hoverColor={hoverColor} onClick={handleOnclickLogin}>
            Wishlist
          </Link>
        </li>
      )}
    </>
  );
}
