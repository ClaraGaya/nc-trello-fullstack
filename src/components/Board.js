import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Header from './Header';
import Lists from './Lists';

export default class Board extends Component {
  render() {
    return (
      <div>
        <Header />
        <Lists />
      </div>
    );
  }
}


Board.propTypes = {
  Lists: PropTypes.element,
  Header: PropTypes.element,
};