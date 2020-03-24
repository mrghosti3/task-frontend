import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

class MenuNav extends React.Component {
    addClasses = (show) => {
        let classes = "menu-nav " + (show?"show":"");
        return classes;
    }

    render() {
        return (
            <div id="navbarMenu" className={this.addClasses(this.props.show)}>
                <ul>
                    {this.props.menuList.map((menuItem, index) => (
                        <NavbarItem key={index} classes="manu-item" item={menuItem} />
                    ))}
                </ul>
            </div>
        );
    }
}

MenuNav.propTypes = {
    show: PropTypes.bool,
    menuList: PropTypes.array.isRequired
}

export default MenuNav;