import React, { Component } from "react";

class Register extends Component {
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

  render() {
    return (
      <div>
        <h1>Register</h1>
        <input type="email" onChange={e => this.handleEmail(e)} />
        <input type="password" onChange={e => this.handlePassword(e)} />
        <button>Register</button>
      </div>
    );
  }
}

export default Register;
