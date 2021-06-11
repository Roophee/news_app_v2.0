import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import QueryStateProvider from './hoc/QueryStateProvider';

const GlobalStyle = createGlobalStyle`
:root {
  font-family: 'Cormorant Garamond', serif;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #EEEEEE;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;

function App() {
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
