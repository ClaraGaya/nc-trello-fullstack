const React = require('react');

function ListMenu (props) {
    return (
        <div class="list-header-extras">
            <span class="list-header-extras-subscribe js-list-subscribed hide">
                <span class="icon-sm icon-subscribe"></span>
            </span>
            <a class="list-header-extras-menu dark-hover js-open-list-menu" href="#">
                <span class="icon-sm icon-overflow-menu-horizontal"></span>
            </a>
        </div>
    )
}



