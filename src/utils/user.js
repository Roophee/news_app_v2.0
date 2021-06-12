import { localStorageGetItem } from './localStorage';
import { LOGIN_STATUS } from '../constants/globals';

export const isUserLoggedIn = () => localStorageGetItem('login_status') === LOGIN_STATUS.IN;
