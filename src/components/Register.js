import React, { Component } from "react";
import axios from 'axios'

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
  
  register(){
    const {email, password} = this.state
    axios.post('/api/createuser', {email, password}).then(res => {
      console.log(res.data)
      this.props.history.push('/notepad')
    })
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <input type="email" onChange={e => this.handleEmail(e)} />
        <input type="password" onChange={e => this.handlePassword(e)} />
        <button onClick={e => this.register(e)}>Register</button>
      </div>
    );
  }
}

export default Register;
