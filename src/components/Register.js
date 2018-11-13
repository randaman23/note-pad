import React, { Component } from "react";

class Register extends Component {
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
        <h1>Register</h1>
        <input type="email" />
        <input type="text" />
        <button>Register</button>
      </div>
    );
  }
}

export default Register;
