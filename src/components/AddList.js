const React = require('react');

const AddList = React.createClass ({
    getInitialState: function() {
        return{
            listName: '',
            open:false
        };
    },
    showHide:function(e){
        this.setState({
            open: !this.state.open
        })
    },
    render:function(){
         const btnShow = this.state.open ? 'hide' : 'show';
        const divShow = this.state.open ? 'show' : 'hide';
        return(
            <div className="js-add-list list-wrapper add-list">
                <a onClick={this.showHide} className={'add-card ' + btnShow}>Add new card</a>
                <form onSubmit={this.handleSubmit} className={'add-card ' + divShow}>
                    <input 
                    className="list-name-input" 
                    type="text" 
                    value={this.state.listName} 
                    placeholder="Add list name..." 
                    onChange={this.handleChange}
                    />
                    <button>Add</button>
                    <a onClick={this.showHide}><i className="fa fa-times"></i></a>
                </form>
            </div>
        )
    },
    handleChange: function(event) {
        this.setState({
            listName:event.target.value
        });
    },
    handleSubmit:function(event){
        event.preventDefault();
        if (this.state.listName.length === 0) return;
        this.props.addList(this.state.listName);
        this.setState({
            listName: ''
        });
    }, 
})

module.exports = AddList;