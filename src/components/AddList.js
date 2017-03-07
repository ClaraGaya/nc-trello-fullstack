const React = require('react');

const AddList = React.createClass ({
    getInitialState: function() {
        return{
            listName: ''
        };
    },
    render:function(){
        return(
            <div className="js-add-list list-wrapper add-list">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    className="list-name-input" 
                    type="text" 
                    value={this.state.listName} 
                    placeholder="Add list name..." 
                    onChange={this.handleChange}
                    />
                    <button>Save</button>
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