
import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'semantic-ui-react';

const commonIconProps = {
  size: 'large'
};

const PaddleInfo = ({ product }) => (
  <List className="paddle-info">
    <List.Item>
      <List.Icon name="search" {...commonIconProps} />
      <List.Content>{product.model}</List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...
      </List.Content>
    </List.Item>
  </List>
);

PaddleInfo.propTypes = {
  product: PropTypes.shape().isRequired
};

export default PaddleInfo;
