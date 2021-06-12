import React, { useContext } from 'react';
import styled from 'styled-components';
import NewsItem from '../NewsItem';
import { getSortFunction, normalizeNews } from '../../data/dataHandlers';
import { QueryParamsContext } from '../../hoc/QueryStateProvider';
import { NewsSortPanel } from '../NewsSortPanel';

const StyledNewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 10px auto 0;

  h3 {
    margin: 150px auto;
  }
`;

export default function NewsList() {
  const { setNewsInStorage, newsStorage } = useContext(QueryParamsContext);

  const applySetSortType = (type, value) => {
    newsStorage.sort(getSortFunction({ key: type, value }));
    setNewsInStorage(newsStorage);
  };

  return (
    <StyledNewsList>
      {newsStorage.length === 0 && <h3>Select filters and search for news</h3>}
      {newsStorage.length !== 0 && <NewsSortPanel onclickHandler={applySetSortType} />}
      {normalizeNews(newsStorage).map(item => (
        <NewsItem item={item} key={item._id} />
      ))}
    </StyledNewsList>
  );
}
