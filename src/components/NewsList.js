import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import Flex from './Common/FlexContainer';
import { getSortFunction, normalizeNews } from '../data/dataHandlers';
import { QueryParamsContext } from '../hoc/QueryStateProvider';
import WelcomeScreen from './WelcomeScreen';
import { NewsSortPanel } from './NewsSortPanel/NewsSortPanel';

const StyledNewsList = styled(Flex)`
  width: 90%;
  margin: 10px auto 0;
`;

export default function NewsList() {
  const { setNewsInStorage, newsStorage } = useContext(QueryParamsContext);

  const applySetSortType = (type, value) => {
    newsStorage.sort(getSortFunction({ key: type, value }));
    setNewsInStorage(newsStorage);
  };

  const startPage = <h3>Select filters and search for news</h3>;

  return (
    <StyledNewsList directionColumn alignItems="flex-start" justifyContent="flex-start">
      <NewsSortPanel onclickHandler={applySetSortType} />
      {normalizeNews(newsStorage).map(item => (
        <NewsItem item={item} key={item._id} />
      ))}
    </StyledNewsList>
  );
}
