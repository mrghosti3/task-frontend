import React from 'react';
import PropTypes from 'prop-types';

class NavbarItem extends React.Component {
    putHighlight = (highlight) => {
        if (highlight !== undefined) {
            return (<p>{highlight}</p>);
        }
    }

    render() {
        const {link, text, highlight} = this.props.item;
        return (
            <li className="nav-item">
                {this.putHighlight(highlight)}
                <a className="nav-link" href={link}>{text}</a>
            </li>
        );
    }
}

NavbarItem.protTypes = {
    item: PropTypes.object.isRequired
}

export default NavbarItem;