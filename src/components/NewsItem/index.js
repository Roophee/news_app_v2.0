import React from 'react';
import {
  authorHandler,
  checkNullOrContent,
  getDateLabel,
  getUrlForNewsImage,
  newsSourceHandler,
} from '../../data/dataHandlers';
import Link from '../Common/Link';
import { StyledNewsDateAuthor, StyledNewsItemWrapper } from './style';

export default function NewsItem({ item }) {
  return (
    <StyledNewsItemWrapper className="news__item" justifyContent="start" alignItems="flex-start">
      <img
        className="news__picture"
        src={getUrlForNewsImage(item.media, item.clean_url)}
        alt="News_photo"
      />
      <div className="news__content">
        <h2>
          <Link href={item.link} target="_blank">
            {item.title}
          </Link>
        </h2>
        <div>
          <StyledNewsDateAuthor className="news__date_authors" justifyContent="space-between">
            <div>
              <span>
                {getDateLabel(checkNullOrContent(item.published_date))}{' '}
                {new Date(checkNullOrContent(item.published_date)).toLocaleTimeString()}
              </span>
            </div>
            <div>
              <span>
                {authorHandler(item.author)}
                {newsSourceHandler(item.author, item.clean_url)}
              </span>
            </div>
          </StyledNewsDateAuthor>
          <div className="news__summary">
            {checkNullOrContent(item.summary)}
            {'...'}
          </div>
        </div>
      </div>
    </StyledNewsItemWrapper>
  );
}
