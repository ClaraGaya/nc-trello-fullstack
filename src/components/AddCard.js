const React = require('react');

const AddCard = React.createClass ({
    getInitialState: function() {
        return{
            cardText: '',
            open: false
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
            <div>
                <a onClick={this.showHide} className={'add-card ' + btnShow}>Add new card</a>
                <div className={"add-card " + divShow}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea 
                        className='list-name-input'
                        type="text" 
                        value={this.state.cardText} 
                        placeholder="Add card text..." 
                        onChange={this.handleChange}
                        />
                        <button>Add</button>
                        <a onClick={this.showHide}><i className="fa fa-times"></i></a>
                    </form>
                </div>
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
        const listIndex = this.props.index;
        if (this.state.cardText.length === 0) return;
        this.props.addCard(this.state.cardText, listIndex);
        this.setState({
            cardText: ''
        });
    }, 
})

module.exports = AddCard;