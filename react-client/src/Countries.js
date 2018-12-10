import React, { Component } from 'react';

class Countries extends Component {
    
    render() {
        var countriesRendered = this.props.countries.map(
            (country,index)=> <li key={index}>{country.name.common}</li>
          )
        return(
            <ul>
                {countriesRendered}
            </ul>
        )
    }
}

export default Countries