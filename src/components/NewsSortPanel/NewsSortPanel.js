import React, { useEffect, useState, useContext } from 'react';
import { StyledNewsSortPanel } from './styles';
import OptionsGroup from '../../hoc/OptionsGroup';

export default function Moon() {
  return 'Moon';
}

export const NewsSortPanel = props => {
  const { onclickHandler } = props;
  return (
    <>
      <StyledNewsSortPanel>
        <label htmlFor="date" />
        <select
          name="date"
          id="date"
          onChange={({ target }) => onclickHandler(target.id, target.value)}>
          <OptionsGroup optionsType="sortByDateOptions" />
        </select>
        <label htmlFor="rate" />
        <select
          name="rate"
          id="rate"
          onChange={({ target }) => onclickHandler(target.id, target.value)}>
          <OptionsGroup optionsType="sortBySourseRate" />
        </select>
        <label htmlFor="match" />
        <select
          name="match"
          id="match"
          onChange={({ target }) => onclickHandler(target.id, target.value)}>
          <OptionsGroup optionsType="sortByMatch" />
        </select>
      </StyledNewsSortPanel>
    </>
  );
};
