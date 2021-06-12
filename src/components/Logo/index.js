import React from 'react';
import styled from 'styled-components';
import Link from '../Common/Link';

const LocalLink = styled(Link)`
  font-size: 2rem;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  color: #c62828;
`;

export default function Logo() {
  return (
    <LocalLink href="#">
      <span>The News App</span>
    </LocalLink>
  );
}
