import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import _ from 'underscore';

import { getTasks, addTask } from '../actions/actions.tasks';
import { deleteList } from '../actions/actions.lists';

import TaskCard from './TaskCard';
import AddTask from './AddTask';

class ListCard extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount () {
    this.props.getTasks();
  }
  handleSubmit(e) {
      e.preventDefault();
      this.props.deleteList(this.props.id);
  }
  render () {
    return (
      <section className="list-wrapper">
        <article className="list">
          <div className="list-header">
            <p className="handle-list">
              {this.props.listname}
              <a onClick={this.handleSubmit} className="delete"><i className="fa fa-times"></i></a>
            </p>
          </div>
          <ul className="list-cards cardsContainer"> 
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
  addTask: PropTypes.func,
  deleteList: PropTypes.func,
  tasks: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    getTasks: () => {
      dispatch(getTasks());
    },
    addTask: (text, parentId) => {
      dispatch(addTask(text, parentId));
    },
    deleteList: (id) => {
      dispatch(deleteList(id));
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
