import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import NewsList from './NewsList';

const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function Main() {
  return (
    <StyledMain>
      <SearchForm />
      <NewsList />
    </StyledMain>
  );
}
