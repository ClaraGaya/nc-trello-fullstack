const React = require('react');

const List = require('./List');
const AddList = require('./AddList');


const Board = React.createClass ({
    getInitialState: function(){
        return {
            lists: [
                {   
                    'name': 'Things to do', 
                    'cards': [3,2], 
                },
                {   
                    'name': 'Things done', 
                    'cards': [1,4],
                }
            ],
            tasks: {
                1: 'Buy milk',
                2:'Do laundry',
                3: 'Finnish Homework',
                4: 'Call home',
                5: 'Do laundry'
            }
            
        }
    },
    addList:function(newListName){
        const newList = {   
            'name': newListName, 
            'cards': [], 
        };
        this.setState({
            lists: this.state.lists.concat(newList)
        })
    },
    addCard:function(newCardText){
        var i = Object.keys(this.state.tasks);
        this.state.tasks[i+1] = newCardText;
        this.setState({
           tasks: tasks
        });
    },
    render:function(){
        return(
            <div className='board'>
                {this.state.lists.map(function(list,i){
                    return <List 
                            addCard={this.addCard}
                            key={i} 
                            name={list.name} 
                            cards={list.cards.map(function(card_id){
                                return this.state.tasks[card_id]
                            }.bind(this))}
                            
                            />
                }.bind(this))}
                
                <AddList addList={this.addList}/>
            </div>
        )
    }
})

module.exports = Board;