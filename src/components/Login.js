import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
// import { connect } from "react-redux";
// import getUserNotes from "../ducks/reducer";

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
        // this.props.getUserNotes(res.data);
      })
      .catch(err => alert("Email or Password incorrect."));
  }

  render() {
    return (
      <div className="login_register_main">
        <h2>Thought Jotter</h2>
        <div className="register_login">
          <div className="login_box">
            <h3>Login</h3>
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
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     notes: state.notes
//   };
// }

// export default connect(mapStateToProps, {getUserNotes})(Login)

export default Login;
