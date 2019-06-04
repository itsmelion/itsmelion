import React from 'react';
import { lang } from 'utils';

import Button from '../Button/Button';
import i18n from './Footer.i18n';

const CallToActions = () => (
  <section
    className="hide-print center CallToActions"
    align="center"
  >
    <h2 className="mv1">Lets talk</h2>

    <div row="" align="center">
      {i18n.CallToActions.map(({ label, action }) => (
        <Button key={action}>{lang(label)}</Button>
      ))}
    </div>
  </section>
);

export default CallToActions;
