import React from 'react';

class LocationForm extends React.Component {
    render() {
        return(
            <div>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City e.g. Andorra la Vella"/>
                    <input type="text" name="country" placeholder="Country e.g. Andorra"/>
                    <button>Get Weather!</button>
                </form>
            </div>
        );
    }
}

export default LocationForm;