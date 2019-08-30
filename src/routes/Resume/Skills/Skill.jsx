import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hex from 'components/Hex/Hex';
import AsyncImage from 'components/AsyncImage/AsyncImage';

const renderImageByType = (Logo) => {
  if (typeof Logo === 'object') return <FontAwesomeIcon icon={Logo} />;
  if (typeof Logo === 'string') return <AsyncImage path={Logo} />;

  return <Logo />;
};

const Skill = React.memo(({ logo }) => <Hex>{renderImageByType(logo)}</Hex>);

export default Skill;
