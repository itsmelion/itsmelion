import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    theme = 'default', _type = 'button', link, children, newtab, ...other
  } = props;

  if (link) {
    return (
      <a
        {...other}
        className={`button row nowrap ${theme}`}
        align="start start"
        href={link}
        target={newtab ? '_blank' : ''}
      >
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...other} type={_type} className={`button row ${theme}`}>
      {children}
    </button>
  );
};

export default Button;
