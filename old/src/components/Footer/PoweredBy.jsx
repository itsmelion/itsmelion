import React from 'react';

/** @deprecated This component is not being used */

const fontStack = `
  -apple-system,
  BlinkMacSystemFont,
  system-ui,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
`;

const PoweredBy = () => (
  <p
    className="p1"
    style={{
      fontFamily: fontStack,
      textAlign: 'center',
      fontSize: '.7rem',
    }}>
    Powered by ΛLIΛ
  </p>
);

export default PoweredBy;
