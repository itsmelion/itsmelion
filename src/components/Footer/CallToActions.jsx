import React from 'react';

import Button from '../Button/Button';
import i18n from './Footer.i18n';
import { lang } from 'utils';

const CallToActions = () => (
  <section
    align="center"
    className="hide-print center CallToActions">
    <h2 className="mv1">Lets talk</h2>

    <div align="center" row="">
      {i18n.CallToActions.map(({ label, action }) => (
        <Button key={action}>{lang(label)}</Button>
      ))}
    </div>
  </section>
);

export default CallToActions;
