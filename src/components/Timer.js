import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
    constructor(props) {
        super(props);
        let arr = props.time.split(':');
        this.state = {
            seconds: this.toSeconds(arr)
        }
    }

    toTime = (s) => {
        console.log(s);
        let days = Math.floor(s / 86400);
        let hours = Math.floor(s / 3600) - days * 24;
        let minutes = Math.floor(s / 60) - days * 1440 - hours * 60;
        let seconds = s - days * 86400 - hours * 3600 - minutes * 60;
        console.log([days, hours, minutes, seconds]);
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
            <div>
                <p>{time[0]}</p>
                <p>{time[1]}</p>
                <p>{time[2]}</p>
                <p>{time[3]}</p>
            </div>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.string.isRequired
}

export default Timer;