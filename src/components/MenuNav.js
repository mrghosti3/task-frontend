import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

class MenuNav extends React.Component {
    menuClasses(staticClasses, itemCount) {
        if (itemCount < 11) {
            return staticClasses + " pb-30";
        }

        return staticClasses;
    }

    render() {
        return (
            <div id="navbarMenu" className={this.menuClasses("menu-nav", this.props.menuList.length)}>
                <ul>
                    {this.props.menuList.map((menuItem, index) => (
                        <NavbarItem key={index} classes="menu-item" highlightsFirst={false} item={menuItem} />
                    ))}
                </ul>
                <button className="btn" onClick={this.props.toggle}>
                    <i className="fa fa-times"></i>
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