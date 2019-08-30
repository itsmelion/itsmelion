import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import spinner from './preloader.gif';

const AsyncImage = (props) => {
  const { className, path, alt } = props;
  const asyncImage = new Image();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    asyncImage.src = path;
    asyncImage.onload = () => setReady(true);
  }, []);


  if (!path) return null;

  return (
    <img
      {...props}
      src={ready ? asyncImage.src : spinner}
      alt={alt}
      className={`AsyncImage cover-fit ${ready} ${className}`}
    />
  );
};

export default memo(AsyncImage);

AsyncImage.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

AsyncImage.defaultProps = {
  path: false,
};
