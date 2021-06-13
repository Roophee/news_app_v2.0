import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import QueryStateProvider from '../../hoc/QueryStateProvider';
import { GlobalStyle } from '../Common/GlobalStyles';
import { localStorageGetItem, localStorageSetItem } from '../../utils/localStorage';
import { LOGIN_STATUS } from '../../constants/globals';

function App() {
  const [aboutPage, setAboutPage] = useState(false);
  const [contactsPage, setContactsPage] = useState(false);
  const pagesHandlers = { setAboutPage, setContactsPage };

  useEffect(() => {
    if (!localStorageGetItem('login_status')) localStorageSetItem('login_status', LOGIN_STATUS.OUT);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <QueryStateProvider>
        <Header />
        <Main />
      </QueryStateProvider>
      <Footer />
    </div>
  );
}

export default App;
