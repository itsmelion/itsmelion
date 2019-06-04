import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import { lang } from 'utils';
import hero from 'data/hero';

import './Profile.scss';

const Profile = React.memo(() => (
  <header className="profile">
    <div row="nowrap" mobile-wrap="">
      <img
        className="avatar mr2 mb1"
        src={hero.picture.avatar}
        alt={lang(hero.name)}
      />

      <div flex="auto">
        <div>
          <h2>{lang(hero.name)}</h2>
          <h3>{hero.role}</h3>
        </div>

        <address flex="auto" className="mb1">
          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faMapMarkedAlt} />
            {hero.address.city},&nbsp;{hero.address.country}
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faEnvelope} />
            <a className="link" href={`mailto:${hero.contact.email}`}>
              {hero.contact.email}
            </a>
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faWhatsapp} />
            <a className="link" href={`tel:${hero.contact.phone}`}>
              {hero.contact.phone}
            </a>
          </p>

          <p row="nowrap">
            <FontAwesomeIcon className="mr1" icon={faSkype} />
            <a className="link" href={hero.contact.skype.url}>
              {hero.contact.skype.label}
            </a>
          </p>
        </address>
      </div>
    </div>

    <h5 className="mt1">Bio</h5>
    <p>{lang(hero.bio)}</p>

    <h5 className="mt1">Strengths</h5>
    <p>{lang(hero.text)}</p>
  </header>
));

export default Profile;
