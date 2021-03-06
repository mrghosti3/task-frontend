import React from 'react';
import PropTypes from 'prop-types';

class PriceTag extends React.Component {
    constructor(props) {
        super(props);

        let arr = this.props.tag.price.toString().split('.');

        this.state = {
            discount: this.props.tag.discount,
            currency: this.props.tag.currency,
            main: arr[0],
            cents: arr[1],
            occurance: this.props.tag.occurance
        }
    }

    render() {
        return (
            <div className="col price-tag">
                <div className="row">
                    <div className="col discount">
                        <div className="discount-box">Save {this.state.discount}</div>
                        <div className="discount-arrow"></div>
                    </div>
                </div>
                <div className="row price">
                    <div className="col">
                        <h1>{this.state.currency}</h1>
                    </div>
                    <div className="col">
                        <h1><span>{this.state.main}</span></h1>
                    </div>
                    <div className="col">
                        <h1>{this.state.cents}</h1>
                        <h1>{this.state.occurance}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

PriceTag.propTypes = {
    tag: PropTypes.object.isRequired
};
export default PriceTag;