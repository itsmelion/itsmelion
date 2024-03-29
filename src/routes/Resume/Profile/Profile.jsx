import { faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as hero from 'data/hero';
import React, { memo } from 'react';
import { lang } from 'utils';

import './Profile.scss';

const {
  name, address, picture, contact, bio, text,
} = hero;

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
          <h5 className="show-print"><a href={hero.url} rel="noopener">{hero.url}</a></h5>
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

    <h5 className="mt1">In Depth: A Lion heart</h5>
    <p>{lang(hero.inDepth)}</p>
  </header>
);

export default memo(Profile);
