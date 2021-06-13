import React from 'react';
import styled from 'styled-components';
import Link from '../Common/Link';

const LocalLink = styled(Link)`
  font-size: 1.6rem;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  color: #c62828;
  
  
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

export default function Logo() {
  return (
    <LocalLink href="https://roophee.github.io/news_app_v2.0/">
      <span>The News App</span>
    </LocalLink>
  );
}
