import React from 'react';

class TodayWeather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&
                <div>
                    <h1>Today's Weather for {this.props.city}, {this.props.country}.</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <i className={`wi wi-owm-${this.props.conditionsId}`}/>
                                    <p>{this.props.conditions}</p>
                                </td>
                                <td>
                                    <i className="wi wi-thermometer"/>
                                    <p>{this.props.temperature}&#8451;</p>
                                </td>
                                <td>
                                    <i className="wi wi-humidity"/>
                                    <p>{this.props.humidity}%</p>
                                </td>
                                <td>
                                    <i className={`wi wi-wind towards-${this.props.winddirection}-deg`}/>
                                    <p>{this.props.windspeed} km/hr</p>
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