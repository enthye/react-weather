import React from 'react';

class TodayWeather extends React.Component {
    /*
    getWeatherImage = () => {
        const img = undefined;
        switch(this.props.conditionsMain) {
            case 'value1':  // if (x === 'value1')

                break;
            case 'value1':  // if (x === 'value1')
            break;
        }
    }
    */
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&
                <div>
                    <h1>Today's Weather for {this.props.city}, {this.props.country}.</h1>
                    <p>Conditions: {this.props.conditions}</p>
                    <p>Temperature: {this.props.temperature}&#8451;</p>
                    <p>Humidity: {this.props.humidity}%</p>
                    <p>Wind: {this.props.windspeed} km/hr, {this.props.winddirection}</p>
                </div>}
                {this.props.error}
            </div>
        );
    }
}

export default TodayWeather;