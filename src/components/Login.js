import React, { Component } from "react";
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  login() {
    axios.post()
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="email" onChange={e => this.handleEmail(e)} />
        <input type="password" onChange={e => this.handlePassword(e)} />
        <button onClick={e => this.login(e)}>Sign In</button>
      </div>
    );
  }
}

export default Login;
