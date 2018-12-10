import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from "./Navbar"
import Home from "./Home"
import Countries from "./Countries"
import Profile from "./Profile"
class App extends Component {
  state = {
    countries : [],
    username: "",
    password: "",
    page: "Home",
    loggedIn: false
  }

  componentDidMount() {
     axios("http://localhost:3001/countries", {withCredentials: true})
        .then((result)=> {
          this.setState({countries: result.data})
        })
        .catch((error)=> {
          console.log(error)
        })
  }

  navigate = (route)=> {
    this.setState({page: route})
  }

  handleFormChange = (event) => {
    var inputChange = {}
    inputChange[event.target.name] = event.target.value
    this.setState(inputChange)
  }

  submitForm = () => {
    axios("http://localhost:3001/users/login", {
      withCredentials: true,
      method: "POST",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then((result)=> {
      this.setState({loggedIn: true})
    })
  }

  render() {
    var currentNav = {}
    switch(this.state.page) {
      case("Home"):
        currentNav = <Home handleFormChange={this.handleFormChange} submitForm={this.submitForm}/>
        break;
      case("Countries"):
        debugger
        currentNav = <Countries countries={this.state.countries}/>
        break;
      case("Profile"):
        if(this.state.loggedIn) {
          currentNav = <Profile />
        } else {
          currentNav = <Home handleFormChange={this.handleFormChange} submitForm={this.submitForm}/>
        }
        break;
      default:
        currentNav = <Home handleFormChange={this.handleFormChange} submitForm={this.submitForm}/>
        break;
    }

    return (
      <div className="App">
        <Navbar navigate={this.navigate} />
        {currentNav}
      </div>
    );
  }
}

export default App;
