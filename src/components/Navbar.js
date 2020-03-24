import React from 'react';
import PropTypes from 'prop-types';
import NavbarList from './NavbarList';
import MenuNav from './MenuNav';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
    }

    toggleMenu(e) {
        let show = !this.state.showMenu;
        this.setState({showMenu: show});
    }

    displayMenu(showMenu) {
        if (showMenu) {
            return <MenuNav menuList={this.props.header.menuList} />;
        }
    }

    render() {
        let navbar = (
            <header>
                <div className="navbar">
                    <img src="./assets/logo.svg" alt="Hostinger" />
                    <button className="menu-toggle ml-auto" onClick={this.toggleMenu.bind(this)}>
                        <span></span>
                    </button>
                    <NavbarList menuList={this.props.header.menuList} />
                    {this.displayMenu(this.state.showMenu)}
                </div>
            </header>
        );
        return navbar;
    }
}

Navbar.propTypes = {
    header: PropTypes.object.isRequired
}

export default Navbar;