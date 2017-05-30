import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getLists } from '../actions/actions.lists';
import ListCard from './ListCard';


class Lists extends Component {
  componentDidMount () {
    this.props.getLists();
  }
  render () {
    console.log(this.props.lists)
    return (
        <ul>
            { _.map(this.props.lists.byId, (list,i) => {
              return <ListCard key={i} {...list}/>
            })}
        </ul>
    );
  }
}

Lists.propTypes = {
  getLists: PropTypes.func,
  lists: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getLists: () => {
      dispatch(getLists());
    }
  };
}

function mapStateToProps (state) {
  return {
    lists: state.lists,
    loading: state.lists.loading,
    error: state.lists.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Lists);