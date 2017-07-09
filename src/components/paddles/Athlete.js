
import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'semantic-ui-react';

const commonIconProps = {
  size: 'big'
};

const Athlete = ({ product }) => (
  <List className="athlete">
    <List.Item>
      <List.Icon name="id badge" {...commonIconProps} />
      <List.Content>{product.athlete}</List.Content>
    </List.Item>

    <List.Item>
      <List.Icon name="trophy" {...commonIconProps} />
      <List.Content>{product.rank}</List.Content>
    </List.Item>
  </List>
);

Athlete.propTypes = {
  product: PropTypes.shape().isRequired
};

export default Athlete;
