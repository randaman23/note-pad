import React, { Component } from "react";
import axios from "axios";

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

  register() {
    const { email, password } = this.state;
    axios
      .post("/api/createuser", { email, password })
      .then(res => {
        console.log(res.data);
        this.props.history.push("/notepad");
      })
      .catch(err => alert("This Email is already Registered with an Account."));
  }

  render() {
    return (
      <div className="login_register_main">
        <h2>Thought Jotter</h2>
        <div className="register_login">
          <div className="login_box">
            <h3>Register</h3>
            <input
              type="email"
              placeholder="Email"
              onChange={e => this.handleEmail(e)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.handlePassword(e)}
            />
            <br />
            <button onClick={e => this.register(e)}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
