import React from 'react';
import './Certifications.scss';

const certifications = [];

const Certifications = React.memo(() => (
  <section id="Certifications">{certifications.map()}</section>
));

export default Certifications;
