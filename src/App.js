import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons-npm/css/weather-icons.css';
import TodayWeather from "./components/TodayWeather";
import ForecastWeather from "./components/ForecastWeather";
import WeatherNavbar from "./components/WeatherNavbar";

const API_KEY = "71eb129e18301960365e1221adc9cf1b";

class App extends Component {
    // state of weather data
    state = {
        city: undefined,
        country:undefined,
        conditions: undefined,
        conditionsId: undefined,
        temperature: undefined,
        winddirection: undefined,
        windspeed: undefined,
        humidity: undefined,
        forecast: undefined,
        error: undefined
    }

    // fetches required weather data from OpenWeatherMap.org
    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const api_call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const api_forecast_call = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();
        const data_forecast = await api_forecast_call.json();

        console.log(data_forecast);

        if (city && country) {
            // set the weather data into state
            this.setState({
                city: data.name,
                country:data.sys.country,
                conditions: data.weather[0].description,
                conditionsId: data.weather[0].id,
                temperature: Math.round(data.main.temp),
                winddirection: data.wind.deg,
                windspeed: Math.round(data.wind.speed),
                humidity: data.main.humidity,
                forecast: [
                    data_forecast.list[6],
                    data_forecast.list[14],
                    data_forecast.list[23],
                    data_forecast.list[30],
                    data_forecast.list[36]
                ],
                error: ""
            });
        } else {
            this.setState({
                city: undefined,
                country:undefined,
                conditions: undefined,
                conditionsMain: undefined,
                temperature: undefined,
                winddirection: undefined,
                windspeed: undefined,
                humidity: undefined,
                forecast: undefined,
                error: "Please enter your City and Country."
            });
        }
    };

    render() {
    return (
        <div>
            <WeatherNavbar getWeather={this.getWeather}/>
            <TodayWeather
                city={this.state.city}
                country={this.state.country}
                conditions={this.state.conditions}
                conditionsId={this.state.conditionsId}
                temperature={this.state.temperature}
                windspeed={this.state.windspeed}
                winddirection={this.state.winddirection}
                humidity={this.state.humidity}
                error={this.state.error}
            />
            <ForecastWeather
                forecast={this.state.forecast}
            />
        </div>
    );
  }
}

export default App;
