import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    theme = 'default', _type = 'button', link, children, newtab, ...other
  } = props;

  if (link) {
    return (
      <a
        className={`button row nowrap ${theme}`}
        href={link}
        target={newtab ? '_blank' : ''}
        {...other}
      >
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={_type} className={`button row ${theme}`} {...other}>
      {children}
    </button>
  );
};

export default Button;
