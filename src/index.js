const React = require('react');
const ReactDOM = require('react-dom');
require('./App.css');

const Header = require('./components/Header');
const Board = require('./components/Board');

const App = React.createClass ({
    render:function(){
        return(
            <div>
                <Header />
                <Board />
            </div>
        );
    }
})

ReactDOM.render(<App />,document.getElementById('root'));