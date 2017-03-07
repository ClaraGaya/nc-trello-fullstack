const React = require('react');
const logo = require('../img/header-logo.png');

const Header = React.createClass ({
    render:function(){
        return(
            <header><img src={logo} alt="logo"/></header>
        )
    }
})

module.exports = Header;