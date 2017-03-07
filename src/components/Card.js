const React = require('react');

const Card = React.createClass ({
    render:function(){
        return(
            <div className="card">
                <div className="card-details">
                    <span>{this.props.text}</span>
                </div>
            </div>         
        )
    }
})

module.exports = Card;