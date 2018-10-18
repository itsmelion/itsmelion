import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hex from '../../../components/Hex/Hex';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';
import InlineSVG from '../../../components/InlineSVG/InlineSVG';

const renderImageByType = (logo, vector) => {
  if (typeof logo === 'object') return <FontAwesomeIcon icon={logo} />;

  return vector
    ? <InlineSVG icon={logo} />
    : <AsyncImage path={logo} />;
};

const Skill = ({ logo, vector = true }) => <Hex>{renderImageByType(logo, vector)}</Hex>;

export default Skill;
