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

                            <th className="pCentre" scope="col">1-day</th>
                            <th className="pCentre" scope="col">2-day</th>
                            <th className="pCentre" scope="col">3-day</th>
                            <th className="pCentre" scope="col">4-day</th>
                            <th className="pCentre" scope="col">5-day</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td><i className={`pCentre wi wi-owm-${forecast.weather[0].id}`}/></td>
                            ))}
                        </tr>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td className="pCentre">{forecast.weather[0].description}</td>
                            ))}
                        </tr>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td className="pCentre">{Math.round(forecast.main.temp)}</td>
                            ))}
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