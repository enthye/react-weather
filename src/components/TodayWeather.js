import React from 'react';

class TodayWeather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&
                <div>
                    <h1>Today's Weather for {this.props.city}, {this.props.country}.</h1>
                    <p>Conditions: {this.props.conditions }</p>
                    <i className={`wi wi-owm-${this.props.conditionsId}`}  />
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