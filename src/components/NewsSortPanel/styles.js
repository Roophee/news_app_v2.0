import React from 'react';
import styled from 'styled-components';

export default function Sun() {
  return 'Sun';
}

export const StyledNewsSortPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  
  label{
    font-size: .65rem;
  }
  select {
    font-family: inherit;
  }
`;
