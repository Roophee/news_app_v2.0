import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: 'Cormorant Garamond', serif;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
}

* {
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
