import React, { useEffect, useState, useReducer, useContext } from 'react';
import { keywordSetterHandler, normalizeNews } from '../data/dataHandlers';
import { createQueryToApi, fetchingNews, initialQueryPropertyState } from '../data/APIHandlers';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_KEYWORD':
      return {
        ...state,
        q: keywordSetterHandler(payload),
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
    case 'RESET':
      return {
        ...initialQueryPropertyState,
      };
    default:
      return state;
  }
};

export const QueryParamsContext = React.createContext({
  setResetWasClicked: () => {},
  setSubmitWasClicked: () => {},
  setNewsInStorage: () => {},
  setContactsPage: () => {},
  setAboutPage: () => {},
  dispatch: () => {},
  contactsPage: null,
  aboutPage: null,
  queryState: null,
  newsStorage: null,
});

export const useNewsState = () => useContext(QueryParamsContext);

export default function QueryStateProvider(props) {
  const [newsStorage, setNewsInStorage] = useState(null);
  const [resetWasClicked, setResetWasClicked] = useState(false);
  const [submitWasClicked, setSubmitWasClicked] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [contactsPage, setContactsPage] = useState(false);
  const [queryState, dispatch] = useReducer(reducer, initialQueryPropertyState);

  useEffect(() => {
    if (submitWasClicked) {
      setNewsInStorage(null);
      fetchingNews(createQueryToApi(queryState)).then(news => {
        setNewsInStorage([...normalizeNews(news)]);
        setSubmitWasClicked(false);
      });
    }
  }, [submitWasClicked]);

  useEffect(() => {
    if (resetWasClicked) {
      setNewsInStorage(null);
      dispatch({ type: 'RESET' });
      setResetWasClicked(false);
    }
  }, [resetWasClicked]);

  useEffect(() => {
    if (aboutPage) {
      setAboutPage(false);
    }
  }, [submitWasClicked]);

  const formState = {
    setResetWasClicked,
    setSubmitWasClicked,
    setNewsInStorage,
    setAboutPage,
    setContactsPage,
    submitWasClicked,
    contactsPage,
    aboutPage,
    newsStorage,
    queryState,
    dispatch,
  };

  return (
    <QueryParamsContext.Provider value={formState}>{props.children}</QueryParamsContext.Provider>
  );
}
