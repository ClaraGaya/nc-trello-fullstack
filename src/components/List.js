const React = require('react');

const Card = require('./Card');
const AddCard = require('./AddCard');

const List = React.createClass ({
    render:function(){
        return(
            <div className="list-wrapper">
                <div className="list">
                    <div className="list-header">
                        <p>{this.props.name}</p>
                    </div>
                    
                    <div className="list-cards"> 
                        {this.props.cards.map(function(card,i){
                            return <Card 
                                    key={i} 
                                    text={card}
                                    />
                        })}
                    </div>
                    <AddCard index ={this.props.index} addCard={this.props.addCard}/>
                </div>
            </div>
        )
    }
})

module.exports = List;