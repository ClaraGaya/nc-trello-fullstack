const React = require('react');
const logo = require('../assets/img/header-logo.png');

const Header = React.createClass ({
    render:function(){
        return(
            <header><img src={logo} alt="logo"/></header>
        )
    }
})

module.exports = Header;