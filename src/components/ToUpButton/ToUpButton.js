import React, { useState, useEffect } from 'react';
import StyledToUpButton from './style';

const ToUpButton = () => {
  const [showToUp, setShowToUp] = useState(false);

  const getToShowButton = () => {
    if (!showToUp && window.pageYOffset > document.documentElement.clientHeight * 0.8) {
      setShowToUp(true);
    } else if (showToUp && window.pageYOffset <= document.documentElement.clientHeight * 0.8) {
      setShowToUp(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.addEventListener('scroll', getToShowButton);

  return (
    <StyledToUpButton className="toUpButton" visibility={showToUp} onClick={e => scrollTop()}>
      ToUp
    </StyledToUpButton>
  );
};

export default ToUpButton;
