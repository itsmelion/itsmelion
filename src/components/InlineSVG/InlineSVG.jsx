import React from 'react';

const InlineSVG = ({ icon }) => (
  // eslint-disable-next-line react/no-danger
  <i className="InlineSVG" dangerouslySetInnerHTML={{ __html: icon }} />
);

export default InlineSVG;
