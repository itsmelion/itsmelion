import React from 'react';
import './Button.scss';

const Button = React.memo((props) => {
  const {
    theme = 'default',
    _type = 'button',
    link,
    children,
    newtab = true,
    ...other
  } = props;

  if (link) {
    return (
      <a
        align="start center"
        className={`button row nowrap Button ${theme}`}
        href={link}
        rel="noopener noreferrer"
        target={newtab ? '_blank' : ''}
        {...other}
      >
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      align="start center"
      type={_type}
      className={`button row Button ${theme}`}
      {...other}
    >
      {children}
    </button>
  );
});

export default Button;
