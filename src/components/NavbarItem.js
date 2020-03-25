import React from 'react';
import PropTypes from 'prop-types';

class NavbarItem extends React.Component {
    getItemContent(item, highlightsFirst) {
        const {link, text, highlight} = item;
        let out;

        if (highlight !== undefined) {
            if (highlightsFirst) {
                out = [
                    (<p>{highlight}</p>),
                    (<a className="nav-link" href={link}>{text}</a>)
                ];
            } else {
                out = [
                    (<a className="nav-link" href={link}>{text}</a>),
                    (<p>{highlight}</p>)
                ];
            }
        } else {
            out = <a className="nav-link" href={link}>{text}</a>;
        }

        return out;
    }

    render() {
        return (
            <li className={this.props.classes}>
                {this.getItemContent(this.props.item, this.props.highlightsFirst)}
            </li>
        );
    }
}

NavbarItem.protTypes = {
    classes: PropTypes.string,
    highlightsFirst: PropTypes.bool.isRequired,
    item: PropTypes.object.isRequired
}

export default NavbarItem;