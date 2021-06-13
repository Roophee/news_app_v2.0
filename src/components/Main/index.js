import React from 'react';
import styled from 'styled-components';
import SearchForm from '../SearchForm';
import NewsList from '../NewsList';

const StyledMain = styled.main`
  width: 90%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

export default function Main() {
  return (
    <StyledMain>
      <SearchForm />
      <NewsList />
    </StyledMain>
  );
}
