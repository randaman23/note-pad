import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="email" />
        <input type="password" />
        <button>Sign In</button>
      </div>
    );
  }
}

export default Login;
