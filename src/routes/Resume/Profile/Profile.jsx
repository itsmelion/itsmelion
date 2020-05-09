import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import { lang } from 'utils';
import hero, {
  name, address, picture, contact, bio, text,
} from 'data/hero';

import './Profile.scss';

const Profile = () => (
  <header className="profile">
    <div mobile-wrap="" row="nowrap">
      <img
        alt={lang(name)}
        className="avatar mr2 mb1"
        src={picture.avatar}
      />

      <div flex="auto">
        <div className="mb1">
          <h2>{lang(name)}</h2>
          <h3>{hero.role}</h3>
          <h5 className="show-print"><a href={hero.url} rel="noopener noreferer">{hero.url}</a></h5>
        </div>

        <address className="mb1" flex="auto">
          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faMapMarkerAlt} />
            {address.city}
            ,&nbsp;
            {address.country}
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faEnvelope} />
            <a className="link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faWhatsapp} />
            <a className="link" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faSkype} />
            <a className="link" href={contact.skype.url}>
              {contact.skype.label}
            </a>
          </p>
        </address>
      </div>
    </div>

    <h5 className="mt1">Bio</h5>
    <p>{lang(bio)}</p>

    <h5 className="mt1">Strengths</h5>
    <p>{lang(text)}</p>
  </header>
);

export default memo(Profile);
