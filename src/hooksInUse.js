import React, { useState, useEffect, useReducer } from 'react';
import { createQueryToApi, fetchingNews } from './data/APIHandlers';
import { defaultSearch } from './data/dataHandlers';

export const initialQueryPropertyState = {
  q: '*',
  topic: 'default',
  lang: 'default',
  country: 'default',
  page_size: 75,
  from: '',
};
//
export const reducer = (state, {type, payload}) => {
  switch (type){
    case  'SET_KEYWORD':
      return {
        ...state,
        q: defaultSearch(payload),
      }
    case 'SET_TOPIC':
      return {
        ...state,
        topic: payload,
      }
    case 'SET_COUNTRY':
      return {
        ...state,
        country: payload,
      }
    case 'SET_LANGUAGE':
      return {
        ...state,
        lang: payload,
      }
    case 'SET_FROM':
      return {
        ...state,
        from: payload,
      }
      case 'SET_PAGE_SIZE':
      return {
        ...state,
        page_size: payload,
      }
  }
};

export function useHooks ()  {
  const [submitWasClicked, setSubmitWasClicked] = useState(false);
  const [newsStorage, setNewsInStorage] = useState([]);
  const [resetWasClicked, setResetWasClicked] = useState(false);
  // const [queryProperties, setQueryProperties] = useState(initialQueryPropertyState);

  // window.state = queryProperties;

  // useEffect(() => {
  //   if (submitWasClicked) {
  //     fetchingNews(createQueryToApi(queryProperties)).then(news => {
  //       setNewsInStorage([...news]);
  //       setSubmitWasClicked(false);
  //     });
  //   }
  // }, [submitWasClicked]);
  //
  // useEffect(() => {
  //   if (resetWasClicked) {
  //     setNewsInStorage([]);
  //     setQueryProperties(initialQueryPropertyState);
  //     setResetWasClicked(false);
  //   }
  // }, [resetWasClicked]);

  return {
    submitWasClicked,
    setSubmitWasClicked,
    newsStorage,
    // queryProperties,
    // setQueryProperties,
    setResetWasClicked,
  };
};
