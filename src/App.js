import React, { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import QueryStateProvider from './hoc/QueryStateProvider';
import { GlobalStyle } from './components/Common/GlobalStyles';
import { localStorageGetItem, localStorageSetItem } from './utils/localStorage';
import { LOGIN_STATUS } from './constants/globals';

function App() {
  useEffect(() => {
    if (!localStorageGetItem('login_status')) localStorageSetItem('login_status', LOGIN_STATUS.OUT);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <QueryStateProvider>
        <Main />
      </QueryStateProvider>
      <Footer />
    </div>
  );
}

export default App;
