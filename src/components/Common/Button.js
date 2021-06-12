import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  background-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
