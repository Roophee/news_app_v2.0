import React, { useContext, useEffect } from 'react';
import { StyledNewsList } from './style';
import NewsItem from '../NewsItem';
import WelcomeScreen from '../WelcomeScreen';
import { NewsSortPanel } from '../NewsSortPanel';
import { isUserLoggedIn } from '../../utils/user';
import { Preloader } from '../Preloader';
import { localStorageGetItem } from '../../utils/localStorage';
import { getSortFunction } from '../../data/dataHandlers';
import { QueryParamsContext, useNewsState } from '../../hoc/QueryStateProvider';

export default function NewsList() {
  const { aboutPage, contactsPage, setContactsPage, submitWasClicked } =
    useContext(QueryParamsContext);
  const { setNewsInStorage, newsStorage } = useNewsState();
  const isLoggedInUser = isUserLoggedIn();
  const savedArticles = localStorageGetItem('saved_articles');

  const applySetSortType = (type, value) => {
    const sortedNewsStorage = [...newsStorage.sort(getSortFunction({ key: type, value }))];
    setNewsInStorage(sortedNewsStorage);
  };

  return (
    <StyledNewsList>
      {aboutPage && <WelcomeScreen />}
      {submitWasClicked && <Preloader />}
      {!aboutPage && !submitWasClicked && !newsStorage && <h3>Select filters and search for news</h3>}
      {!aboutPage && newsStorage && <NewsSortPanel onclickHandler={applySetSortType} />}
      {!aboutPage &&
        newsStorage &&
        newsStorage.map(item => <NewsItem item={item} key={item._id} />)}
    </StyledNewsList>
  );
}
