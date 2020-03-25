import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        let arr = props.time.split(':');
        this.state = {
            seconds: this.toSeconds(arr)
        }
    }

    timeFormat(t) {
        if (t < 10) {
            return `0${t}`;
        }
        return t;
    }

    toTime(s) {
        let days = Math.floor(s / 86400);
        let hours = Math.floor(s / 3600) - days * 24;
        let minutes = Math.floor(s / 60) - days * 1440 - hours * 60;
        let seconds = s - days * 86400 - hours * 3600 - minutes * 60;
        return [days, hours, minutes, seconds];
    }

    toSeconds(arr) {
        return parseInt(arr[3]) + parseInt(arr[2]) * 60 + parseInt(arr[1]) * 3600 + parseInt(arr[0]) * 86400;
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds - 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let time = this.toTime(this.state.seconds);

        return (
            <div className="row timer">
                <div className="col">
                    <i className="fa fa-caret-right text-red"></i>
                </div>
                <div className="col">
                    <h3>{this.timeFormat(time[0])}</h3>
                    <p>DAYS</p>
                </div>
                <div className="col">
                    <h3>{this.timeFormat(time[1])}</h3>
                    <p>HOURS</p>
                </div>
                <div className="col">
                    <h3>{this.timeFormat(time[2])}</h3>
                    <p>MINUTES</p>
                </div>
                <div className="col">
                    <h3>{this.timeFormat(time[3])}</h3>
                    <p>SECONDS</p>
                </div>
                <div className="col">
                    <i className="fa fa-caret-left text-red"></i>
                </div>
            </div>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.string.isRequired
}

export default Timer;