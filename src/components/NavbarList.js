import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

class NavbarList extends React.Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                {this.props.menuList.map((menuItem, index) => (
                    <NavbarItem key={index} item={menuItem} />
                ))}
            </ul>
        );
    }
}

NavbarList.propTypes = {
    menuList: PropTypes.array.isRequired
}

export default NavbarList;