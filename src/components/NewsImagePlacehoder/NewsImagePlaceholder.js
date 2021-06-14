import React, { useState } from 'react';
import styled from 'styled-components';
import { getUrlForNewsImage } from '../../data/dataHandlers';
import LoadingImage from '../../images/LoadingImage.png';

const StyledImagePlaceHolder = styled.img`
  display: ${props => (props.display ? 'block' : 'none')};
`;

const NewsImagePlaceholder = props => {
  const { media, clean_url } = props;
  const [downloadStatus, setDownloadStatus] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(true);

  const onLoadHandler = () => {
    setDownloadStatus(false);
  };

  const onErrorHandler = e => {
    if (imageLoadError) {
      e.target.src = `https://via.placeholder.com/450x250.png/F5F5F5/d32f2f?text=No Image`;
      setImageLoadError(false);
    }
  };

  return (
    <>
      <StyledImagePlaceHolder
        display={downloadStatus}
        src={LoadingImage}
        className="news__picture"
        alt="News_photo"
      />

      <StyledImagePlaceHolder
        display={!downloadStatus}
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
