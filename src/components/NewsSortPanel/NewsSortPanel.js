import React from 'react';
import { StyledNewsSortPanel } from './styles';
import OptionsGroup from '../../hoc/OptionsGroup';
import Flex from '../Common/FlexContainer';

const NewsSortPanel = props => {
  const { onclickHandler } = props;
  return (
    <>
      <StyledNewsSortPanel>
        <Flex directionColumn alignItems="start">
          <label htmlFor="date">Sort by date:</label>
          <select
            name="date"
            id="date"
            onChange={({ target }) => onclickHandler(target.id, target.value)}>
            <OptionsGroup optionsType="sortByDateOptions" />
          </select>
        </Flex>
        <Flex directionColumn alignItems="start">
          <label htmlFor="rate">Sort by source:</label>
          <select
            name="rate"
            id="rate"
            onChange={({ target }) => onclickHandler(target.id, target.value)}>
            <OptionsGroup optionsType="sortBySourseRate" />
          </select>
        </Flex>
        <Flex directionColumn alignItems="start">
          <label htmlFor="match"> Sort by matching:</label>
          <select
            name="match"
            id="match"
            onChange={({ target }) => onclickHandler(target.id, target.value)}>
            <OptionsGroup optionsType="sortByMatch" />
          </select>
        </Flex>
      </StyledNewsSortPanel>
    </>
  );
};

export default NewsSortPanel;
