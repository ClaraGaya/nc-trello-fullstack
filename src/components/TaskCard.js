import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTask } from '../actions/actions.tasks';


class TaskCard extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
      e.preventDefault();
      this.props.deleteTask(this.props.id);
  }
  render(){
    return (
      <li>
        <p>
          {this.props.body}
          <a onClick={this.handleSubmit}  className="delete"><i className="fa fa-times"></i></a>
        </p>
      </li>
    );
  }
  
};

TaskCard.propTypes = {
  deleteTask: PropTypes.func,
  tasks: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    deleteTask: (id) => {
      dispatch(deleteTask(id));
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
export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);

