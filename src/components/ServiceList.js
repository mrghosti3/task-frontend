import React from 'react';
import PropTypes from 'prop-types';
import Service from './Service';

class ServiceList extends React.Component {
    render() {
        return (
            <div class="row d-relative pos-bottom-0">
                {this.props.services.map((service, index) => (
                    <Service key={"service-" + index.toString()} serv={service} />
                ))}
            </div>
        );
    }
}

ServiceList.propTypes = {
    services: PropTypes.array.isRequired
};
export default ServiceList;