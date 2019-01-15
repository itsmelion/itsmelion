import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import spinner from './preloader.gif';

export default class AsyncImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ready: false };
    this.asyncImage = new Image();
  }

  componentDidMount() {
    const { path } = this.props;
    this.asyncImage.src = path;
    this.asyncImage.onload = () => this.setState({
      ready: true,
    });
  }

  render() {
    const { ready } = this.state;
    const { className, path, alt } = this.props;

    if (!path) return null;

    return (
      <img
        {...this.props}
        src={ready ? this.asyncImage.src : spinner}
        alt={alt}
        className={`AsyncImage cover-fit ${ready} ${className}`}
      />
    );
  }
}

AsyncImage.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

AsyncImage.defaultProps = {
  path: false,
};
