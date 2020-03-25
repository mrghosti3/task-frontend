import React from 'react';
import bgImage from '../assets/background.jpg';

class MainContent extends React.Component {
    render() {
        return (
            <div className="main-content">
                <div className="main-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
            </div>
        );
    }
}

export default MainContent;