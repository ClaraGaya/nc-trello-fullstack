import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getTasks, addTask } from '../actions/actions.tasks';
import TaskCard from './TaskCard';
import AddTask from './AddTask';


class ListCard extends Component {
  componentDidMount () {
    this.props.getTasks();
  }
  render () {
    return (
      <section className="list-wrapper">
        <article className="list">
          <div className="list-header">
            <p>{this.props.listname}</p>
          </div>
          <ul className="list-cards"> 
            { _.map(this.props.tasks.byId, (task,i) => {
            if (task.parentid === this.props.id) {
            return <TaskCard key={i} {...task}/>
            }
            })}
          </ul>
          <AddTask parentId={this.props.id} addTask={this.props.addTask}/>
        </article>
      </section>
    );
  }
}

ListCard.propTypes = {
  getTasks: PropTypes.func,
  tasks: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getTasks: () => {
      dispatch(getTasks());
    },
    addTask: (text, parentId) => {
      dispatch(addTask(text, parentId));
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
export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
