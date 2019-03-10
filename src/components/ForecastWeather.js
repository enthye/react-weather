import React from 'react';

class ForecastWeather extends React.Component {
    render() {
        return (
            <div>
                {this.props.forecast &&
                <div>
                    <h1>5-day Weather Forecast</h1>
                    <table>
                        <thead>
                        <tr>
                            <th scope="col">1-day</th>
                            <th scope="col">2-day</th>
                            <th scope="col">3-day</th>
                            <th scope="col">4-day</th>
                            <th scope="col">5-day</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><i className={`wi wi-owm-${this.props.forecast[0].weather[0].id}`}/></td>
                            <td><i className={`wi wi-owm-${this.props.forecast[1].weather[0].id}`}/></td>
                            <td><i className={`wi wi-owm-${this.props.forecast[2].weather[0].id}`}/></td>
                            <td><i className={`wi wi-owm-${this.props.forecast[3].weather[0].id}`}/></td>
                            <td><i className={`wi wi-owm-${this.props.forecast[4].weather[0].id}`}/></td>
                        </tr>
                        <tr>
                            <td>{this.props.forecast[0].weather[0].description}</td>
                            <td>{this.props.forecast[1].weather[0].description}</td>
                            <td>{this.props.forecast[2].weather[0].description}</td>
                            <td>{this.props.forecast[3].weather[0].description}</td>
                            <td>{this.props.forecast[4].weather[0].description}</td>
                        </tr>
                        <tr>
                            <td>{Math.round(this.props.forecast[0].main.temp)}</td>
                            <td>{Math.round(this.props.forecast[1].main.temp)}</td>
                            <td>{Math.round(this.props.forecast[2].main.temp)}</td>
                            <td>{Math.round(this.props.forecast[3].main.temp)}</td>
                            <td>{Math.round(this.props.forecast[4].main.temp)}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                }
            </div>
        );
    }
}

export default ForecastWeather;