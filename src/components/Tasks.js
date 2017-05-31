import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getTasks } from '../actions/actions.tasks';
import TaskCard from './ListCard';


class Tasks extends Component {
  componentDidMount () {
    this.props.getTasks();
  }
  render () {
    console.log('parentId',this.props.parentId, this.props.tasks.byId)
    return (
        <ul className="list-cards"> 
            { _.map(this.props.tasks.byId, (task,i) => {
              return <TaskCard key={i} {...task}/>
            })}
        </ul>
    );
  }
}

Tasks.propTypes = {
  getTasks: PropTypes.func,
  tasks: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getTasks: () => {
      dispatch(getTasks());
    }
  };
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    loading: state.tasks.loading,
    error: state.tasks.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);