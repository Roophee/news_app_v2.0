import React, { useState } from 'react';

export const initialQueryPropertyState = {
  q: '*',
  topic: 'default',
  lang: 'default',
  country: 'default',
  page_size: 75,
  from: '',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_KEYWORD':
      return {
        ...state,
        q: payload,
      };
    case 'SET_TOPIC':
      return {
        ...state,
        topic: payload,
      };
    case 'SET_COUNTRY':
      return {
        ...state,
        country: payload,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        lang: payload,
      };
    case 'SET_FROM':
      return {
        ...state,
        from: payload,
      };
    case 'SET_PAGE_SIZE':
      return {
        ...state,
        page_size: payload,
      };
    default:
      return null;
  }
};

export function useHooks() {
  const [submitWasClicked, setSubmitWasClicked] = useState(false);
  const [newsStorage, setNewsInStorage] = useState([]);
  const [resetWasClicked, setResetWasClicked] = useState(false);

  return {
    submitWasClicked,
    setSubmitWasClicked,
    newsStorage,
    setResetWasClicked,
  };
}
