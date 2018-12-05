import React from 'react';

const fontStack = `
  -apple-system,
  BlinkMacSystemFont,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

const PoweredBy = () => (
  <p
    className="p1"
    style={{
      fontFamily: fontStack,
      textAlign: 'center',
      fontSize: '.7rem',
    }}
  >
  Powered by ΛLIΛ
  </p>
);

export default PoweredBy;
