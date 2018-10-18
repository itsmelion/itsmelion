import React, { Component } from 'react';

import './Drawer.scss';

class Drawer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    open: this.props.open,
  };

  close = (close) => {
    const isBackdrop = close.target.classList.contains('Drawer');
    if (!isBackdrop) return;

    this.setState(({ open }) => ({
      open: !open,
    }));
  }

  render() {
    const { backdrop = true, dark = false, children } = this.props;
    const { open } = this.state;

    return (
      <aside
        role="dialog"
        align="center end"
        backdrop={backdrop.toString()}
        className={`row Drawer ${open}`}
        onClick={this.close}
      >
        <div theme={dark ? 'dark' : 'light'}>
          <h1>{open.toString()}</h1>
          {children}
        </div>
      </aside>
    );
  }
}

export default Drawer;
