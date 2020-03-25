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

    toggleMenu() {
        let show = !this.state.showMenu;
        this.setState({showMenu: show});
    }

    displayMenu(showMenu) {
        if (showMenu) {
            return <MenuNav toggle={this.toggleMenu.bind(this)} menuList={this.props.header.menuList} />;
        }
    }

    render() {
        let navbar = (
            <header>
                <div className="navbar">
                    <a className="nav-brand" href={this.props.header.brand.link}>
                        {this.props.header.brand.logo}
                    </a>
                    <button className="btn menu-toggle ml-auto" onClick={this.toggleMenu.bind(this)}>
                        <i className="fa fa-bars"></i>
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