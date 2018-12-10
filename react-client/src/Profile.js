import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: ""
    }

    componentDidMount() {
        axios("http://localhost:3001/users/profile", {withCredentials: true})
        .then((result)=> {

            this.setState({
                firstname: result.data.firstname,
                lastname: result.data.lastname,
                email: result.data.email
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    render() {
        return(
            <ul>
                <li>{this.state.firstname}</li>
                <li>{this.state.lastname}</li>
                <li>{this.state.email}</li>
            </ul>
        )
    }
}

export default Profile