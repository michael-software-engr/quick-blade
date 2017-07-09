
import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

import './css/App.css';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home/Index';
import Paddles from './components/paddles/Index';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: null }

  handleItemClick = (e, { name }) => {
    this.setState({
      ...this.state,
      activeItem: name
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <Segment inverted>
            <Menu inverted pointing secondary color="orange">
              <Menu.Item
                as={Link}
                to="/"

                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                HOME
              </Menu.Item>

              <Menu.Item
                as={Link}
                to="/paddles"

                name="paddles"
                active={activeItem === 'paddles'}
                onClick={this.handleItemClick}
              >
                PADDLES
              </Menu.Item>
            </Menu>
          </Segment>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/paddles" component={Paddles} />
          </div>
        </div>
      </Router>
    );
  }
}
