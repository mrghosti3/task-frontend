import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';
import PriceTag from './PriceTag';
import ServiceList from './ServiceList';
import bgImage from '../assets/background.jpg';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content pb-30">
                <div className="main-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
                <div className="content">
                    <dir className="row">
                        <div className="col">
                            <h2 className="ml-15">
                                New Year Offer <br/>
                                <span className="text-red">{this.props.tag.discount} Off</span> Web Hosting
                            </h2>
                            <Timer time="00:16:18:29"/>
                            <a className="btn text-white text-center" href="/#">GET STARTED NOW</a>
                        </div>
                        <PriceTag tag={this.props.tag} />
                    </dir>
                    <ServiceList services={this.props.services}/>
                </div>
            </div>
        );
    }
}

MainContent.propTypes = {
    tag: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired
}
export default MainContent;