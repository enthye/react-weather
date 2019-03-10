import React from 'react';

class TodayWeather extends React.Component {
    render() {
        return (
            <div>
                Today's Weather for {this.props.city}, {this.props.country}.
                <p>Conditions: {this.props.conditions}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Wind: {this.props.windspeed} {this.props.winddirection}</p>
            </div>
        );
    }
}

export default TodayWeather;