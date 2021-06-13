import React, { useCallback } from 'react';
import {
  authorHandler,
  checkNullOrContent,
  getDateLabel,
  getUrlForNewsImage,
  newsSourceHandler,
} from '../../data/dataHandlers';
import Link from '../Common/Link';
import Flex from '../Common/FlexContainer';
import { StyledNewsDateAuthor, StyledNewsItemWrapper } from './style';
import { localStorageSetItem } from '../../utils/localStorage';
import { isUserLoggedIn } from '../../utils/user';

export default function NewsItem({ item }) {
  const isLoggedInUser = isUserLoggedIn();

  const saveArticle = useCallback(() => {
    localStorageSetItem('saved_articles', item);
  }, []);

  return (
    <StyledNewsItemWrapper className="news__item" justifyContent="start" alignItems="flex-start">
      <img
        className="news__picture"
        src={getUrlForNewsImage(item.media, item.clean_url)}
        alt="News_photo"
      />
      {isLoggedInUser && (
        <button className="news__bookmark" onClick={saveArticle}>
          <svg width="25" height="25" viewBox="0 0 25 25">
            <path
              d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div className="news__content">
        <h2>
          <Link href={item.link} target="_blank">
            {item.title}
          </Link>
        </h2>
        <div>
          <StyledNewsDateAuthor className="news__date_authors" justifyContent="space-between">
            <div>
              <Flex directionColumn alignItems="flex-start" justifyContent="start">
                <span>{getDateLabel(checkNullOrContent(item.published_date))}</span>
                <span>
                  {new Date(checkNullOrContent(item.published_date)).toLocaleTimeString()}
                </span>
              </Flex>
            </div>
            <Flex directionColumn alignSelf="flex-end">
              <span>{authorHandler(item.author)}</span>
              <span>{newsSourceHandler(item.author, item.clean_url)}</span>
            </Flex>
          </StyledNewsDateAuthor>
          <div className="news__summary">
            {checkNullOrContent(item.summary).length > 300
              ? checkNullOrContent(item.summary).slice(0, 300)
              : checkNullOrContent(item.summary)}
            {checkNullOrContent(item.summary) ? '...' : ''}
          </div>
        </div>
      </div>
    </StyledNewsItemWrapper>
  );
}
