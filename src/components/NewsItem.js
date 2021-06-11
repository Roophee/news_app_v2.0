import React from 'react';
import styled from 'styled-components';
import {
  authorHandler,
  checkNullOrContent,
  getDateLabel,
  getUrlForNewsImage,
  newsSourceHandler,
} from '../data/dataHandlers';
import Link from './blank_elements/Link';
import Flex from './blank_elements/FlexContainer';

const StyledNewsItemWrapper = styled(Flex)`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 2px solid #9e9e9e;
  font-weight: 300;
  font-size: 0.93rem;
  h2 {
    margin: 10px 0 20px 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .news {
    &__picture {
      width: 30%;
      margin: 10px 10px 20px 0;
      border: 2px solid #9e9e9e;
    }
    &__content {
      width: 70%;
      margin-bottom: 20px;
    }
    &__date_authors {
      margin: 0 0 10px 0;
      font-weight: 600;
    }
  }
`;

const StyledNewsDateAuthor = styled(Flex)`
  width: 100%;
`;

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
