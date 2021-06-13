import styled from 'styled-components';
import Flex from '../Common/FlexContainer';

export const StyledWelcomeScreen = styled(Flex)`
  width: 100%;
  min-height: 50vh;
  border: 2px solid #000;
  padding: 5%;
  h1 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
    & strong {
      font-family: 'Ubuntu Mono', monospace;
      font-size: 1.3rem;
    }
  }
  p:first-letter {
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
