
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import '../../css/components/paddles/index.css';

const PaddlesMenu = ({
  data, handleOnMouseEnter, activeItem
}) => (
  <section className="paddles">
    <Menu vertical>
      {
        data.map(({category, list}, ix) => (
          <Menu.Item key={ix}>
            <Menu.Header>{category}</Menu.Header>

            <Menu.Menu>
              {
                list.map((product, ixix) => {
                  const { model, img } = product;
                  return (
                    <Menu.Item
                      as={Link}
                      to={'/paddles'}

                      name={model}
                      active={activeItem === {model}}

                      onMouseEnter={() => {
                        handleOnMouseEnter(product, img);
                      }}
                      key={ixix}
                    />
                  );
                })
              }
            </Menu.Menu>
          </Menu.Item>
        ))
      }
    </Menu>
  </section>
);

PaddlesMenu.propTypes = {
  data: PropTypes.array.isRequired,
  handleOnMouseEnter: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};

export default PaddlesMenu;
