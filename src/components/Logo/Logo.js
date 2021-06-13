import React from 'react';
import styled from 'styled-components';
import Link from '../Common/Link';

const LocalLink = styled(Link)`
  font-size: 1.6rem;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  color: #c62828;
  &:hover {
    font-size: 1.7rem;
  }

  @media (min-width: 800px) {
    font-size: 2rem;
    &:hover {
      font-size: 2.1rem;
    }
  }
`;

const hoverColor = '#c62828';

export default function Logo() {
  return (
    <LocalLink hoverColor={hoverColor} href="https://roophee.github.io/news_app_v2.0/">
      <span>The News App</span>
    </LocalLink>
  );
}
