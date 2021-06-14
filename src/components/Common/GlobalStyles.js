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
  background: #EEE;
  width: 100%;
  height: 100%;
  overflow: overlay;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;
