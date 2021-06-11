import React from 'react';
import { StyledNewsSortPanel } from './styles';
import OptionsGroup from '../../hoc/OptionsGroup';
import { getSortFunction, normalizeNews } from '../../data/dataHandlers';
import { QueryParamsContext } from '../../hoc/QueryStateProvider';

export default function Moon() {
  return 'Moon';
}

export const NewsSortPanel = props => {
  const keys = ['date', 'rate', 'match'];
  const values = ['decrease', 'increase'];
  const [sortType, setSortType] = React.useState({ key: 'date', value: 'decrease' });
  const [sortWasChanged, setSortWasChanged] = React.useState(false);
  const { setNewsInStorage, newsStorage } = React.useContext(QueryParamsContext);

  window.news = newsStorage;

  const applySetSortType = (type, value) => {
    // setSortType(prev => ({ key: sortType, value }))
    newsStorage.sort(getSortFunction({ key: type, value }));
    setNewsInStorage(newsStorage);
    setSortWasChanged(prev => !prev);
  };

  // React.useEffect(() => {
  //
  // }, [sortType])

  return (
    <>
      <StyledNewsSortPanel>
        <label htmlFor="date" />
        <select
          name="date"
          id="date"
          onChange={({ target }) => applySetSortType(target.id, target.value)}>
          <OptionsGroup optionsType="sortByDateOptions" />
        </select>
        <label htmlFor="rate" />
        <select
          name="rate"
          id="rate"
          onChange={({ target }) => applySetSortType(target.id, target.value)}>
          <OptionsGroup optionsType="sortBySourseRate" />
        </select>
        <label htmlFor="match" />
        <select
          name="match"
          id="match"
          onChange={({ target }) => applySetSortType(target.id, target.value)}>
          <OptionsGroup optionsType="sortByMatch" />
        </select>
      </StyledNewsSortPanel>
    </>
  );
};
