import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

class MenuList extends React.Component {
    render() {
        return (
            <div id="navbarMenu">
                <ul>
                    {this.props.menuList.map((menuItem, index) => (
                        <NavbarItem key={index} classes="" item={menuItem} />
                    ))}
                </ul>
            </div>
        );
    }
}

MenuList.propTypes = {
    menuList: PropTypes.array.isRequired
}

export default MenuList;