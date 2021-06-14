import React, { useState } from 'react';
import { getUrlForNewsImage } from '../../data/dataHandlers';
import NoImage from '../../images/noImage.png';

const NewsImagePlaceholder = props => {
  const { media, clean_url } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(true);

  const onLoadHandler = () => {
    setIsLoading(false);
  };

  const onErrorHandler = e => {
    if (imageLoadError) {
      e.target.src = 0;
      setImageLoadError(false);
    }
  };
  return (
    <>
      {isLoading && NoImage}
      <img
        className="news__picture"
        alt="News_photo"
        src={getUrlForNewsImage(media, clean_url)}
        onError={onErrorHandler}
        onLoad={onLoadHandler}
      />
    </>
  );
};

export default NewsImagePlaceholder;
