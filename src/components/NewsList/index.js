import React, { useContext } from 'react';
import styled from 'styled-components';
import NewsItem from '../NewsItem';
import { getSortFunction, normalizeNews } from '../../data/dataHandlers';
import { QueryParamsContext, useNewsState } from '../../hoc/QueryStateProvider';
import { NewsSortPanel } from '../NewsSortPanel';
import { isUserLoggedIn } from '../../utils/user';
import { localStorageGetItem } from '../../utils/localStorage';

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
  const { setNewsInStorage, newsStorage } = useNewsState();
  const isLoggedInUser = isUserLoggedIn();
  const savedArticles = localStorageGetItem('saved_articles');

  const applySetSortType = (type, value) => {
    newsStorage.sort(getSortFunction({ key: type, value }));
    setNewsInStorage([...newsStorage]);
  };

  return (
    <StyledNewsList>
      {!newsStorage && <h3>Select filters and search for news</h3>}
      {newsStorage && <NewsSortPanel onclickHandler={applySetSortType} />}
      {newsStorage &&
        normalizeNews(newsStorage).map(item => <NewsItem item={item} key={item._id} />)}
    </StyledNewsList>
  );
}
