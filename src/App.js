import React, { Component } from 'react';
import LocationForm from "./Components/LocationForm";
import TodayWeather from "./Components/TodayWeather";
import ForecastWeather from "./Components/ForecastWeather";

const API_KEY = "71eb129e18301960365e1221adc9cf1b";

class App extends Component {
    // state of weather data
    state = {
        city: undefined,
        country:undefined,
        conditions: undefined,
        temperature: undefined,
        winddirection: undefined,
        windspeed: undefined,
        humidity: undefined,
        forecast: undefined
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

        console.log(data);
        console.log(data_forecast);

        // set the weather data into state
        this.setState({
            city: data.name,
            country:data.sys.country,
            conditions: data.weather[0].description,
            temperature: data.main.temp,
            winddirection: data.wind.deg,
            windspeed: data.wind.speed,
            humidity: data.main.humidity,
            forecast: [
                data_forecast.list[6],
                data_forecast.list[14],
                data_forecast.list[23],
                data_forecast.list[30],
                data_forecast.list[37]
                ]
        });

        console.log(this.state.forecast);
    }

    render() {
    return (
        <div>
            React Weather
            <LocationForm getWeather={this.getWeather}/>
            <TodayWeather
                city={this.state.city}
                country={this.state.country}
                conditions={this.state.conditions}
                temperature={this.state.temperature}
                windspeed={this.state.windspeed}
                winddirection={this.state.winddirection}
                humidity={this.state.humidity}
            />
            <ForecastWeather
                forecast={this.state.forecast}
            />
        </div>
    );
  }
}

export default App;
