import React from 'react';

class TodayWeather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&
                <div>
                    <h1>Today's Weather for {this.props.city}, {this.props.country}.</h1>
                    <table className="tableWeather">
                        <tbody>
                            <tr>
                                <td align="center">
                                    <i className={`wi wi-owm-${this.props.conditionsId}`}/>
                                    <p className="centre">{this.props.conditions}</p>
                                </td>
                                <td align="center">
                                    <i className="wi wi-thermometer"/>
                                    <p className="centre">{this.props.temperature}&#8451;</p>
                                </td>
                                <td align="center">
                                    <i className="wi wi-humidity"/>
                                    <p className="centre">{this.props.humidity}%</p>
                                </td>
                                <td align="center">
                                    <i className={`wi wi-wind towards-${this.props.winddirection}-deg`}/>
                                    <p className="centre">{this.props.windspeed} km/hr</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>}
                {this.props.error}
            </div>
        );
    }
}

export default TodayWeather;