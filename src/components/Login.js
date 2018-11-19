import React, { Component } from "react";
import axios from "axios";

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
    const { email, password } = this.state;
    if (!this.state.email || !this.state.password)
      return alert(`Please enter credentials.`);
    axios
      .post("/auth/login", { email, password })
      .then(res => {
        console.log(res.data);
        this.props.history.push("/notepad");
      })
      .catch(err => alert("Email or Password incorrect."));
  }

  render() {
    return (
      <div className="register_login">
        <div className="login_box">
          <h1>Login</h1>
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
          <button onClick={e => this.login(e)}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default Login;
