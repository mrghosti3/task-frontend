import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavbarList from './NavbarList';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="navbar">
                    <img src="./assets/logo.svg" alt="Hostinger" />
                    <NavbarList menuList={this.props.header.menuList} />
                </div>
            </header>
        );
    }
}

Navbar.propTypes = {
    header: PropTypes.object.isRequired
}

export default Navbar;