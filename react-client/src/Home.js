import React, { Component } from 'react';

class Home extends Component {
    
    render() {
        return(
            <div>
                <input name="username" onChange={this.props.handleFormChange} type="text" placeholder="username"/>
                <input name="password" onChange={this.props.handleFormChange} type="password" placholder="password"/>
                <button onClick={this.props.submitForm}>Submit</button>
            </div>
        )
    }
}

export default Home