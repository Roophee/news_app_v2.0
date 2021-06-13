import React from 'react';
import Link from '../Common/Link';
import { StyledWelcomeScreen } from './style'

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
