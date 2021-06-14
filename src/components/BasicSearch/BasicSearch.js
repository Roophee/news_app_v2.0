import React from 'react';
import Link from '../Common/Link';
import { useNewsState } from '../../hoc/QueryStateProvider';
import { BasicSearchWrapper } from './style';

const hoverColor = '#c62828';

export default function BasicSearch() {
  const { queryState, dispatch, setSubmitWasClicked } = useNewsState();
  const { lang } = queryState;

  const onClickHandler = (event, paramValue) => {
    event.preventDefault();
    if (lang === 'default') {
      dispatch({ type: 'RESET' });
      dispatch({ type: 'SET_TOPIC', payload: paramValue });
    }
    if (lang !== 'default') {
      const saveLangBeforeReset = lang;
      dispatch({ type: 'RESET' });
      dispatch({ type: 'SET_LANGUAGE', payload: saveLangBeforeReset });
      dispatch({ type: 'SET_TOPIC', payload: paramValue });
    }
    setSubmitWasClicked(true);
  };

  return (
    <BasicSearchWrapper className="basicSearch" justifyContent="space-between" direction="column">
      <ul>
        <li>
          <Link href="#" hoverColor={hoverColor} onClick={event => onClickHandler(event, 'news')}>
            General
          </Link>
        </li>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={event => onClickHandler(event, 'economics')}>
            Economics
          </Link>
        </li>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={event => onClickHandler(event, 'politics')}>
            Politics
          </Link>
        </li>
        <li>
          <Link
            href="#"
            hoverColor={hoverColor}
            onClick={event => onClickHandler(event, 'entertainment')}>
            Entertainment
          </Link>
        </li>
        <li>
          <Link href="#" hoverColor={hoverColor} onClick={event => onClickHandler(event, 'world')}>
            World
          </Link>
        </li>
        <li>
          <Link href="#" hoverColor={hoverColor} onClick={event => onClickHandler(event, 'sport')}>
            Sport
          </Link>
        </li>
      </ul>
    </BasicSearchWrapper>
  );
}
