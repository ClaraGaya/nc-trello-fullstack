import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTask } from '../actions/actions.tasks';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardText: '',
            open: false
        }
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHide = this.showHide.bind(this)
    }
    updateState(e) {
        this.setState({cardText: e.target.value});
    }
    showHide(e){
        this.setState({open: !this.state.open });
    }
    handleSubmit(e) {
        e.preventDefault();
        const parentId = this.props.parentListID;
        if (this.state.cardText.length === 0) return;
        this.props.addTask(this.state.cardText, this.props.parentId);
        this.setState({cardText: ''});
    }
    render(){
        const btnShow = this.state.open ? 'hide' : 'show';
        const divShow = this.state.open ? 'show' : 'hide';
        return(
            <div>
                <a onClick={this.showHide} className={'add-card ' + btnShow}>Add new card</a>
                <div className={"add-card " + divShow}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea 
                        className='list-name-input'
                        type="text" 
                        value={this.state.cardText} 
                        placeholder="Add card text..." 
                        onChange={this.updateState}
                        />
                        <button>Add</button>
                        <a onClick={this.showHide}><i className="fa fa-times"></i></a>
                    </form>
                </div>
            </div>
        )
    }   
}

AddTask.propTypes = {
  addTask: PropTypes.func,
  task: PropTypes.object,
};

function mapDispatchToProps (dispatch) {
  return {
    addTask: (text, parentId) => {
      dispatch(addTask(text, parentId));
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);