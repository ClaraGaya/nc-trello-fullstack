import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import dragula from 'react-dragula';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getLists, addList } from '../actions/actions.lists';
import ListCard from './ListCard';
import AddList from './AddList';

class Lists extends Component {
  componentDidMount () {
    this.props.getLists();
    var board = ReactDOM.findDOMNode(this);
    dragula([board]);
  }
  render () {
    return (
        <main className="board" ref={this.dragulaDecorator}>
            { _.map(this.props.lists.byId, (list,i) => {
              return <ListCard key={i} {...list}/>
            })}
            <AddList addList={this.props.addList}/>
        </main>
    );
  }
}

Lists.propTypes = {
  getLists: PropTypes.func,
  addList: PropTypes.func,
  lists: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getLists: () => {
      dispatch(getLists());
    },
    addList: (title) => {
      dispatch(addList(title));
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