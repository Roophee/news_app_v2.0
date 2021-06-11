import React from 'react';
import styled from 'styled-components';
import Flex from './blank_elements/FlexContainer';
import Link from './blank_elements/Link';

const StyledWelcomeScreen = styled(Flex)`
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

export default function WelcomeScreen() {
  return (
    <StyledWelcomeScreen directionColumn al>
      <h1>Welcome to The News App.</h1>
      <p>
        This is a modular project of the frontend development course by{' '}
        <Link href="https://kottans.org">
          <strong>Kottans</strong>
        </Link>
        . Kottans is a community of programmers, the main slogan of which is: "Knowledge must be
        shared." I am sincerely grateful for this knowledge and opportunity to meet many interesting
        people with open heart.
      </p>
      <p>
        The app is written in React.js and used a free news api by
        <Link href="https://kottans.org">
          <strong>&#12296;/newscatcher&#12297;</strong>
        </Link>
        . Users have access to an arbitrary selection of news by topic and the ability to search for
        news with a variety of query settings.
      </p>
    </StyledWelcomeScreen>
  );
}
