import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

class MenuNav extends React.Component {
    render() {
        return (
            <div id="navbarMenu" className="menu-nav">
                <ul>
                    {this.props.menuList.map((menuItem, index) => (
                        <NavbarItem key={index} classes="manu-item" highlightsFirst={false} item={menuItem} />
                    ))}
                </ul>
                <button className="btn" onClick={this.props.toggle}>
                    <span></span>
                </button>
            </div>
        );
    }
}

MenuNav.propTypes = {
    toggle: PropTypes.func.isRequired,
    menuList: PropTypes.array.isRequired
}

export default MenuNav;