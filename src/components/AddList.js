import React, { Component } from 'react';


class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '',
            open: false
        }
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showHide = this.showHide.bind(this)
    }
    updateState(e) {
        this.setState({listName: e.target.value});
    }
    showHide(e){
        this.setState({open: !this.state.open });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.listName.length === 0) return;
        this.props.addList(this.state.listName);
        this.setState({listName: ''});
    }
    render(){
        const btnShow = this.state.open ? 'hide' : 'show';
        const divShow = this.state.open ? 'show' : 'hide';
        
        return(
            <section className="list-wrapper">
                <div className="add-list">
                    <a onClick={this.showHide} className={'add-card ' + btnShow}>Add new List</a>
                    <div className={"add-card " + divShow}>
                        <form onSubmit={this.handleSubmit}>
                            <textarea 
                            className='list-name-input'
                            type="text" 
                            value={this.state.listName} 
                            placeholder="Add list title..." 
                            onChange={this.updateState}
                            />
                            <button>Add</button>
                            <a onClick={this.showHide}><i className="fa fa-times"></i></a>
                        </form>
                    </div>
                </div>
            </section>
        )
    }   
}

export default AddList;