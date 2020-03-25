import React from 'react';
import PropTypes from 'prop-types';

class ServiceList extends React.Component {
    render() {
        return (
            <div class="row d-relative pos-bottom-0">
                <div class="col">
                    <p class="m-0">
                        <i class="fa fa-check text-success mr-10"></i>
                        Garanteed 99.9% Uptime
                    </p>
                </div>
                <div class="col">
                    <p class="m-0">
                        <i class="fa fa-check text-success mr-10"></i>
                        Superior Speed Performance
                    </p>
                </div>
                <div class="col">
                    <p class="m-0">
                        <i class="fa fa-check text-success mr-10"></i>
                        24/7 Support Chat
                    </p>
                </div>
                <div class="col">
                    <p class="m-0">
                        <i class="fa fa-check text-success mr-10"></i>
                        30-Day Money-Back Guarantee
                    </p>
                </div>
            </div>
        );
    }
}

ServiceList.propTypes = {
    services: PropTypes.object.isRequired
};
export default ServiceList;