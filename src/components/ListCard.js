import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getTasks } from '../actions/actions.tasks';
import TaskCard from './TaskCard';
import AddTask from './AddTask';


class Lists extends Component {
  componentDidMount () {
    this.props.getTasks();
  }
  render () {
    return (
      <div className="list-wrapper">
        <div className="list">
          <div className="list-header">
            <p>{this.props.listname}</p>
          </div>
          <ul className="list-cards"> 
            { _.map(this.props.tasks.byId, (task,i) => {
            return <TaskCard key={i} {...task} />
            })}
          </ul>
          {<AddTask parentId={this.props.id} addCard={this.props.addTask}/>}
          </div>
      </div>       
    );
  }
}

Lists.propTypes = {
  getTasks: PropTypes.func,
  tasks: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getTasks: (id) => {
      dispatch(getTasks(id));
    }
  };
}

function mapStateToProps (state) {
  return {
    tasks: state.tasks,
    loading: state.lists.loading,
    error: state.lists.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Lists);