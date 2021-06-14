import React from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm';
import NewsList from '../NewsList';

const StyledMain = styled.main`
  width: 90%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  margin-top: 105px;
`;

export default function Main() {
  return (
    <StyledMain>
      <SearchForm />
      <NewsList />
    </StyledMain>
  );
}
