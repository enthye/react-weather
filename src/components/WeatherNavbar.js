import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import github from "../resources/github32.png";

export default class WeatherNavbar extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-dark bg-primary">
                <NavbarBrand style={{color: 'white'}}
                             href="/">React Weather</NavbarBrand>

                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City e.g. Sydney"/>
                    <input type="text" name="country" placeholder="Country e.g. Australia"/>
                    <button>Get Weather!</button>
                </form>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="https://github.com/enthye">
                        <img src={github}/>
                    </a></li>
                </ul>
            </Navbar>
        )
    }
}