import React from 'react';

class ForecastWeather extends React.Component {
    render() {
        return (
            <div>
                {this.props.forecast &&
                <div>
                    <h1 align="center">5-day Weather Forecast</h1>
                    <table className="tableWeather">
                        <thead>
                        <tr>
                            <th className="centre" scope="col">1-day</th>
                            <th className="centre" scope="col">2-day</th>
                            <th className="centre" scope="col">3-day</th>
                            <th className="centre" scope="col">4-day</th>
                            <th className="centre" scope="col">5-day</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td align="center"><i className={`wi wi-owm-${forecast.weather[0].id}`}/></td>
                            ))}
                        </tr>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td className="centre">{forecast.weather[0].description}</td>
                            ))}
                        </tr>
                        <tr>
                            {this.props.forecast.map( (forecast) => (
                                <td className="centre">{Math.round(forecast.main.temp)}</td>
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