// @ts-nocheck
import React, { PureComponent } from 'react';
import spinner from './spinner.gif';

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
    return (
      <img
        src={ready ? this.asyncImage.src : spinner}
        className={`AsyncImage cover-fit ${ready}`}
        alt=""
      />
    );
  }
}
