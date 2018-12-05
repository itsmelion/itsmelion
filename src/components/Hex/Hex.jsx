import React from 'react';
import './Hex.scss';
import { ReactComponent as HexSVG } from './Hex.svg';

const Hex = React.memo(({ children }) => (
  <div className="Hex">
    <HexSVG />
    <div row="" align="center center">
      {children}
    </div>
  </div>
));

export default Hex;
