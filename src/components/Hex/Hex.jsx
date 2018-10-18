import React from 'react';
import './Hex.scss';
import InlineSVG from '../InlineSVG/InlineSVG';
import hexSvg from '!html-loader!./Hex.svg';

const Hex = ({ children }) => (
  <div className="Hex">
    <InlineSVG icon={hexSvg} />
    <div>{children}</div>
  </div>
);


export default Hex;
