import React from 'react';
import PropTypes from 'prop-types';

class NavbarList extends React.Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#">Web Hosting</a>
                </li>
                <li className="nav-item">
                    <a href="#">
                        <p>on sale</p>
                        Cloud Hosting
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#">VPS Hosting</a>
                </li>
                <li className="nav-item">
                    <a href="#">VPS Hosting</a>
                </li>
                <li className="nav-item">
                    <a href="#">Website Builder</a>
                </li>
            </ul>
        );
    }
}

NavbarList.propTypes = {
    menuList: PropTypes.array.isRequired
}

export default NavbarList;