import React, { Component } from 'react';


class Navbar extends Component {
    
    render() {
        return(
            <ul>
                <li onClick={()=>{this.props.navigate("Home")}}><a>Home</a></li>
                <li onClick={()=>{this.props.navigate("Countries")}}><a></a>Countries</li>
                <li onClick={()=>{this.props.navigate("Profile")}}><a></a>Profile</li>
            </ul>

        )
    }
}

export default Navbar