const React = require('react');

const AddCard = React.createClass ({
    getInitialState: function() {
        return{
            cardText: ''
        };
    },
    render:function(){
        return(
            // <a className="add-card">Add new card</a>
            <div className="add-card">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    className="list-name-input" 
                    type="text" 
                    value={this.state.cardText} 
                    placeholder="Add card text..." 
                    onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    },
    handleChange: function(event) {
        this.setState({
            cardText:event.target.value
        });
    },
    handleSubmit:function(event){
        event.preventDefault();
        if (this.state.cardText.length === 0) return;
        this.props.addCard(this.state.cardText);
        this.setState({
            cardText: ''
        });
    }, 
})

module.exports = AddCard;