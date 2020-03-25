import React from 'react';
import PropTypes from 'prop-types';

class Service extends React.Component {
    render() {
        return (
            <div class="col">
                <p class="m-0">
                    <i class="fa fa-check text-success mr-10"></i>
                    {this.props.serv}
                </p>
            </div>
        );
    }
}

Service.propTypes = {
    serv: PropTypes.string.isRequired
};
export default Service;