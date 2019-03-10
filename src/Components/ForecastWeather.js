import React from 'react';

class ForecastWeather extends React.Component {
    render() {
        return (
            <div>
                5-day Forecast Weather:
                {this.props.forecast &&
                <p>Day 1
                     {this.props.forecast[0].weather[0].description}
                     {this.props.forecast[0].main.temp}
                </p>}
                {this.props.forecast &&
                    <div>
                <p>Day 1
                    {this.props.forecast[0].weather[0].description}
                    {this.props.forecast[0].main.temp}
                </p>
                        <p>Day 2
                            {this.props.forecast[1].weather[0].description}
                            {this.props.forecast[1].main.temp}
                        </p>
                        <p>Day 3
                            {this.props.forecast[2].weather[0].description}
                            {this.props.forecast[2].main.temp}
                        </p>
                        <p>Day 4
                            {this.props.forecast[3].weather[0].description}
                            {this.props.forecast[3].main.temp}
                        </p>
                        <p>Day 5
                            {this.props.forecast[4].weather[0].description}
                            {this.props.forecast[4].main.temp}
                        </p>
                    </div>
                        }




            </div>
        );
    }
}

export default ForecastWeather;