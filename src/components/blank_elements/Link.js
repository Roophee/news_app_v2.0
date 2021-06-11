import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: ${props => props.hoverColor || 'black'};
  }
`;

export default function Link({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}
