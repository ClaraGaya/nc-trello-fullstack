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
            },
            counter: 6
            
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
    addCard:function(newCardText, index){
        // copy the tasks obj
        const newTasks = Object.assign({}, this.state.tasks);

        // add a new task to the copy
        newTasks[this.state.counter] = newCardText;

        // copy the array of lists
        const newLists = this.state.lists.slice();

        // add the counter (6) to newLists[0].card
        newLists[index].cards = newLists[index].cards.concat([this.state.counter]);

        this.setState({
            lists: newLists,
           tasks: newTasks,
           counter: this.state.counter +1
        },function (){
            console.log(this.state.tasks);
        });
    },
    render:function(){
        return(
            <div className='board'>
                {this.state.lists.map(function(list,i){
                    return <List 
                            addCard={this.addCard}
                            key={i}
                            index={i} 
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